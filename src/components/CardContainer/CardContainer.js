import React from 'react';
import PropTypes, { arrayOf, shape, string, object } from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ districts, selectCard, comparedDistricts }) => {
  const addCss = (district) => {
    const selectedDistrict = comparedDistricts.find( card => {
      return card.location === district.location;
    });

    return selectedDistrict ? "selected" : "";
  };

  const renderedCards = districts.map((district) =>
    <Card {...district}
      id={district.location}
      selectCard={selectCard}
      addCss={addCss(district)}
      key={district.location} />);

  return (
    <section className="cardContainer">
      {renderedCards}
    </section>
  );
};

CardContainer.propTypes = {
  districts: arrayOf(shape({
    location: string.isRequired,
    data: object.isRequired
  })),
  selectCard: PropTypes.func,
  comparedDistricts: PropTypes.array
};

export default CardContainer;
