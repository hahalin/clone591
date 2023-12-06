import { useState, useContext } from "react";
import { RegionContext } from "../context/RegionContext";

const FilterAreas = () => {
    const { filterAreas } = useContext(RegionContext);

    const toggleArea = (area) => {
        // setSelectedAreas(prev => 
        //     prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
        // );
    };

    return (
        <div className="container">
            <div className="col-12 d-flex flex-wrap">
                {filterAreas.map(area => (
                    <div className="form-check form-check-inline" key={area.name}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={area.name}
                            id={`chk${area.name}`}
                            // checked={isAreaSelected(area.name)}
                            // onChange={() => toggleArea(area.name)}
                        />
                        <label className="form-check-label" htmlFor={`chk${area.name}`}>
                            {area.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterAreas;