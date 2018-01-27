import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({ comparedDistricts, selectCard, comparisonObj }) => {
  const comparisonArr = Object.entries(comparisonObj).map( (entry) => <div>{entry[0]} <span>{entry[1]}</span></div> )
  const renderedComparison = comparedDistricts.map( district =>
                                                            <Card {...district}
                                                                  key={district.location}
                                                                  id={district.location}
                                                                  selectCard={selectCard}/>)
                                                                  console.log(comparisonArr)

  return (
    <section className="compareContainer">
      {renderedComparison[0]}
      <article className="comparisonCard">
        <div>{comparisonArr[0]}</div>
        <div>{comparisonObj.compared}</div>
        <div>{comparisonArr[1]}</div>
      </article>
      {renderedComparison[1]}
    </section>
  )
}

export default CompareContainer;
