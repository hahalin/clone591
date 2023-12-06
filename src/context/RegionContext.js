import React, { useState, createContext, useContext } from 'react';

const RegionContext = createContext();

// Step 2: 創建 Provider 組件
const RegionProvider = ({ children }) => {
    const [regions, setRegions] = useState([
        { name: "台北市", id: "tpe", active: false },
        { name: "新北市", id: "ntpe", active: true },
        { name: "基隆市", id: "kel", active: false },
        { name: "桃園市", id: "tyn", active: false }
    ]);

    const [areas,setAres]=useState([
        {regionId:'ntpe',name:'汐止區',active:false},
        {regionId:'ntpe',name:'新店區',active:false},
        {regionId:'ntpe',name:'瑞芳區',active:false},
        {regionId:'tpe',name:'南港區',active:false},
        {regionId:'tpe',name:'文山區',active:false},
        {regionId:'tpe',name:'內湖區',active:false},
        {regionId:'kel',name:'七堵區',active:false},
        {regionId:'kel',name:'仁愛區',active:false},
        {regionId:'tyn',name:'桃園區',active:false},
        {regionId:'tyn',name:'中壢區',active:false},
        {regionId:'tyn',name:'龍潭區',active:false}
    ]);

    const [selectedRegion, setSelectedRegion] = useState(null);

    const [filterAreas,setFilterAreas]=useState([]);

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setRegions(regions.map(r => ({
            ...r,
            active: r.id === region.id
        })));
        
        const filteredAreas_ = areas.filter(area => area.regionId === region.id);
        setFilterAreas(filteredAreas_);

    };

    return (
        <RegionContext.Provider value={{ regions, selectedRegion, handleRegionSelect,filterAreas}}>
            {children}
        </RegionContext.Provider>
    );
};

export { RegionProvider, RegionContext };