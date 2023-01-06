import React from 'react'

const CityList = () => {
    const cities =["Helsinki, Finland","Turku, Finland","Oulu, Finland","Vaasa, Finland"]
  return (
    <ul className='font-muli text-w-gray mt-10 pl-4'>
        {cities.map((city,index)=><li key={index} className="my-4">{city}</li>)}
    </ul>
  )
}

export default CityList