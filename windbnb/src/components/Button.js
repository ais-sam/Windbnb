import React from 'react'
import searchWhite from '../assets/search-white.png'
import useGlobal from '../contexts/GlobalContext';


const Button = ({className}) => {
  const {setChoosedLocation,setModal,setTotalGuests,location,guests} = useGlobal()
  
  const setFilters = ()=>{
    setChoosedLocation(location)
    setTotalGuests(guests)
    setModal(false)
  }
  return (
    <>
    <button
    onClick={(setFilters)}
      className={`${className} bg-w-pink p-6 py-[14px] rounded-2xl text-white text-sm flex items-center gap-3`}
    >
      <img src={searchWhite} className="w-6" alt="" />
      Search
    </button>
    </>
  );
}

export default Button