import { useMediaQuery } from '@mui/material'
import { HeroConstants } from '../../HeroConstants'
import { useScroll } from 'framer-motion'
import { AnimatedBubble } from '../AnimatedBuble/AnimatedBuble'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const AnimatedThirdImage = ({ scrollElementRef }: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)')

	const { scrollYProgress } = useScroll({
		target: scrollElementRef,
	})

	const getGeometryGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [120, 70, 70, 120],
				y: [-140, -85, -85, -140],
			}
		}

		return {
			x: [250, 170, 170, 250],
			y: [-300, -240, -240, -300],
		}
	}

	const getTextureGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, 100, 100, 160],
				y: [0, -80, -80, -140],
			}
		}

		return {
			x: [0, 170, 170, 250],
			y: [0, -210, -210, -300],
		}
	}

	const getThreeDAnimatorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, 70, 70, 70],
				y: [0, 70, 70, 70],
			}
		}

		return {
			x: [0, 170, 170, 170],
			y: [0, 170, 170, 170],
		}
	}

	return (
		<>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[1].images[2] as any}
				mainInterval={HeroConstants[1].mainInterval}
				translateValues={getGeometryGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>

			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[2].images[2] as any}
				mainInterval={HeroConstants[2].mainInterval}
				translateValues={getTextureGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[3].images[2] as any}
				mainInterval={HeroConstants[3].mainInterval}
				translateValues={getThreeDAnimatorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
				opacityInterval={[0, 1, 1, 1]}
			/>
		</>
	)
}
