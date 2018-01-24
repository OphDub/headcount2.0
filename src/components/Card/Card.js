import React from 'react';
import './Card.css';

const Card = ({ location, data }) => {
  // <article onClick={() => selectCard(location)}> ?
  return (
    <article>
      <h3>{ location }</h3>
      <ul>{ data }</ul>
    </article>
  )
}

export default Card;
