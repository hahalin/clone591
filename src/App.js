import React, { useState,useContext } from 'react';
import Header, { Header2 } from "./components/Header";
import {RegionProvider,RegionContext} from "./context/RegionContext";
import FilterAreas from './components/FilterAreas';

function App() {

  return (
    <RegionProvider>
      <main>
        <Header />
        <FilterAreas></FilterAreas>
      </main>
    </RegionProvider>
  );
}

export default App;
