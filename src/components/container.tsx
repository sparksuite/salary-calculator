// Imports
import styled from 'styled-components/macro';

// Styled white container with drop shadow
const Container = styled.div`
	margin-top: 2rem;
	padding: 2rem;
	background: #fff;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: #000;

	&:nth-child(3n + 1) {
		filter: drop-shadow(5px 5px 0px #acd561);
	}

	&:nth-child(3n + 2) {
		filter: drop-shadow(5px 5px 0px #67b1d6);
	}

	&:nth-child(3n) {
		filter: drop-shadow(5px 5px 0px #e46b65);
	}
`;

export default Container;
