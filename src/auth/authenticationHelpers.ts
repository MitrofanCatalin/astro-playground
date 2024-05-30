import {
	fetchAuthSession,
	getCurrentUser,
	signOut as awsSignOut,
	confirmResetPassword,
	resetPassword,
	resendSignUpCode,
	signIn,
} from '@aws-amplify/auth'
import { Hub } from '@aws-amplify/core'

export const useAuthHelpers = () => {
	const getAuthenticatedUser = async () => {
		const user = getCurrentUser()
		return user
	}

	const getCurrentSession = async () => {
		const session = await fetchAuthSession()
		return session
	}

	const handleSignOut = async () => {
		await awsSignOut()
	}

	const getAmplifyHub = (): any => {
		return Hub
	}

	const amplifyConfirmResetPassword = async ({
		username,
		confirmationCode,
		newPassword,
	}: {
		username: string
		confirmationCode: string
		newPassword: string
	}) => {
		await confirmResetPassword({ username, confirmationCode, newPassword })
	}

	const amplifyResetPassword = async (username: string) => {
		resetPassword({
			username,
			options: {
				source: 'ResetPassword',
			},
		})
	}

	const amplifyResendSignUpCode = async ({ username }: { username: string }) => {
		resendSignUpCode({ username, options: { source: 'SignUp' } })
	}

	const amplifySignIn = async (email: string, password: string) => {
		const user = await signIn({ username: email, password })

		return user
	}

	return {
		getAuthenticatedUser,
		getCurrentSession,
		handleSignOut,
		getAmplifyHub,
		amplifyConfirmResetPassword,
		amplifyResetPassword,
		amplifyResendSignUpCode,
		amplifySignIn,
	}
}
