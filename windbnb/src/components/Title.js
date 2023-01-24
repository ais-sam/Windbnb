import React from 'react'

const Title = ({stays}) => {

  return (
    <div className="font-montserrat flex items-center justify-between">
    <h1 className='text-lg font-bold '>Stays in Finland</h1>
    <div className='text-sm'>
      <span>{stays}</span> stays
    </div>
  </div>
  )
}

export default Title