import React, { useState } from 'react';
import Header from "./components/Header"
import RegionSelector from "./components/RegionSelector";

function App() {
  const [regions, setRegions] = useState([
    { name: "台北市", active: true },
    { name: "新北市", active: true },
    // ...其他地區
  ]);

  return (
    <div>
      <Header></Header>
      <RegionSelector regions={regions} />
      
    </div>
  );
}

export default App;
