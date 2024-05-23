import { HeroSection } from './HeroSection/HeroSection'
import { useEffect, useRef, useState } from 'react'
import { StyledHeroPage } from './StyledHeroPage'
import React from 'react';
import { TopBar } from './HeroSection/components/TopBar/TopBar';

export const HeroPage = () => {
	const [targetRefToUse, setTargetRefToUse] = useState<any>(null)
	const [refToUse, setRefToUse] = useState<React.RefObject<any> | null>(null)

	const containerRef = useRef<HTMLDivElement | null>(null)
	const targetRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (targetRef.current) {
			setTargetRefToUse(targetRef)
		}
	}, [targetRef])

	useEffect(() => {
		const main = document.getElementById('parent')
		if (main) {
			containerRef.current = main as any
			setRefToUse(containerRef)
		}
	}, [])

	return (
		<section ref={targetRef} className='section-wrapper'>
			<StyledHeroPage>
				<div className='background'></div>
				<div className='hero-wrapping-container'>
					<div className='topbar-wrapper'>
						<TopBar />
					</div>
					<div className='absolute-hero'>
						{targetRefToUse && refToUse && <HeroSection containerRef={refToUse} scrollElementRef={targetRef} />}
					</div>
				</div>
				<div className='gradient'></div>
			</StyledHeroPage>
		</section>
	)
}
