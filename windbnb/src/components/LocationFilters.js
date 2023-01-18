import React, { useContext } from 'react'
import { FilterContext, useFilterContext } from '../contexts/FilterContext'

const LocationFilters = ({className}) => {
  const {city} = useFilterContext()
  const cities =["Helsinki, Finland","Turku, Finland","Oulu, Finland","Vaasa, Finland"]
  return (
    <ul className={`${className} font-muli text-w-gray md:pl-4`}>
        {cities.map((city,index)=><li key={index} className="mb-4"><i class="fas fa-map-marker-alt"></i> {city}</li>)}
      <p>my city : {city}</p>
    </ul>
  )
}

export default LocationFilters