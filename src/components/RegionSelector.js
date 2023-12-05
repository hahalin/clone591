import React, { useState } from 'react';

const RegionSelector = ({ regions,onRegionSelect  }) => {

    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSelect = (region) => {
        setSelectedRegion(region);
        if(onRegionSelect) {
            onRegionSelect(region);
        }
    };


    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="regionDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedRegion ? selectedRegion.name : '選擇地區'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="regionDropdown">
                {regions.map((region, index) => (
                    <li key={index} onClick={() => handleSelect(region)}>
                        <a className={`dropdown-item ${selectedRegion && region.name === selectedRegion.name ? 'active' : ''}`} href="#">
                            {region.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegionSelector;