import React from 'react';
import { string, object } from 'prop-types';
import './Card.css';

const Card = ({ id, location, data, selectCard }) => {
  const eachCard = Object.keys(data).map( dataPoint => {
                                            const highOrLow = data[ dataPoint ] >= 0.5 ? "highFive" : "lowFive";

                                            return <li className={ highOrLow } >{ dataPoint + ': ' + data[ dataPoint ] }</li>
                                        } )
  return (
    <article onClick={ ()=> {
      console.log(id)
      selectCard(id)
    }}>
      <h4>{ location }</h4>
      <ul>{ eachCard }</ul>
    </article>
  )
}

Card.propTypes = {
  location: string.isRequired,
  data: object.isRequired,
}

export default Card;
