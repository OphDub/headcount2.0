import React from 'react';
import { string, object, func } from 'prop-types';
import './Card.css';
import FadeIn from 'react-fade-in';

const Card = ({ id, location, data, selectCard, addCss }) => {
  const eachCard = Object.keys(data).map( (dataPoint, index) => {
    const roundedAverage = Math.round(data[dataPoint] * 10 );
    const converter = require('number-to-words');
    const numToWords = converter.toWords(roundedAverage);
    const highOrLow = data[dataPoint] ? numToWords : "zero";

    return  <li className={ highOrLow } key={index}>
      { dataPoint + ': ' + data[dataPoint] }
    </li>;
  } );
  return (
    <FadeIn>
      <article  className={addCss}
        id={ location }
        onClick={ ()=> selectCard(id)} >
        <h4>{ location }</h4>
        <ul>{ eachCard }</ul>
      </article>
    </FadeIn>
  );
};

Card.propTypes = {
  id: string.isRequired,
  location: string.isRequired,
  data: object.isRequired,
  addCss: string,
  selectCard: func.isRequired
};

export default Card;
