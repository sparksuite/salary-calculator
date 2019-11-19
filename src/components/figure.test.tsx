// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Figure from './figure';

// Tests
it('renders shallowly (basic)', () => {
	shallow(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' />);
});

it('renders shallowly (custom color)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color={'#f00'} />
	);
});

it('renders shallowly (smaller)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' smaller={true} />
	);
});

it('renders shallowly (with up to)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' showUpTo={true} />
	);
});

it('renders shallowly (with info icon)', () => {
	shallow(
		<Figure
			amount={123456}
			subtitle='EXAMPLE SUBTITLE'
			infoURL='https://www.sparksuite.com/'
		/>
	);
});
