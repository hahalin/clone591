import React, { useState } from 'react';
import Header from "./components/Header";
import RegionSelector from "./components/RegionSelector";

function App() {
  const [regions, setRegions] = useState([
    { name: "台北市", active: false },
    { name: "新北市", active: true },
    { name: "基隆市", active: false },
    { name: "桃園市", active: false }
  ]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    // 更新 regions，將選中的地區設為 active
    setRegions(regions.map(r => ({
      ...r,
      active: r.name === region.name
    })));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4">
            <RegionSelector regions={regions} onRegionSelect={handleRegionSelect} />
          </div>
          <div className="col-md-8">
            {selectedRegion && <div>選擇的地區: {selectedRegion.name}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
