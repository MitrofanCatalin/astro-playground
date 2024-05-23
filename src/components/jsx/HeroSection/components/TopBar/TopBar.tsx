import { Button, Link } from '@mui/material'
import { StyledTopBar } from './StyledTopBar'
import React from 'react';
import logo from '../../../../../assets/Logo.png'

export const TopBar = () => {
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
				<Button className='nav-button' >
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
				</Button>

				<Button
					variant='outlined'

					sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: 'rgba(209, 205, 218, 1)', fontWeight: 700 }}
				>
					Log in
				</Button>
				<Button
					variant='contained'

					sx={{
						fontWeight: 700,
					}}
				>
					Signup
				</Button>

			</div>

		</StyledTopBar>
	)
}
