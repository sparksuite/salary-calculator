// Imports
import React from 'react';
import { render } from '@testing-library/react';
import Figure from './figure';

// Tests
it('Renders (basic)', () => {
	render(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' />);
});

it('Renders (custom color)', () => {
	render(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color={'#f00'} />);
});

it('Renders (smaller)', () => {
	render(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' smaller={true} />);
});

it('Renders (with up to)', () => {
	render(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' showUpTo={true} />
	);
});

it('Renders (with info icon)', () => {
	render(
		<Figure
			amount={123456}
			subtitle='EXAMPLE SUBTITLE'
			infoURL='https://www.sparksuite.com/'
		/>
	);
});
