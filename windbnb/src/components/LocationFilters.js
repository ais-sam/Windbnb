import React from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import { locations as cities } from '../utils/locations'
import LocationItem from './LocationItem'


const LocationFilters = ({className}) => {
  const {location,setLocation} = useFilterContext()

  const filterdCities = cities.filter(el=>{
    return el.toLocaleLowerCase().includes(location.toLocaleLowerCase())
  })

  const selectLocation = (selectedCity)=>{
    setLocation(selectedCity)
  }
  return (
    <ul className={`${className} font-muli text-w-gray md:pl-4`}>
        {(location ? filterdCities : cities).map((city,index)=>{
          return <LocationItem key={index} onClick={()=>selectLocation(city)} city={city}/>
        })}
    </ul>
  )
  
}

export default LocationFilters