import React from 'react';
import './Card.css';

const Card = ({ location, data }) => {
  // <article onClick={() => selectCard(location)}> ?
  console.log(data)
  return (
    <article>
      <h3>{ location }</h3>
      <ul>{ Object.keys(data).map( dataPoint => <li>{ dataPoint + ': ' + data[ dataPoint ] }</li> ) }</ul>
    </article>
  )
}

export default Card;
