import { HeroConstants } from '../HeroConstants'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { AnimatedTitle } from './AnimatedTitle/AnimatedTitle'
import { Box, useMediaQuery } from '@mui/material'
import { useState } from 'react'
// import { useTopBar } from 'features/TopBar/useTopBar'
import { Button } from '@mui/material'
import { AnimatedSubtitle } from './AnimatedSubtitle/AnimatedSubtitle'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const Description = ({ containerRef, scrollElementRef }: IProps) => {
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

	const getGap = () => {
		if (isVerySmallScreen) {
			return '16px'
		}

		if (isSmallScreen) {
			return '20px'
		}

		return '32px'
	}

	const getDescriptionHeight = () => {
		if (isVerySmallScreen) {
			return '64px'
		}

		if (isSmallScreen) {
			return '170px'
		}

		return '300px'
	}

	return (
		<>
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
				<Box sx={{ width: '100%', overflow: 'hidden', height: isVerySmallScreen ? '16px' : '35px' }}>
					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedTitle
							scrollYProgress={scrollYProgress}
							title={HeroConstants[0].title}
							mainInterval={[0, 0.15]}
							baseValue={[0, 0.75, 1]}
							translateValue={[0, 0, isVerySmallScreen ? -20 : -40]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedTitle
							scrollYProgress={scrollYProgress}
							title={HeroConstants[1].title}
							mainInterval={[0.1, 0.32]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[40, 0, 0, -40]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedTitle
							scrollYProgress={scrollYProgress}
							title={HeroConstants[2].title}
							mainInterval={[0.31, 0.65]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[isVerySmallScreen ? 20 : 40, 0, 0, isVerySmallScreen ? -20 : -40]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedTitle
							scrollYProgress={scrollYProgress}
							title={HeroConstants[3].title}
							mainInterval={[0.63, 1]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[isVerySmallScreen ? 20 : 40, 0, 0, 0]}
						/>
					</Box>
				</Box>
				<Box sx={{ width: '100%', overflow: 'hidden', height: getDescriptionHeight() }}>
					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedSubtitle
							scrollYProgress={scrollYProgress}
							subtitle={HeroConstants[0].subtitle}
							mainInterval={[0, 0.15]}
							baseValue={[0, 0.75, 1]}
							translateValue={[0, 0, isVerySmallScreen ? -120 : -310]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedSubtitle
							scrollYProgress={scrollYProgress}
							subtitle={HeroConstants[1].subtitle}
							mainInterval={[0.1, 0.36]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[isVerySmallScreen ? 120 : 310, 0, 0, isVerySmallScreen ? -120 : -310]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedSubtitle
							scrollYProgress={scrollYProgress}
							subtitle={HeroConstants[2].subtitle}
							mainInterval={[0.31, 0.67]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[isVerySmallScreen ? 120 : 310, 0, 0, isVerySmallScreen ? -120 : -310]}
						/>
					</Box>

					<Box sx={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
						<AnimatedSubtitle
							scrollYProgress={scrollYProgress}
							subtitle={HeroConstants[3].subtitle}
							mainInterval={[0.62, 1]}
							baseValue={[0, 0.25, 0.75, 1]}
							translateValue={[isVerySmallScreen ? 120 : 310, 0, 0, 0]}
						/>
					</Box>
				</Box>

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
		</>
	)
}
