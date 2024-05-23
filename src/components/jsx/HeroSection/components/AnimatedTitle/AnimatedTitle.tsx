import { Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { m, useTransform } from 'framer-motion'
import React from 'react';

interface IProps {
	scrollYProgress: any
	title: string
	translateValue: number[]
	baseValue: number[]
	mainInterval: number[]
}

export const AnimatedTitle = ({ title, scrollYProgress, translateValue, baseValue, mainInterval }: IProps) => {
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
						fontWeight: 500,
						lineHeight: getLineHeight(),
						color: 'rgba(159, 154, 171, 1)',
						fontSize: getFontSize(),
						textAlign: isVerySmallScreen ? 'center' : 'auto',
						textWrap: 'nowrap',
					}}
				>
					{title}
				</Typography>
			</m.div>
		</>
	)
}
