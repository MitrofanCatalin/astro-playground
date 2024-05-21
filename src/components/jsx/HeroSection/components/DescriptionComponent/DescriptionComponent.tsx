import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { HeroConstants } from '../../HeroConstants'
// import { useTopBar } from 'features/TopBar/useTopBar'
// import { AnimatedTitle } from '../AnimatedTitle/AnimatedTitle'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const DescriptionComponent = ({ containerRef, scrollElementRef }: IProps) => {
	const [index, setIndex] = useState(0)

	const { scrollYProgress } = useScroll({
		container: containerRef,
		target: scrollElementRef,
	})

	useMotionValueEvent(scrollYProgress, 'change', (latest: number) => {
		const getNewIndex = () => {
			if (latest < 0.16) return 0
			if (latest < 0.3) return 1
			if (latest < 0.62) return 2
			return 3
		}

		const newIndex = getNewIndex()
		if (newIndex !== index) {
			setIndex(newIndex)
		}
	})

	const data = HeroConstants[index]

	const isSmallScreen = useMediaQuery('(max-width: 1000px)')
	const isVerySmallScreen = useMediaQuery('(max-width: 768px)')
	// const { handleButtonClick: handleClick } = useTopBar()

	// const getFontSize = () => {
	// 	if (isVerySmallScreen) {
	// 		return '16px'
	// 	}

	// 	if (isSmallScreen) {
	// 		return '20px'
	// 	}

	// 	return '20px'
	// }

	// const getLineHeight = () => {
	// 	if (isVerySmallScreen) {
	// 		return '1'
	// 	}

	// 	if (isSmallScreen) {
	// 		return '32px'
	// 	}

	// 	return '32px'
	// }

	const getDescriptionFontSize = () => {
		const newSize = (window.innerWidth / 1440) * 52

		return `${Math.min(Math.round(newSize), 52)}px`
	}

	const getDescriptionLineHeight = () => {
		const newSize = (window.innerWidth / 1440) * 64

		return `${Math.min(Math.round(newSize), 64)}px`
	}

	const getGap = () => {
		if (isVerySmallScreen) {
			return '16px'
		}

		if (isSmallScreen) {
			return '20px'
		}

		return '32px'
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				gap: getGap(),
				width: '100%',
				height: '100%',
				zIndex: 1,
				alignItems: isVerySmallScreen ? 'center' : 'auto',
			}}
		>
			<Typography
				sx={{
					fontSize: getDescriptionFontSize(),
					fontWeight: 700,
					lineHeight: getDescriptionLineHeight(),
					color: 'white',
					textAlign: isVerySmallScreen ? 'center' : 'auto',
				}}
			>
				{data.subtitle}
			</Typography>
			<Button
				variant='contained'
				sx={{
					borderRadius: ' 16px',
					width: isVerySmallScreen ? 'auto' : '248px',
					height: isVerySmallScreen ? '48px' : '60px',
					fontWeight: 700,
				}}
				className='description-button'
			// onClick={() => handleClick(data.type)}
			>
				{data.buttonText}
			</Button>
		</Box>
	)
}
