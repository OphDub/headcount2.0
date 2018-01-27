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
                                                                  console.log(renderedComparison)

  return (
    <section>
      {renderedComparison[0]}
      <article>
        <h3>{comparisonArr[0]}</h3>
        <h4>{comparisionObj.compared}</h4>
        <h3>{comparisonArr[1]}</h3>
      </article>
      {renderedComparison[1]}
    </section>
  )
}

export default CompareContainer;
