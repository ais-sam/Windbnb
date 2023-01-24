import React from 'react'
import stays from "../utils/stays.json"
import Card from "../components/Card"
import useGlobal from '../contexts/GlobalContext'
import Title from './Title'

const CardsGrid = () => {
  const {choosedLocation,totalGeusts} = useGlobal()
  const [city,country] = choosedLocation.split(',')

  const filtredResults = stays.filter(stay=>{
    if(choosedLocation && totalGeusts){
      return stay.city === city && stay.country === country.trim() && stay.maxGuests >= totalGeusts
    
    }else if (choosedLocation && !totalGeusts) {
      return stay.city === city && stay.country === country.trim()
    
    }else if (!choosedLocation && totalGeusts){
      return stay.maxGuests >= totalGeusts
    }
    return stay
  })

  const numberOfStays = (!choosedLocation && !totalGeusts )? "+12" : filtredResults.length
  
  return (
    <div className="mt-6">
      <Title stays ={numberOfStays}/>
      <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
          {filtredResults.map((el,index)=>{
            return <Card key={index} stay={el}/>
          })}
      </div>
    </div>
  );
}

export default CardsGrid