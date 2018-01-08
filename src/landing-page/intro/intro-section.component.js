import React from 'react';
import IntroCard from './intro-card.component';

export default class introSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      introCards : [{
        title: '- WHAT -',
        body: 'Manage your guestlist in one place. Know who RSVP and attended'
      }, {
        title: '- HOW -',
        body: 'Send emails to guests to RSVP. Check guests in on day of event'
      }]
    }
  }

  render() {
    const introCards = this.state.introCards.map((introCard, index) =>
      <li key={index}>
        <IntroCard {...introCard} />
      </li> 
    );

    return (
      <div className="intro-section">
        <ul className="intro-cards">
          {introCards}
        </ul>
      </div>  
    );
  }
}