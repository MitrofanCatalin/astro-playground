import { useMediaQuery } from '@mui/material'
import { HeroConstants } from '../../HeroConstants'
import { useScroll } from 'framer-motion'
import { AnimatedBubble } from '../AnimatedBuble/AnimatedBuble'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const AnimatedSecondImage = ({ scrollElementRef }: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)')

	const { scrollYProgress } = useScroll({
		target: scrollElementRef,
	})

	const getGeometryGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [-180, -130, -130, -180],
				y: [140, 80, 80, 140],
			}
		}

		return {
			x: [-300, -250, -250, -300],
			y: [230, 200, 200, 230],
		}
	}

	const getTextureGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, -115, -115, -165],
				y: [0, 80, 80, 140],
			}
		}

		return {
			x: [0, -200, -200, -300],
			y: [0, 170, 170, 230],
		}
	}

	const getThreeDAnimatorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, -80, -80, -80],
				y: [0, 70, 70, 70],
			}
		}

		return {
			x: [0, -200, -200, -200],
			y: [0, 170, 170, 170],
		}
	}

	return (
		<>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[1].images[1] as any}
				mainInterval={HeroConstants[1].mainInterval}
				translateValues={getGeometryGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[2].images[1] as any}
				mainInterval={HeroConstants[2].mainInterval}
				translateValues={getTextureGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[3].images[1] as any}
				mainInterval={HeroConstants[3].mainInterval}
				translateValues={getThreeDAnimatorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
				opacityInterval={[0, 1, 1, 1]}
			/>
		</>
	)
}
