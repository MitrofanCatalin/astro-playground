import { useMediaQuery } from '@mui/material'
import { HeroConstants } from '../../HeroConstants'
import { useScroll } from 'framer-motion'
import { AnimatedBubble } from '../AnimatedBuble/AnimatedBuble'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const AnimatedFirstImage = ({ scrollElementRef }: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)')

	const { scrollYProgress } = useScroll({
		target: scrollElementRef,
	})

	const getGeometryGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [-180, -115, -115, -180],
				y: [-140, -70, -70, -140],
			}
		}

		return {
			x: [-300, -250, -250, -300],
			y: [-230, -200, -200, -230],
		}
	}

	const getTextureGeneratorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, -115, -115, -180],
				y: [0, -60, -60, -140],
			}
		}

		return {
			x: [0, -200, -200, -300],
			y: [0, -190, -190, -230],
		}
	}

	const getThreeDAnimatorTransitionValues = () => {
		if (isSmallScreen) {
			return {
				x: [0, 0, 0, 0],
				y: [-50, -80, -80, -80],
			}
		}

		return {
			x: [0, 0, 0, 0],
			y: [-80, -240, -240, -240],
		}
	}

	return (
		<>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[1].images[0] as any}
				mainInterval={HeroConstants[1].mainInterval}
				translateValues={getGeometryGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[2].images[0] as any}
				mainInterval={HeroConstants[2].mainInterval}
				translateValues={getTextureGeneratorTransitionValues()}
				translateInterval={[0, 0.45, 0.55, 1]}
			/>
			<AnimatedBubble
				scrollYProgress={scrollYProgress}
				imgSrc={HeroConstants[3].images[0] as any}
				mainInterval={HeroConstants[3].mainInterval}
				translateValues={getThreeDAnimatorTransitionValues()}
				translateInterval={[0, 0.35, 1, 1]}
				opacityInterval={[0, 1, 1, 1]}
			/>
		</>
	)
}
