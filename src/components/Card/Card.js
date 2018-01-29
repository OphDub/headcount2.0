import React, { Component } from 'react';
import { string, object } from 'prop-types';
import './Card.css';
import FadeIn from 'react-fade-in';

const Card = ({ id, location, data, selectCard, addCss }) => {
  const eachCard = Object.keys(data).map( dataPoint => {
                                            const highOrLow = data[ dataPoint ] >= 0.5 ? "highFive" : "lowFive";

                                            return <li className={ highOrLow } >{ dataPoint + ': ' + data[ dataPoint ] }</li>
                                        } )
  return (
    <FadeIn>
      <article className={addCss} id={ location } onClick={ ()=> selectCard(id)} >
        <h4>{ location }</h4>
        <ul>{ eachCard }</ul>
      </article>
    </FadeIn>
  )
}

Card.propTypes = {
  location: string.isRequired,
  data: object.isRequired,
}

export default Card;
