import { useMediaQuery } from '@mui/material'
import { m, useTransform } from 'framer-motion'
import React from 'react';

interface IProps {
	imgSrc: string
	scrollYProgress: any
	mainInterval: number[]
	translateInterval: number[]
	translateValues: {
		x: number[]
		y: number[]
	}
	opacityInterval?: number[]
}

export const AnimatedBubble = ({
	imgSrc,
	scrollYProgress,
	mainInterval,
	translateInterval,
	translateValues,
	opacityInterval = [0, 1, 1, 0],
}: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)')
	const isSmallerScreen = useMediaQuery('(max-width: 400px)')

	const getScale = () => {
		if (isSmallerScreen) {
			return 0.65
		}

		return Math.min(window.innerHeight / 1000, 1)
	}

	const scaledTranslateXValues = translateValues.x.map((value) => value * getScale())
	const scaledTranslateYValues = translateValues.y.map((value) => value * getScale())

	const mainAnimation = useTransform(scrollYProgress, mainInterval, [0, 1])
	const opacityAnimation = useTransform(mainAnimation, translateInterval, opacityInterval)
	const translateX = useTransform(mainAnimation, translateInterval, scaledTranslateXValues)
	const translateY = useTransform(mainAnimation, translateInterval, scaledTranslateYValues)
	const rotateAnimation = useTransform(mainAnimation, [0, 0.75, 1], [15, 0, 0])

	return (
		<m.img
			src={imgSrc}
			alt='Hero small image'
			style={{
				width: isSmallScreen ? '140px' : '240px',
				position: 'absolute',
				translateX: translateX,
				translateY: translateY,
				opacity: opacityAnimation,
				rotate: rotateAnimation,
				scale: getScale(),
			}}
		/>
	)
}
