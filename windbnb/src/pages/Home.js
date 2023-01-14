import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import CardsGrid from "../components/CardsGrid"
import FilterDrawer from '../components/FilterDrawer';
// import Copyright from '../components/Copyright';
import Modal from '../components/Modal';
import useGlobal  from '../contexts/GlobalContext';
const Home = () => {
  // const [showModal,setShowModal] = useState(false)
  const {showModal,showFilter} = useGlobal()
  return (
    <div className="container">
      <button >show</button>
      {showModal && <Modal/>}
      {/* <FilterDrawer/> */}
      <Navbar/>
      <CardsGrid/>
      {/* <Copyright/> */}
    </div>
  );
}

export default Home