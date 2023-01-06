import React from 'react'
import search from '../assets/search.png'

const Button = () => {
  return (
    <button className=" bg-w-gray px-7 py-3 rounded-xl text-white text-sm flex items-center gap-3">
      <img src={search} className="w-5" />
      Search
    </button>
  );
}

export default Button