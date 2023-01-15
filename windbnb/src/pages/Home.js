import React, { useState,useContext } from 'react'
import Navbar from "../components/Navbar"
import CardsGrid from "../components/CardsGrid"
import FilterDrawer from '../components/FilterDrawer';
import Copyright from '../components/Copyright';
import Modal from '../components/Modal';
import useGlobal  from '../contexts/GlobalContext';
import { GlobalContext } from '../contexts/GlobalContext';


const Home = () => {
  // const [showModal,setShowModal] = useState(false)
  // const {isModal,showFilter} = useGlobal()
  const {isModal,setModal} = useContext(GlobalContext)
  return (
    <div className="container">
      {isModal && <Modal/>}
      {/* <FilterDrawer/> */}
      <Navbar/>
      <CardsGrid/>
      <Copyright/>
    </div>
  );
}

export default Home