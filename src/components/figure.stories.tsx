// Imports
import React from 'react';
import Figure from './figure';

// Stories
export default {
	component: Figure,
	title: 'Figure',
};

export const basic = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='green' />
);

export const blue = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='blue' />
);

export const smaller = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='green' smaller />
);

export const upTo = () => (
	<Figure amount={123456} subtitle='EXAMPLE SUBTITLE' color='green' showUpTo />
);

export const infoIcon = () => (
	<Figure
		amount={123456}
		subtitle='EXAMPLE SUBTITLE'
		color='green'
		infoURL='https://www.sparksuite.com/'
	/>
);
