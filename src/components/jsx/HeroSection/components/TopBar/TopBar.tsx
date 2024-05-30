import { Button, Link } from '@mui/material'
import { StyledTopBar } from './StyledTopBar'
import { getAuthenticatedUser, user, isAuthenticated, logOut } from '../../../../../store/userStore';
import { useStore } from '@nanostores/react';

import React, { useEffect } from 'react';
import logo from '../../../../../assets/Logo.png'

export const TopBar = () => {
	const $user = useStore(user)
	const isAuth = useStore(isAuthenticated)
	useEffect(() => {
		getAuthenticatedUser()
	}, [])

	const signinUser = async () => {
		window.open('/login')
	}
	return (
		<StyledTopBar>
			<Link href='/' sx={{ display: 'flex' }} aria-label='Link to Charmed.ai'>
				<img src={logo.src} alt="Logo" />
			</Link>
			<div className='links'>
				<Button className='nav-button' >
					Meshes
				</Button>
				<Button className='nav-button' >
					Materials
				</Button>
				<Button className='nav-button' >
					Animations
				</Button>
				{/* <Button className='nav-button' >
					Quests
				</Button>

				<Button className='nav-button' >
					Pricing
				</Button>

				<Button className='nav-button' >
					Blog
				</Button>
				<Button className='nav-button'>
					Documentation
				</Button> */}
				{
					isAuth ?
						<Button className='nav-button' onClick={logOut}>
							log out
						</Button>
						:
						<Button className='nav-button' onClick={signinUser}>
							log in
						</Button>
				}
				<Button className='nav-button'>
					{$user?.email}
				</Button>
			</div>

		</StyledTopBar>
	)
}


