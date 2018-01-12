import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import EventOverview from '../../events/event-overview.component';
import EventForm from '../../events/event-form.component';

import GuestList from '../../guests/guestlist-view.component';
import GuestForm from '../../guests/guestList-form.component';

storiesOf("events", module)
  .add("event overview", () => {
    return <EventOverview />;
    })
  .add("guest list view", () => {
    return <GuestList />;
  })
  .add("event form", () => {
    return <EventForm />;
  })
  .add("guestlist form", () => {
    return <GuestForm />;
  })
