import { Typography } from '@mui/material'
import { Box, useMediaQuery } from '@mui/material'
import { m, useTransform } from 'framer-motion'
import React from 'react';

interface IProps {
	scrollYProgress: any
	subtitle: string
	translateValue: number[]
	baseValue: number[]
	mainInterval: number[]
}

export const AnimatedSubtitle = ({ subtitle, scrollYProgress, translateValue, baseValue, mainInterval }: IProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 1000px)')
	const isVerySmallScreen = useMediaQuery('(max-width: 768px)')

	const titleTranslateBase = useTransform(scrollYProgress, mainInterval, [0, 1])
	const titleTranslateValue = useTransform(titleTranslateBase, baseValue, translateValue)

	const getFontSize = () => {
		if (isVerySmallScreen) {
			return '16px'
		}

		if (isSmallScreen) {
			return '20px'
		}

		return '20px'
	}

	const getLineHeight = () => {
		if (isVerySmallScreen) {
			return '1'
		}

		if (isSmallScreen) {
			return '32px'
		}

		return '32px'
	}

	const getDescriptionFontSize = () => {
		const newSize = (window.innerWidth / 1440) * 52

		return `${Math.min(Math.round(newSize), 52)}px`
	}

	const getDescriptionLineHeight = () => {
		const newSize = (window.innerWidth / 1440) * 64

		return `${Math.min(Math.round(newSize), 64)}px`
	}

	return (
		<>
			<m.div
				style={{
					translateY: titleTranslateValue,
					width: '100%',
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
					{subtitle}
				</Typography>
			</m.div>
		</>
	)
}
