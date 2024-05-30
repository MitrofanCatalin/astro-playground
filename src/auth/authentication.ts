import { Amplify, type ResourcesConfig } from 'aws-amplify'
import awsconfig from './aws-exports.js'
import {
	signInWithRedirect,
	signIn as awsSignIn,
	getCurrentUser,
	confirmSignUp,
	fetchAuthSession,
	signOut
} from '@aws-amplify/auth'
import { CookieStorage } from 'aws-amplify/utils'
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito'

let user = null
let amplifyConfigured = false

const configureAmplify = (apiUrls: any, ssoRedirect: string) => {
	if (amplifyConfigured) return
	const IS_LOCALHOST = apiUrls.env === 'localhost'
	const authSetup: ResourcesConfig['Auth'] = {
		Cognito: {
			userPoolClientId: awsconfig.aws_user_pools_web_client_id,
			userPoolId: awsconfig.aws_user_pools_id,
			signUpVerificationMethod: 'code',
			loginWith: {
				oauth: {
					domain: awsconfig.oauth.domain,
					scopes: awsconfig.oauth.scope,
					redirectSignIn: [ssoRedirect],
					redirectSignOut: [ssoRedirect],
					responseType: awsconfig.oauth.responseType as any,
				},
				username: true,
				email: true,
				phone: false,
			},

			passwordFormat: {
				minLength: 8,
				requireLowercase: true,
				requireUppercase: true,
				requireNumbers: true,
				requireSpecialCharacters: false,
			},
		},
	}

	const cookieStorage = {
		domain: IS_LOCALHOST ? 'localhost' : '.charmed.ai',
		secure: !IS_LOCALHOST,
		path: '/',
		expires: 365,
	}

	// todo: testing purposes

	Amplify.configure({ Auth: authSetup })
	const cookieStorageConfig = new CookieStorage(cookieStorage)
	cognitoUserPoolsTokenProvider.setKeyValueStorage(cookieStorageConfig)

	amplifyConfigured = true
}

export const useAuth = (apiUrls: any, ssoRedirect: string) => {
	configureAmplify(apiUrls, ssoRedirect)
	const signIn = async (email: string, password: string) => {
		await awsSignIn({
			username: email,
			password,
			options: {
				autoSignIn: true,
			},
		})
		const user = await getCurrentUser()

		return user
	}

	// const signOut = () => {
	// 	user = null
	// }

	const getUser = async () => {
		const u = await getCurrentUser()
		user = u
		return user
	}

	const getCurrentSession = async () => {
		const session = await fetchAuthSession({ forceRefresh: true })
		return session
	}

	const validateEmail = async (email: string, password: string, code: string) => {
		await confirmSignUp({ username: email, confirmationCode: code })

		user = await signIn(email, password)
		return user
	}

	const googleSSO = async (redirectUrl: any) => {
		const response = await signInWithRedirect({ provider: 'Google', customState: JSON.stringify(redirectUrl) })

		return response
	}

	const githubSSO = async (redirectUrl: any) => {
		const response = await signInWithRedirect({
			provider: {
				custom: 'GitHub',
			},
			customState: JSON.stringify(redirectUrl),
		})

		return response
	}

	return {
		signIn,
		getUser,
		signOut,
		validateEmail,
		googleSSO,
		githubSSO,
		getCurrentSession,
	}
}
