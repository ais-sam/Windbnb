import React from 'react';
import searchWhite from '../../assets/search-white.png';
import useGlobal from '../../contexts/GlobalContext';
import { types } from '../../reducer/types';

const Button = ({className}) => {
  const {dispatch,state} = useGlobal()
  const {CLOSE_MODAL,CHOOSE_LOCATION,CHOOSE_TOTAL_GUESTS}=types
  const {location,guests} = state
  const setFilters = ()=>{
    dispatch({ type: CHOOSE_LOCATION,
       payload: location });
    dispatch({type:CHOOSE_TOTAL_GUESTS,
    payload: guests})
    dispatch({type:CLOSE_MODAL})

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