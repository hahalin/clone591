import React, { useState,useContext } from 'react';
import {RegionContext} from "../context/RegionContext";


const RegionSelector = () => {

    const { regions, selectedRegion, handleRegionSelect } = useContext(RegionContext);

    return (
        <>
        <div className="dropdown nav-link px-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="regionDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedRegion ? selectedRegion.name : '選擇地區'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="regionDropdown">
                {regions.map((region, index) => (
                    <li key={region.id} onClick={() => handleRegionSelect(region)}>
                        <a className={`dropdown-item ${selectedRegion && region.name === selectedRegion.name ? 'active' : ''}`} href="#">
                            {region.name}
                        </a>
                    </li>
                ))}
            </ul>
            
        </div>
        
        </>
    );
};

export default RegionSelector;