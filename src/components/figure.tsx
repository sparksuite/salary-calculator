// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled elements
const Container = styled.figure`
	margin: 0;
	padding: 0;
	text-align: center;
	position: relative;
`;

const UpTo = styled.div`
	margin-bottom: 0.2rem;
	line-height: 1;
	font-size: 1.09375em;
	color: #777676;
`;

const Amount = styled.div`
	line-height: 1;
	font-size: 3.125em;
	font-weight: 500;
	color: #8ccc5e;
`;

const Subtitle = styled.figcaption`
	margin-top: 0.5rem;
	line-height: 1;
	font-size: 1.25em;
	color: #717171;

	i {
		margin-left: 0.3rem;
		color: #bdbdbd;
	}
`;

// Definition
type FigureProps = {
	amount: number;
	subtitle: string;
	color?: string;
	smaller?: boolean;
	showUpTo?: boolean;
	infoURL?: string;
};

// Functional component
const Figure: React.FC<FigureProps> = ({
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
			<Amount style={{ color: color }}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					minimumFractionDigits: 0,
				}).format(amount)}
			</Amount>
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
