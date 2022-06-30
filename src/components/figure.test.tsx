// Imports
import React from 'react';
import { render } from '@testing-library/react';
import Figure from './figure';

// Tests
it('Renders (basic)', () => {
	render(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='green' />);
});

it('Renders (blue)', () => {
	render(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='blue' />);
});

it('Renders (smaller)', () => {
	render(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='green' smaller />
	);
});

it('Renders (with up to)', () => {
	render(
		<Figure
			amount={123456}
			subtitle='EXAMPLE SUBTITLE'
			color='green'
			showUpTo
		/>
	);
});

it('Renders (with info icon)', () => {
	render(
		<Figure
			amount={123456}
			subtitle='EXAMPLE SUBTITLE'
			color='green'
			infoURL='https://www.sparksuite.com/'
		/>
	);
});
