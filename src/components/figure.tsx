// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled elements
const UpTo = styled.div`
	margin-bottom: 0.2rem;
	line-height: 1;
	font-size: 1.09375em;
	color: #828282;
`;

const Amount = styled.div`
	line-height: 1;
	font-size: 3.125em;
	font-weight: 500;
	color: #8ccc5e;
`;

const Subtitle = styled.div`
	margin-top: 0.5rem;
	line-height: 1;
	font-size: 1.25em;
	color: #828282;

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
		<div
			style={{
				textAlign: 'center',
				position: 'relative',
				fontSize: smaller ? '0.8rem' : '1rem',
			}}
		>
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
					<a href={infoURL} target='_blank' rel='noopener noreferrer'>
						<i className='far fa-info-circle' />
					</a>
				)}
			</Subtitle>
		</div>
	);
};

export default Figure;
