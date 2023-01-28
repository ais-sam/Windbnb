import React from 'react'
import logo from "../../assets/logo.svg"
import useGlobal from '../../contexts/GlobalContext'
import { types } from '../../reducer/types'
const Logo = ({className}) => {
  const {dispatch,setChoosedLocation,setTotalGuests,setGuests,setLocation} = useGlobal()
  const {CHOOSE_LOCATION} = types
  const handleLogoClick = ()=>{
    dispatch({type:CHOOSE_LOCATION,payload:""})
    // setChoosedLocation('')
    setTotalGuests(0)
    setLocation('')
    setGuests(0)
  }
  return (
    <button className={className} onClick={handleLogoClick}>
      <img src={logo} alt=""/>
    </button>
  )
}

export default Logo