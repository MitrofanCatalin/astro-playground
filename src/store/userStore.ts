import { atom, computed } from 'nanostores'
import { useAuth, useAuthHelpers, apiUrls } from '../auth/index'
const { signOut, getUser, } = useAuth(apiUrls, 'http://localhost:4321')
const { getCurrentSession: fetchAuthSession } = useAuthHelpers()

export const isLoading = atom(true)
export const user = atom<any>(null)
export const session = atom<any>(null)
export const permissions = atom<any>({
    texture_generator: null,
    multiple_exploration: null,
    explore_geometries_dev: null,
    explore_geometries_prod: null,
})
export const fetchingUser = atom(true)
export const credits = atom(0)

export const allowNegative = atom(false)
export const userPlan = atom<any>(null)
export const shouldDisplayModalWarning = atom(false)
export const shouldDisplayBannerWarning = atom(false)
export const shouldDisplayNoCreditsToast = atom(false)
export const isPayingSubscription = atom(false)
export const ssoRedirectUrl = atom<string>('')

export const isAuthenticated = computed(user, (user) => Boolean(user))

export const redirect = () => {
    window.location.reload()
}

export const getUserProfile = async () => {
    if (!user.get()) return
    const { username } = user.get()
    try {
        const status = 201 | 200
        // await userApi.createUserProfile(username)

        if (status === 201) {
            // @ts-expect-error data-layer does not exist on window
            window.dataLayer.push({ event: 'create-account' })
        }
        return status
    } catch {
        return 500
    }
}

export const getAuthenticatedUser = async (whereFrom?: string) => {
    try {
        const userData = await getUser()
        const sessionData = await fetchAuthSession()
        console.log(userData)
        user.set({
            ...userData,
            email: sessionData?.tokens?.idToken?.payload?.email || userData.username,
        })
        const status = await getUserProfile()

        session.set(sessionData)

        if (status === 200) {
            console.log('user plan request started')
        }

        fetchingUser.set(false)
    } catch (e) {
        fetchingUser.set(false)
        isLoading.set(false)
        console.log(e)
    }
}


export const logOut = async () => {
    await signOut()
    removeUser()
    redirect()
}

export const removeUser = () => {
    user.set(null)
}
