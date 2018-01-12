import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Dashboard from '../../dashboard/dashboard.component';
import EventSection from '../../dashboard/events-section.component';
import EventCard from '../../dashboard/event-card.component';
import EventForm from '../../events/event-form.component';

storiesOf("dashboard", module)
  .add("dashboard page", () => {
    return <Dashboard/>;
    })
  .add("event section", () => {
    return <EventSection />;
  })
  .add("event card", () => {
    return <EventCard />;
  })

