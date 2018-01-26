import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({ comparedDistricts, selectCard, comparisionObj }) => {
  const comparisonArr = Object.entries(comparisionObj);
  const renderedComparison = comparedDistricts.map( district =>
                                                            <Card {...district}
                                                                  key={district.location}
                                                                  id={district.location}
                                                                  selectCard={selectCard}/>)

  return (
    <section>
      <article>
        <h3>{comparisonArr[0]}</h3>
        <h4>{comparisionObj.compared}</h4>
        <h3>{comparisonArr[1]}</h3>
      </article>
      {renderedComparison}
    </section>
  )
}

export default CompareContainer;
