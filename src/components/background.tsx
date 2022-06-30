// Imports
import styled from 'styled-components/macro';

// Styled colors in the background
const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.33;
	z-index: -1;
	background-image: url('../images/colors.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export default Background;
