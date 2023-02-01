import React from 'react'
import Card from './Card'

const CardGrid = ({filtredResults}) => {

  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {filtredResults.map((el, index) => {
        return <Card key={index} stay={el} />;
      })}
    </div>
  );
}

export default CardGrid