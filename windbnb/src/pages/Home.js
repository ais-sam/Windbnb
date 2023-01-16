import React from 'react';
import CardsGrid from "../components/CardsGrid";
import Copyright from '../components/Copyright';
import Modal from '../components/Modal';
import Navbar from "../components/Navbar";
import useGlobal from '../contexts/GlobalContext';


const Home = () => {
  const {isModal} = useGlobal()

  return (
    <div className="container">
      {isModal && <Modal/>}
      <Navbar/>
      <CardsGrid/>
      <Copyright/>
    </div>
  );
}

export default Home