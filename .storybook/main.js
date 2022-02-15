module.exports = {
	stories: ['../src/components/**/*.stories.tsx'],
	addons: [
		'@storybook/preset-create-react-app',
		{
			name: '@storybook/addon-essentials',
		},
	],
	core: {
		builder: 'webpack5',
	},
};
