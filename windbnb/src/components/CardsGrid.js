import React from 'react'
import stays from "../utils/stays.json"
import Card from "../components/Card"
const CardsGrid = () => {
  return (
    <div className="mt-6">
      <div className="font-montserrat flex items-center justify-between">
        <h1 className='text-lg font-bold '>Stays in Finland</h1>
        <div className='text-sm'>
          <span>12+</span> stays
        </div>
      </div>
      <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
          {stays.map((el,index)=>{
            return <Card key={index} stay={el}/>
          })}
      </div>
    </div>
  );
}

export default CardsGrid