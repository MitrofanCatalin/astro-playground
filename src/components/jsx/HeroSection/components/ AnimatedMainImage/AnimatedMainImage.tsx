import { useMediaQuery } from '@mui/material'
import { HeroConstants } from '../../HeroConstants'
import { m, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const AnimatedMainImage = ({ scrollElementRef }: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)')
	const { scrollYProgress } = useScroll({
		target: scrollElementRef,
	})

	const getScales = () => {
		const viewHeight = window.innerHeight
		const initialScale = (viewHeight * 1.4) / 900
		const defaultScale = viewHeight / 900

		return {
			initialScale: Math.min(initialScale, 1.4),
			defaultScale: Math.min(defaultScale, 1),
		}
	}

	const geometryGenerator = useTransform(scrollYProgress, [0.02, 0.32], [0, 1])
	const geometryGeneratorScale = useTransform(
		geometryGenerator,
		[0, 0.45, 0.55, 1],
		[getScales().initialScale, getScales().defaultScale, getScales().defaultScale, 0],
	)
	const geometryGeneratorOpacity = useTransform(geometryGenerator, [0, 0.85, 1], [1, 1, 0])

	const textureGenerator = useTransform(scrollYProgress, [0.31, 0.65], [0, 1])
	const textureGeneratorOpacity = useTransform(textureGenerator, [0, 0.45, 0.55, 1], [0, 1, 1, 0])

	const threeDAnimator = useTransform(scrollYProgress, [0.63, 1], [0, 1])
	const threeDAnimatorOpacity = useTransform(threeDAnimator, [0, 0.45], [0, 1])

	return (
		<>
			<m.img
				src={HeroConstants[1].imageUrl as any}
				alt='Hero Image'
				style={{
					maxWidth: isSmallScreen ? 'min(200px, 50vw)' : 'min(550px, 50vw)',
					position: 'absolute',
					scale: geometryGeneratorScale,
					opacity: geometryGeneratorOpacity,
					zIndex: 1,
				}}
			/>
			<m.img
				src={HeroConstants[2].imageUrl as any}
				alt='Hero Image'
				style={{
					maxWidth: isSmallScreen ? 'min(200px, 50vw)' : 'min(550px, 50vw)',
					position: 'absolute',
					opacity: textureGeneratorOpacity,
					zIndex: 1,
					scale: getScales().defaultScale,
				}}
			/>

			<m.img
				src={HeroConstants[3].imageUrl as any}
				alt='Hero Image'
				style={{
					maxWidth: isSmallScreen ? 'min(100px, 50vw)' : 'min(550px, 50vw)',
					position: 'absolute',
					opacity: threeDAnimatorOpacity,
					zIndex: 1,
					scale: getScales().defaultScale,
				}}
			/>
		</>
	)
}
