import React from 'react'
import logo from "../../assets/logo.svg"

const Logo = ({className}) => {
  return (
    <div className={className} >
      <img src={logo} alt=""/>
    </div>
  )
}

export default Logo