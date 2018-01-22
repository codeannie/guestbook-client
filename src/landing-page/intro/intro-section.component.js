import React from 'react';
import IntroCard from './intro-card.component';
import styles from '../landing-page.styles';

const IntroSection = (props) => {
  return (
    <section>
      <h1 style={styles.header1}> Welcome to Guest Book! </h1>
        <p style={styles.paragraph}> Streamline how you create events and manage the guest list </p>
        <h2 style={styles.header2}> - WHAT - </h2>
          <p style={styles.paragraph}> Manage your guests in one place </p>
          <p style={styles.paragraph}>Track RSVP status and attendence </p>

        <h2 style={styles.header2}> - HOW - </h2>
          <p style={styles.paragraph}> Create the Event </p>
          <p style={styles.paragraph}> Create the Guest List </p>
          <p style={styles.paragraph}> Check-in Guests on Day of Event </p>
    </section>  
  );
}

export default IntroSection; 