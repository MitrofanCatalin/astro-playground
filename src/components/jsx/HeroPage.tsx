import { HeroSection } from './HeroSection/HeroSection'
import { useEffect, useRef, useState } from 'react'
import { StyledHeroPage } from './StyledHeroPage'
// import TopBar from '../TopBar.astro';
import React from 'react';

// interface IProps {
// 	containerRef: React.RefObject<HTMLDivElement> | null
// }

export const HeroPage = () => {
	const [targetRefToUse, setTargetRefToUse] = useState<any>(null)
	const targetRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (targetRef.current) {
			setTargetRefToUse(targetRef)
		}
	}, [targetRef])

	const [refToUse, setRefToUse] = useState<React.RefObject<HTMLDivElement> | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const main = document.querySelector('main')
		if (main) {
			containerRef.current = main as HTMLDivElement
			setRefToUse(containerRef)
		}
	}, [])

	return (
		<section ref={targetRef} className='section-wrapper'>
			<StyledHeroPage>
				<div className='background'></div>
				<div className='hero-wrapping-container'>

					<div className='absolute-hero'>
						{targetRefToUse && refToUse && <HeroSection containerRef={refToUse} scrollElementRef={targetRef} />}
					</div>
				</div>
				<div className='gradient'></div>
			</StyledHeroPage>
		</section>
	)
}
