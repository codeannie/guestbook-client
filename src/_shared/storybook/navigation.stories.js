import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AppNav from '../navigation/app-nav.component';
import SideBar from '../navigation/sidebar.component';
import BarAndDrawer from '../navigation/nav-bar-drawer.component';

storiesOf("navigation", module)
  .add("app-nav", () => {
    return <AppNav 
      onLeftIconButtonClick={action('clicked')}/>;
    })
  .add("sidebar", () => {
    return <SideBar />;
  })
  .add("app bar and drawer", () => {
    return <BarAndDrawer />;
  })


// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);