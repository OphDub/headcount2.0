import React from 'react';
import { arrayOf, shape, string, object } from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ districts, selectCard }) => {
  const renderedCards = districts.map((district) =>
        <Card {...district}
               key={district.location}
               id={district.location}
               selectCard={selectCard}/>)

  return (
    <section className="cardContainer">
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
