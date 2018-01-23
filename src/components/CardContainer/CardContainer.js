import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({districts}) => {
  const renderedCards = districts.map((district, index) => 
        <Card {...district}/>)

  return (
    <section>
      {renderedCards}
    </section>
  )
}

export default CardContainer;