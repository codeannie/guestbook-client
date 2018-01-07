import React from 'react';

const introCard = (props) => {
  return (
    <div className="introCard">
      <h3> {props.title} </h3>
      <p> {props.body} </p>
    </div>
  );
};

export default introCard; 

introCard.defaultProps = {
  title: '',
  body: '',
};