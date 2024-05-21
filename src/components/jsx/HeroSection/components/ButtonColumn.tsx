import { Box, Button } from '@mui/material'
// import AnimationIcon from 'assets/svg/animation-generator.svg?react'
// import TextureIcon from 'assets/svg/texture-generator-list-item.svg?react'
// import GeometryIcon from 'assets/svg/Pyramid.svg?react'
import { useEffect, useState } from 'react'
import { HeroConstants } from '../HeroConstants'
import { useMotionValueEvent, useScroll } from 'framer-motion'
// import { getDeviceType } from '@charmed/components'
import React from 'react';

interface IProps {
	containerRef: React.RefObject<HTMLDivElement>
	scrollElementRef: React.RefObject<HTMLDivElement>
}

export const ButtonColumn = ({ containerRef, scrollElementRef }: IProps) => {
	const isMobile = false
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

	const heroContent = HeroConstants[index]
	const type = heroContent.type

	const scrollToSection = (percentageValue: number) => {
		if (!scrollElementRef.current) return
		const scrollAmount =
			percentageValue * (scrollElementRef.current?.scrollHeight || 0) - percentageValue * window.innerHeight

		if (!containerRef.current) return
		containerRef.current.scrollTo({
			top: scrollAmount,
			behavior: 'smooth',
		})
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		// const isArrowKey = ['ArrowDown', 'ArrowUp'].includes(e.key)
		const isArrowKey = true
		const scrollContainer = document.querySelector('main')

		const shouldAllowUp = index === 3 && e.key === 'ArrowUp' && (scrollContainer?.scrollTop || 0) < 2500

		const nextIndex = index + (e.key === 'ArrowDown' ? 1 : -1)

		const shouldAllowUpdate = nextIndex >= 0 && nextIndex <= 3 && (isArrowKey || shouldAllowUp)

		if (!shouldAllowUpdate) return
		e.preventDefault()
		switch (nextIndex) {
			case 0:
				scrollToSection(0)
				break
			case 1:
				scrollToSection(0.17)
				break
			case 2:
				scrollToSection(0.47)
				break
			case 3:
				scrollToSection(0.88)
				break
			default:
				break
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [index])

	return (
		<Box className='button-wrapper'>
			<Button
				className={type === 'meshes' ? 'app-button-active-geometry' : 'app-button'}
				onClick={() => {
					scrollToSection(0.17)
				}}
				sx={{
					':hover': { background: isMobile ? 'rgba(110, 104, 123, 0.267);' : ' rgba(110, 104, 123, 0.9);' },
					opacity: type === 'default' || type === 'meshes' ? 1 : 0.5,
				}}
			>
				{/* <GeometryIcon /> */}
				Generate 3D meshes
			</Button>
			<Button
				className={type === 'materials' ? 'app-button-active-texture' : 'app-button'}
				onClick={() => {
					scrollToSection(0.47)
				}}
				sx={{
					':hover': { background: isMobile ? 'rgba(110, 104, 123, 0.267);' : ' rgba(92, 24, 114, 0.7)' },
					opacity: type === 'default' || type === 'materials' ? 1 : 0.5,
				}}
			>
				{/* <TextureIcon /> */}
				Create PBR Materials
			</Button>
			<Button
				className={type === 'motions' ? 'app-button-active-animation' : 'app-button'}
				onClick={() => {
					scrollToSection(0.88)
				}}
				sx={{
					':hover': { background: isMobile ? 'rgba(110, 104, 123, 0.267);' : ' rgba(161, 39, 94, 0.8)' },
					opacity: type === 'default' || type === 'motions' ? 1 : 0.5,
				}}
			>
				{/* <AnimationIcon /> */}
				Animate 3D characters
			</Button>
		</Box>
	)
}
