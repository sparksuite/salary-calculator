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

		&:only-child {
			margin: 0 auto;
		}

		p {
			margin: 0;
			padding: 0;
			margin-top: 1rem;
			font-size: 1.1rem;
			line-height: 1.2;
			font-weight: 300;
			color: #000;
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
	margin-top: 2rem;
	display: grid;
	grid-template-columns: auto auto;
	grid-column-gap: 4em;
	grid-row-gap: 0.3em;
	justify-content: center;

	> div {
		color: #000;

		svg {
			opacity: 0.5;
			margin-right: 0.2em;
		}
	}

	> span {
		margin-top: 0.25em;
		grid-column-start: span 2;
		justify-self: center;
		text-align: center;

		a {
			color: #67b1d6;

			&:hover {
				text-decoration: none;
			}
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: auto;

		> span {
			grid-column-start: span 1;
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

	// Determine annual salary
	const selectedTenure = useSelector((state: AppState) => state.tenure);
	const annualSalary = calculateSalary(
		levelDetails.startingSalary,
		levelDetails.annualRaises,
		selectedTenure
	);

	// Return JSX
	return (
		<Container>
			<Figure
				amount={selectedPosition ? annualSalary : '$--,---'}
				subtitle='ANNUAL SALARY'
				color='green'
			/>

			<Divider text='plus' />

			<FlexDiv>
				{selectedPosition !== 'Office Assistant' && (
					<div>
						<Figure
							amount='50%'
							subtitle='OF BASE HEALTH PLAN PREMIUM'
							color='blue'
							smaller
							infoURL='https://handbook.sparksuite.com/benefits/health.html'
						/>

						<p>
							Company contribution of 50% of the cost of your base health plan’s
							premium toward any of the health plans offered. We also offer
							vision and dental plans, plus HSAs to help reduce your taxes.
						</p>
					</div>
				)}

				<div>
					<Figure
						amount={selectedPosition ? annualSalary * 0.04 : '$-,---'}
						subtitle='MATCHING 401(k) CONTRIBUTIONS'
						color='blue'
						smaller
						infoURL='https://handbook.sparksuite.com/benefits/401(k).html'
						showUpTo
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
				<div>
					<i className='far fa-sliders-up' /> Flexible working hours
				</div>

				<div
					style={{
						display: selectedPosition !== 'Office Assistant' ? 'block' : 'none',
					}}
				>
					<i className='far fa-house-building' /> Flexible remote work
				</div>

				<div
					style={{
						display: selectedPosition === 'Office Assistant' ? 'block' : 'none',
					}}
				>
					<i className='far fa-gift' /> Work anniversary swag
				</div>

				<div>
					<i className='far fa-pot-food' /> Free-lunch Fridays
				</div>

				<div>
					<i className='far fa-taco' /> Taco Tuesdays
				</div>

				<div>
					<i className='far fa-calendar-day' /> Generous paid time off
				</div>

				<div>
					<i className='far fa-house-person-return' /> Healthy work-life balance
				</div>

				<div>
					<i className='far fa-chair-office' /> Incredible office
				</div>

				<div>
					<i className='far fa-golf-flag-hole' /> Company outings
				</div>

				<div>
					<i className='far fa-coffee-bean' /> Craft coffee
				</div>

				<div>
					<i className='far fa-avocado' /> Delicious snacks
				</div>

				<span>
					…and all these other{' '}
					<a
						href='https://handbook.sparksuite.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						awesome benefits &amp; perks
					</a>
					.
				</span>
			</Perks>
		</Container>
	);
};

export default Compensation;
