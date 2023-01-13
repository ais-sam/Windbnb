import React from 'react'
import searchWhite from '../assets/search-white.png'


const Button = ({className}) => {
  return (
    <>
    <button
      className={`${className} bg-w-pink p-6 py-[14px] rounded-2xl text-white text-sm flex items-center gap-3`}
    >
      <img src={searchWhite} className="w-6" alt="" />
      Search
    </button>
    </>
  );
}

export default Button