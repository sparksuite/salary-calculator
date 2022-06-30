// Imports
import React from 'react';
import styled, { css } from 'styled-components/macro';

// Styled elements
const Container = styled.figure`
	margin: 0;
	padding: 0 0.5em;
	text-align: center;
	position: relative;
`;

const UpTo = styled.div`
	margin-bottom: 0.2rem;
	line-height: 1;
	font-size: 1.4em;
	color: #000;
`;

const Amount = styled.div<{ color?: Props['color'] }>`
	line-height: 1;
	font-size: 4em;
	font-weight: 600;
	letter-spacing: -0.05em;

	${(props) =>
		props.color === 'green'
			? css`
					background: linear-gradient(90deg, #acc734 0%, #6eb32e 100%);
			  `
			: css`
					background: linear-gradient(90deg, #38b1c9 0%, #3171b0 100%);
			  `}

	-webkit-background-clip: text; // LATER: Remove when we upgrade to styled-components v6
	-webkit-text-fill-color: transparent; // LATER: Remove when we upgrade to styled-components v6
	background-clip: text;
	text-fill-color: transparent;
`;

const Subtitle = styled.figcaption`
	margin-top: 0.5rem;
	line-height: 1;
	font-size: 1.2rem;
	color: #000;

	svg {
		margin-left: 0.3rem;
		color: #bdbdbd;
	}
`;

// Define the component props
type Props = {
	amount: number | string;
	subtitle: string;
	color: 'green' | 'blue';
	smaller?: boolean;
	showUpTo?: boolean;
	infoURL?: string;
};

// Functional component
const Figure: React.FC<Props> = ({
	amount,
	subtitle,
	color,
	smaller,
	showUpTo,
	infoURL,
}) => {
	return (
		<Container style={{ fontSize: smaller ? '0.8rem' : '1rem' }}>
			{showUpTo && <UpTo>UP TO</UpTo>}
			{typeof amount === 'number' ? (
				<Amount color={color}>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 0,
					}).format(amount)}
				</Amount>
			) : (
				<Amount color={color}>{amount}</Amount>
			)}
			<Subtitle>
				{subtitle}
				{infoURL && (
					<a
						href={infoURL}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Learn more'
					>
						<i className='far fa-info-circle' />
					</a>
				)}
			</Subtitle>
		</Container>
	);
};

export default Figure;
