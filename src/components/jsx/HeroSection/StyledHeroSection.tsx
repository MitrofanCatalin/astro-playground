import styled from '@emotion/styled'
export const StyledHeroSection = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	justify-content: center;
	gap: 40px;
	padding: 0 16px;
	box-sizing: border-box;

	@media (max-width: 1400px) {
		gap: 16px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		height: 80svh;
		justify-content: space-between;
	}

	.container-box {
		width: 675px;
		height: 550px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		@media (min-width: 1100px) and (max-width: 1400px) {
			width: 550px;
		}

		@media (max-width: 768px) {
			width: auto;
			height: auto;
		}
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 16px;

		@media (max-width: 768px) {
			flex-direction: row;
			margin-bottom: 24px;
		}
	}

	.description-button {
		background: linear-gradient(95.93deg, #9b551c 0%, #fb923c 33.33%, #fb923c 100%);
		border: 1px solid #fdb87f;
		box-shadow:
			0px 0px 24px 0px rgba(251, 146, 61, 0.32),
			0px 6px 72px 0px rgba(251, 146, 61, 0.24);
	}

	.app-button {
		width: 127px;
		height: 127px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
		background: linear-gradient(167.9deg, rgba(255, 255, 255, 0.04) -0.07%, rgba(255, 255, 255, 0.02) 91.17%);
		border-radius: 8px;
		color: rgba(255, 255, 255, 0.9);
		z-index: 2;
		border: double 1px transparent;
		border-radius: 8px;
		background-color: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(16px);

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 8px;
			border: 1px solid transparent;
			background: linear-gradient(
					149.46deg,
					rgba(255, 255, 255, 0.32) 0.01%,
					rgba(255, 255, 255, 0.06) 50%,
					rgba(255, 255, 255, 0.24) 100%
				)
				border-box;
			-webkit-mask:
				linear-gradient(#fff 0 0) padding-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) padding-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: destination-out;
			mask-composite: exclude;
		}

		@media (max-width: 420px) {
			width: 100px;
			height: 100px;
		}
	}

	.app-button-active-texture,
	.app-button-active-geometry,
	.app-button-active-animation {
		width: 127px;
		height: 127px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
		border-radius: 8px;
		color: rgba(255, 255, 255, 0.9);
		@media (max-width: 420px) {
			width: 100px;
			height: 100px;
		}
		@media (max-width: 768px) {
			z-index: 10;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 8px;
			border: 1px solid transparent;
			background: linear-gradient(
					149.46deg,
					rgba(255, 255, 255, 0.32) 0%,
					rgba(255, 255, 255, 0.4) 0.01%,
					rgba(255, 255, 255, 0.06) 50%,
					rgba(255, 255, 255, 0.4) 100%
				)
				border-box;
			-webkit-mask:
				linear-gradient(#fff 0 0) padding-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) padding-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: destination-out;
			mask-composite: exclude;
		}
	}

	.app-button-active-texture {
		/* background: rgba(92, 24, 114, 0.5) !important; */
		background: linear-gradient(
			137.18deg,
			rgba(97, 26, 121, 0.32) 1.51%,
			rgba(214, 88, 255, 0.32) 48.04%,
			rgba(97, 26, 121, 0.32) 94.56%
		) !important;
	}
	.app-button-active-geometry {
		background: linear-gradient(
			137.77deg,
			rgba(126, 126, 126, 0.32) 5%,
			rgba(255, 255, 255, 0.32) 49.79%,
			rgba(125, 125, 125, 0.32) 94.58%
		) !important;
	}
	.app-button-active-animation {
		/* background: rgba(161, 39, 94, 0.7) !important; */
		background: linear-gradient(
			137.18deg,
			rgba(172, 42, 100, 0.32) 1.52%,
			rgba(255, 120, 180, 0.32) 48.04%,
			rgba(172, 42, 100, 0.32) 94.56%
		) !important;
	}
`
