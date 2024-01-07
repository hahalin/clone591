import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header, { Header2 } from "./components/Header";
import { RegionProvider, RegionContext } from "./context/RegionContext";
import FilterAreas from './components/FilterAreas';
import HouseList from './components/HouseList';
import HouseItem from './components/HouseItem';
function App() {

  return (
    <RegionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <main>
              <Header />
              <FilterAreas></FilterAreas>
              <HouseList></HouseList>
            </main>
          }>
            <Route path="house/:id" element={<HouseItem />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </RegionProvider>
  );
}

export default App;
