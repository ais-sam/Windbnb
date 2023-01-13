import React from 'react'
import Navbar from "../components/Navbar"
import CardsGrid from "../components/CardsGrid"
import FilterDrawer from '../components/FilterDrawer';
import Copyright from '../components/Copyright';
const Home = () => {
  return (
    <div className="container">
      <FilterDrawer/>
      <Navbar/>
      <CardsGrid/>
      <Copyright/>
    </div>
  );
}

export default Home