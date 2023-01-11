import React from 'react'

const LocationFilterResults = ({className}) => {
  const cities =["Helsinki, Finland","Turku, Finland","Oulu, Finland","Vaasa, Finland"]
  return (
    <ul className={`${className} font-muli text-w-gray sm:pl-4`}>
        {cities.map((city,index)=><li key={index} className="mb-4">{city}</li>)}
    </ul>
  )
}

export default LocationFilterResults