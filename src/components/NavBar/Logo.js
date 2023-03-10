import React from 'react'
import logo from "../../assets/logo.svg"
import useGlobal from '../../contexts/GlobalContext'
import { types } from '../../reducer/types'


const Logo = ({className}) => {
  const {dispatch} = useGlobal()
  const {CHOOSE_LOCATION,CHOOSE_TOTAL_GUESTS,SET_LOCATION,SET_GUESTS} = types
  const handleLogoClick = ()=>{
    dispatch({type:CHOOSE_LOCATION,payload:""})
    dispatch(
      {type:CHOOSE_TOTAL_GUESTS,
      payload: 0}
      )
    dispatch({type:SET_LOCATION,payload: ''})
    dispatch({type:SET_GUESTS,payload: 0})
  }
  return (
    <button className={className} onClick={handleLogoClick}>
      <img src={logo} alt=""/>
    </button>
  )
}

export default Logo