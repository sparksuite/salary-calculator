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
		filter: grayscale(100%);
		opacity: 0.25;
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
			</div>

			<img src='/logo.png' alt='Sparksuite logo' />
		</Container>
	);
};

export default Footer;