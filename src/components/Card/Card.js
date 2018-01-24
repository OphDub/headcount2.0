import React from 'react';
import './Card.css';

const Card = ({ location, data }) => {
  // <article onClick={() => selectCard(location)}> ?
  const eachCard = Object.keys(data).map( dataPoint => {
                                            const highOrLow = data[ dataPoint ] >= 0.5 ? "highFive" : "lowFive";
                                            
                                            return <li className={ highOrLow } >{ dataPoint + ': ' + data[ dataPoint ] }</li>
                                        } )
  return (
    <article>
      <h4>{ location }</h4>
      <ul>{ eachCard }</ul>
    </article>
  )
}

export default Card;
