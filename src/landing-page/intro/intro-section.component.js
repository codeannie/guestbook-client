import React from 'react';
import { css } from 'aphrodite';
import IntroCard from './intro-card.component';
import styles from '../landing-page.styles';
import sharedStyles from '../../_shared/styles/shared.styles';

const IntroSection = (props) => {
  return (
    <section>
      <h1 className={css(sharedStyles.headerFont, styles.header1)}> Welcome to Guest Book! </h1>
        <p className={css(sharedStyles.bodyFont, styles.centerText)}> Streamline how you create events and manage the guest list </p>
        <h2 className={css(sharedStyles.headerFont, styles.centerText)}> - WHAT - </h2>
          <p className={css(sharedStyles.bodyFont, styles.centerText)}> Manage your guests in one place </p>
          <p className={css(sharedStyles.bodyFont, styles.centerText)}>Track RSVP status and attendence </p>

        <h2 className={css(sharedStyles.headerFont, styles.centerText)}> - HOW - </h2>
          <p className={css(sharedStyles.bodyFont, styles.centerText)}> Create the Event </p>
          <p className={css(sharedStyles.bodyFont, styles.centerText)}> Create the Guest List </p>
          {/* <p className={css(sharedStyles.bodyFont, styles.centerText)}> Check-in Guests on Day of Event </p> */}
        
        <h2 className={css(sharedStyles.headerFont, styles.centerText)}> Sign Up Today & Start Managing your Event! </h2>
    </section>  
  );
}

export default IntroSection; 