// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Figure from './figure';

// Tests
it('renders shallowly without crashing (basic)', () => {
	shallow(<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' />);
});

it('renders shallowly without crashing (custom color)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color={'#f00'} />
	);
});

it('renders shallowly without crashing (smaller)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' smaller={true} />
	);
});

it('renders shallowly without crashing (with up to)', () => {
	shallow(
		<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' showUpTo={true} />
	);
});

it('renders shallowly without crashing (with info icon)', () => {
	shallow(
		<Figure
			amount={123456}
			subtitle='EXAMPLE SUBTITLE'
			infoURL='https://www.sparksuite.com/'
		/>
	);
});
