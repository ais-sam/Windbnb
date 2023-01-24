import React from 'react'
import logo from "../../assets/logo.svg"
import useGlobal from '../../contexts/GlobalContext'

const Logo = ({className}) => {
  const {setChoosedLocation,setTotalGuests,setGuests,setLocation} = useGlobal()
  
  const handleLogoClick = ()=>{
    setChoosedLocation('')
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