// Imports
import React from 'react';
import Figure from './figure';

// Stories
export default {
	component: Figure,
	title: 'Figure',
};

export const basic = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' />
);

export const customColor = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color={'#f00'} />
);

export const smaller = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' smaller={true} />
);

export const upTo = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' showUpTo={true} />
);

export const infoIcon = () => (
	<Figure
		amount={123456}
		subtitle='EXAMPLE SUBTITLE'
		infoURL='https://www.sparksuite.com/'
	/>
);
