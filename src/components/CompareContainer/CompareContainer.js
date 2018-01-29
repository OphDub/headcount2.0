import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({ comparedDistricts, selectCard, comparisonObj }) => {
  const averageComparison = comparisonObj.compared ? "Combined Average:  " + comparisonObj.compared : null
  const comparisonArr = Object.entries(comparisonObj).map( (entry) => <div className="displayData">{entry[0]} <br/> <span>Average Enrollment:  {entry[1]}</span></div> )
  const renderedComparison = comparedDistricts.map( district =>
                                                            <Card {...district}
                                                                  key={district.location}
                                                                  addCss={'selected'}
                                                                  id={district.location}
                                                                  selectCard={selectCard}/>)

  return (
    <section className="compareContainer">
      {renderedComparison[0]}
      {renderedComparison.length > 0 &&
        <article className="comparisonCard">
          <div>{comparisonArr[0]}</div>
          <div>{comparisonObj.compared}</div>
          <div>{comparisonArr[1]}</div>
        </article>
      }
      {renderedComparison[1]}
    </section>
  )
}

export default CompareContainer;
