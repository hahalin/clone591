import React, { useState,useContext } from 'react';
import Header, { Header2 } from "./components/Header";
import {RegionProvider,RegionContext} from "./context/RegionContext";
import FilterAreas from './components/FilterAreas';
import HouseList from './components/HouseList';
function App() {

  return (
    <RegionProvider>
      <main>
        <Header />
        <FilterAreas></FilterAreas>
        <HouseList></HouseList>
      </main>
    </RegionProvider>
  );
}

export default App;
