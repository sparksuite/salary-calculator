// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled elements
const Container = styled.footer`
	margin-top: 3rem;
	text-align: center;

	img {
		height: 1.5rem;
		margin-top: 1.25rem;
		opacity: 0.15;
	}

	a {
		color: #999;
		font-size: 0.9rem;
		margin-right: 2rem;
		text-decoration: none;
		line-height: 1;

		&:hover {
			text-decoration: underline;
		}

		&:last-child {
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		a {
			display: none;
		}
	}
`;

// Functional component
const Footer: React.FC = () => {
	return (
		<Container>
			<div>
				<a
					href='https://www.sparksuite.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Company website
				</a>
				<a
					href='https://blog.sparksuite.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Blog
				</a>
				<a
					href='https://sparksuite.careers/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Careers
				</a>
				<a
					href='https://handbook.sparksuite.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Employee handbook
				</a>
				<a
					href='https://github.com/sparksuite/salary-calculator'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub repo
				</a>
			</div>

			<img src='/logo.svg' alt='Sparksuite logo' />
		</Container>
	);
};

export default Footer;
