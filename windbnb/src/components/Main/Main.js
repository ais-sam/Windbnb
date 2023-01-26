import React from 'react'
import useGlobal from '../../contexts/GlobalContext'
import stays from "../../utils/stays.json"
import CardGrid from './CardGrid'
import NoStaysFound from './NoStaysFound'
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
      {filtredResults.length!==0 ? <CardGrid filtredResults={filtredResults}/> : <NoStaysFound/>}
    </div>
  );
}

export default CardsGrid