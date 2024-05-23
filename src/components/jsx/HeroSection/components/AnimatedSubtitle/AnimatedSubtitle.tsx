import { Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
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
	const isVerySmallScreen = useMediaQuery('(max-width: 768px)')

	const titleTranslateBase = useTransform(scrollYProgress, mainInterval, [0, 1])
	const titleTranslateValue = useTransform(titleTranslateBase, baseValue, translateValue)

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
