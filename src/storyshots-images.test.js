import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
	suite: 'Image StoryShots',
	test: imageSnapshot({
        storybookUrl: 'http://localhost:9009'
    }),
});
