import { configure } from '@storybook/react';

function loadStories() {
  // looks in stories folder
  require('../src/stories');
  // looks in shared story
  // require('../src/_shared/storybook');
  // looks for any file that has stories.js suffix in filename
  const req = require.context('../src', true, /stories\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);