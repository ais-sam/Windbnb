import React from 'react'
import search from '../assets/search.png'

const Button = ({className}) => {
  return (
    <button className={`${className} bg-w-gray p-6 py-4 rounded-2xl text-white text-sm flex items-center gap-3`}>
      <img src={search} className="w-5" alt=""/>
      Search
    </button>
  );
}

export default Button