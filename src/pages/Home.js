import React from 'react';
import CardsGrid from "../components/Main/Main";
import Copyright from '../components/Copyright';
import Modal from '../components/Modal';
import Navbar from "../components/NavBar/Navbar";
import useGlobal from '../contexts/GlobalContext';


const Home = () => {
  const {state} = useGlobal()

  return (
    <div className="container flex flex-col justify-between min-h-screen">
      {state.isModal && <Modal/>}
      <div>
        <Navbar/>
        <CardsGrid/>
      </div>
      <Copyright/>
    </div>
  );
}

export default Home