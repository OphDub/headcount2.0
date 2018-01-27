import React, { Component } from 'react';
import { string, object } from 'prop-types';
import './Card.css';

const Card = ({ id, location, data, selectCard, addCss }) => {
  const eachCard = Object.keys(data).map( dataPoint => {
                                            const highOrLow = data[ dataPoint ] >= 0.5 ? "highFive" : "lowFive";

                                            return <li className={ highOrLow } >{ dataPoint + ': ' + data[ dataPoint ] }</li>
                                        } )
  return (
    <div className="unselected" id={ location } onClick={ () => addCss(id) }>
      <article id={ location } onClick={ ()=> selectCard(id)}>
      <h4>{ location }</h4>
      <ul>{ eachCard }</ul>
    </article>
    </div>
    
  )
}

Card.propTypes = {
  location: string.isRequired,
  data: object.isRequired,
}

export default Card;
