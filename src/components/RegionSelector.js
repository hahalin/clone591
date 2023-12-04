import React, { useState } from 'react';

const RegionSelector = ({ regions }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="regionDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                選擇地區
            </button>
            <ul className="dropdown-menu" aria-labelledby="regionDropdown">
                {regions.map((region, index) => (
                    <li key={index}>
                        <a className={`dropdown-item ${region.active ? 'active' : ''}`} href="#">
                            {region.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegionSelector;