import React from 'react';
import './Card.css';

const Card = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
