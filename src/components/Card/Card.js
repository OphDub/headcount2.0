import React from 'react';
import './Card.css';

const Card = ({ location, data }) => {
  // <article onClick={() => selectCard(location)}> ?
  console.log(data)
  return (
    <article>
      <h3>{ location }</h3>
      <ul>{ Object.keys(data).map( dataPoint => dataPoint ) }</ul>
    </article>
  )
}

export default Card;
