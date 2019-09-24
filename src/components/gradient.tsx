// Imports
import styled from 'styled-components/macro';

// Styled gradient in the background
const Gradient = styled.div`
	width: 100vw;
	height: 55rem;
	transform: skewY(-5deg);
	transform-origin: -100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background: #67b1d6;
	background: linear-gradient(
		90deg,
		rgba(103, 196, 214, 1) 0%,
		rgba(103, 159, 214, 1) 100%
	);
`;

export default Gradient;
