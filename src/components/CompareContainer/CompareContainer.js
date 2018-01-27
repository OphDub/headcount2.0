import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({ comparedDistricts, selectCard, comparisonObj }) => {
  const comparisonArr = Object.entries(comparisonObj);
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
        <h4>{comparisonObj.compared}</h4>
        <h3>{comparisonArr[1]}</h3>
      </article>
      {renderedComparison[1]}
    </section>
  )
}

export default CompareContainer;
