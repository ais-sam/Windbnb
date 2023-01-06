import React from 'react'
import Navbar from "../components/Navbar"
import CardsGrid from "../components/CardsGrid"
import FilterDrawer from '../components/FilterDrawer';

const Home = () => {
  return (
    <div className="container">
      <FilterDrawer/>
      <Navbar/>
      <CardsGrid/>
    </div>
  );
}

export default Home