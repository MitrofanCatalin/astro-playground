import styled from '@emotion/styled'
import background from '../../assets/png/BG.webp'

export const StyledHeroPage = styled.div`
	position: sticky;
	top: 0;
	height: 100vh;
	display: flex;
	/* align-items: center; */
	justify-content: flex-start;
	overflow: hidden;

	.background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(to top, #05050599, rgba(5, 5, 5, 1)), url('${background.src}');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		background-blend-mode: luminosity;
	}
	.hero-wrapping-container {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		width: 100%;
		@media (max-width: 768px) {
			height: 80vh;
		}
	}
	.absolute-hero {
		position: absolute;
		height: calc(100vh - 120px);
		margin-top: 120px;
		display: flex;
		align-items: center;
		width: 100%;

		@media (max-width: 768px) {
			height: calc(100svh - 90px);
			margin-top: 70px;
		}
	}
	.section-wrapper {
		position: relative;
		height: 650vh;
	}
	.wrapper-class {
		display: flex;
		margin-left: 20%;
		gap: 150px;
	}
	.gradient {
		background: linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, #15101d 100%);
		height: 200px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
`
