import styled from '@emotion/styled'

export const StyledTopBar = styled.div`
	width: min(1200px, 90vw);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 16px 24px;
	border-radius: 16px;

	@media (max-width: 920px) {
		background: none;
		width: 100%;
	}
	@media (max-width: 768px) {
		padding: 16px 0;
	}

	.links {
		display: flex;
		gap: 16px;
		align-items: center;
		@media (max-width: 1050px) {
			display: none;
		}
	}

	.nav-button {
		color: rgba(209, 205, 218, 1);
		z-index: 0;
	}
`
