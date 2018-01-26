import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({ comparedDistricts }) => {
  const renderedComparison = comparedDistricts.map( district =>
    <Card {...district}
          key={district.location}
          id={district.location}/>)

  return (
    <section>
      {renderedComparison}
    </section>
  )
}

export default CompareContainer;
