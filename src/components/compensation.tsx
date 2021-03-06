// Imports
import React from 'react';
import styled from 'styled-components/macro';
import data from '../data.json';
import { AppState } from '../redux/types';
import { useSelector } from 'react-redux';
import Container from './container';
import Figure from './figure';
import Divider from './divider';
import { calculateSalary } from '../utils/salary';

// Styled elements
const FlexDiv = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-wrap: wrap;

	> div {
		width: 48%;
		text-align: center;

		p {
			margin: 0;
			padding: 0;
			margin-top: 1rem;
			font-size: 0.9rem;
			line-height: 1.15rem;
			color: #757575;
		}

		@media (max-width: 768px) {
			width: 100%;

			&:first-child {
				margin: 1rem 0 2rem;
			}
		}
	}
`;

const Perks = styled.div`
	max-width: 450px;
	margin: 2rem auto 0;
	text-align: center;

	a {
		color: #67b1d6;

		&:hover {
			text-decoration: none;
		}
	}
`;

// Functional component
const Compensation: React.FC = () => {
	// Get the currently-selected position's full level details
	const selectedPosition = useSelector((state: AppState) => state.position);
	let levelDetails = {
		title: '',
		description: '',
		startingSalary: 0,
		annualRaises: [0],
	};

	for (const field of data.fields) {
		for (const role of field.roles) {
			for (const level of role.levels) {
				if (level.title === selectedPosition) {
					levelDetails = level;
				}
			}
		}
	}

	// Determine base salary
	const selectedTenure = useSelector((state: AppState) => state.tenure);
	const baseSalary = calculateSalary(
		levelDetails.startingSalary,
		levelDetails.annualRaises,
		selectedTenure
	);

	// Determine HRA funding amount
	const hasDependents = useSelector((state: AppState) => state.dependents);
	let hraFunding = 4800;

	if (hasDependents) {
		hraFunding = 9600;
	}

	// Return JSX
	return (
		<Container>
			<Figure amount={baseSalary} subtitle='BASE SALARY' />

			<Divider text='plus' />

			<FlexDiv>
				<div>
					<Figure
						amount={hraFunding}
						subtitle='TAX-FREE HRA FUNDS'
						color='#67b1d6'
						smaller={true}
						infoURL='https://handbook.sparksuite.com/benefits/health.html'
					/>

					<p>
						Flexible funds that reimburse you for nearly any health-related
						expense, including insurance premiums, deductibles, copayments,
						coinsurance, eyeglasses, sunscreen, and so much more.
					</p>
				</div>

				<div>
					<Figure
						amount={baseSalary * 0.04}
						subtitle='MATCHING 401(k) CONTRIBUTIONS'
						color='#67b1d6'
						smaller={true}
						infoURL='https://handbook.sparksuite.com/benefits/401(k).html'
						showUpTo={true}
					/>

					<p>
						Company matching up to 4%, beginning with your first paycheck. Plus,
						your savings are invested through an ultra low-fee provider, which
						could net you hundreds of thousands of dollars more than typical
						401(k) plans.
					</p>
				</div>
			</FlexDiv>

			<Divider text='along with' />

			<Perks>
				Flexible working hours, free-lunch Fridays, generous paid time off,
				healthy work-life balance, great snacks, and all these other{' '}
				<a
					href='https://handbook.sparksuite.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					awesome benefits & perks
				</a>
			</Perks>
		</Container>
	);
};

export default Compensation;
