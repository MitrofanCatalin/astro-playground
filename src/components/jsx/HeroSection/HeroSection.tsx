import { LazyMotion, domAnimation } from 'framer-motion'
import { useRef, } from 'react'
import { StyledHeroSection } from './StyledHeroSection'
import { Description } from './components/Description'
import { Box, useMediaQuery } from '@mui/material'
import { AnimatedMainImage } from './components/ AnimatedMainImage/AnimatedMainImage'
import { AnimatedFirstImage } from './components/AnimatedFirstImage/AnimatedFirstImate'
import { AnimatedSecondImage } from './components/AnimatedSecondImage/AnimatedSecondImage'
import { AnimatedThirdImage } from './components/AnimatedThirdImage/AnimatedThirdimage'
import { ButtonColumn } from './components/ButtonColumn'
import React from 'react'

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const HeroSection = ({ containerRef, scrollElementRef }: IProps) => {
	const targetRef = useRef<HTMLDivElement | null>(null)
	const isSmallScreen = useMediaQuery('(max-width: 1100px)')
	const isVerySmallScreen = useMediaQuery('(max-width: 768px)')

	const getBoxHeight = () => {
		if (isVerySmallScreen) {
			return '170px'
		}

		if (isSmallScreen) {
			return '300px'
		}

		return '420px'
	}

	return (
		<LazyMotion strict features={domAnimation}>
			<StyledHeroSection>
				<Box
					sx={{
						position: 'relative',
						width: isVerySmallScreen ? '100%' : '444px',
						height: getBoxHeight(),
						display: 'flex',
						justifyContent: 'center',
						zIndex: 99,
						alignItems: isVerySmallScreen ? 'flex-start' : 'center',
					}}
				>
					<Description containerRef={containerRef} scrollElementRef={scrollElementRef} />
				</Box>
				<Box ref={targetRef} className='container-box' sx={{ height: 'auto' }}>
					<AnimatedMainImage containerRef={containerRef} scrollElementRef={scrollElementRef} />
					<AnimatedFirstImage containerRef={containerRef} scrollElementRef={scrollElementRef} />
					<AnimatedSecondImage containerRef={containerRef} scrollElementRef={scrollElementRef} />
					<AnimatedThirdImage containerRef={containerRef} scrollElementRef={scrollElementRef} />
				</Box>
				<ButtonColumn containerRef={containerRef} scrollElementRef={scrollElementRef} />
			</StyledHeroSection>
		</LazyMotion>
	)
}
