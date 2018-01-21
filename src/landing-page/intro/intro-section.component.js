import React from 'react';
import IntroCard from './intro-card.component';
import styles from '../landing-page.styles';

const IntroSection = (props) => {
  return (
    <div className="intro-section">
      <h2 style={styles.header}> Welcome to Guest Book! </h2>
        <p style={styles.paragraph}> Streamline how you create events and manage the guest list </p>
        <h3 style={styles.header}> - WHAT - </h3>
          <p style={styles.paragraph}> Manage your guests in one place </p>
          <p style={styles.paragraph}>Track RSVP status and attendence </p>

        <h3 style={styles.header}> - HOW - </h3>
          <ol style={styles.list}>
            <li > Create the Event </li>
            <li> Create the Guest List </li>
            <li> Check in guests on the day of the Event </li>
          </ol>
    </div>  
  );
}

export default IntroSection; 