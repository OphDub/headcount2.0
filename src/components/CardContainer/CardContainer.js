import React from 'react';
import { arrayOf, shape, string, object } from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({districts}) => {
  const renderedCards = districts.map((district, index) => 
        <Card {...district}
               key={district.location}/>)

  return (
    <section>
      {renderedCards}
    </section>
  )
}

CardContainer.propTypes = {
  districts: arrayOf(shape({
    location: string.isRequired,
    data: object.isRequired,
  }))
}

export default CardContainer;
