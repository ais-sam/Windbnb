import React from 'react'

const LocationItem = ({onClick,city}) => {
  return (
    <li onClick={onClick} className="mb-4 cursor-pointer"><i class="fas fa-map-marker-alt"></i> {city}</li>
  )
}

export default LocationItem