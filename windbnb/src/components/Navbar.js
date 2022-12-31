import React from 'react'
import Logo from "./Logo"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <div className='md:mt-4 py-4 flex flex-col md:items-center justify-between gap-8 md:flex-row md:gap-0 '>
      <Logo/>
      <SearchBar/>
    </div>
  )
}

export default Navbar