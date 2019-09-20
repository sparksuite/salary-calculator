// Imports
import styled from 'styled-components';

// Styled gradient in the background
const Gradient = styled.div`
	width: 100vw;
	height: 30rem;
	transform: rotate(-5deg) scale(1.5) translateY(-9rem);
	background: #67b1d6;
	background: linear-gradient(
		90deg,
		rgba(103, 196, 214, 1) 0%,
		rgba(103, 159, 214, 1) 100%
	);
`;

export default Gradient;
