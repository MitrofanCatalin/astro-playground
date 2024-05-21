import styled from '@emotion/styled'

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
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		background-blend-mode: luminosity;
	}
`
