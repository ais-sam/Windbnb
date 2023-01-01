import React from 'react'
import Navbar from "../components/Navbar"
import CardsGrid from "../components/CardsGrid"

const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <CardsGrid/>
    </div>
  );
}

export default Home