import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { RegionContext } from "../context/RegionContext";


const RegionSelector = () => {

    const { regions, selectedRegion, handleRegionSelect } = useContext(RegionContext);
    return (
        <>
            <div className="dropdown nav-link px-2">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedRegion ? selectedRegion.name : '選擇地區'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        {regions.map((region, index) => (
                            <Dropdown.Item href="#/action-1" onClick={() => handleRegionSelect(region)} 
                                active={selectedRegion && region.name === selectedRegion.name }
                            >{region.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    );
};

export default RegionSelector;