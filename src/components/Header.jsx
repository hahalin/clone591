import { useState, useContext } from "react";
import RegionSelector from "./RegionSelector";
import { RegionContext } from "../context/RegionContext";

const Header = () => {

    const { regions, selectedRegion, handleRegionSelect } = useContext(RegionContext);

    return (
        <header className="p-3 mb-3">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a className="d-flex col-lg-2 align-items-center mb-2 mb-lg-0 text-white text-decoration-none " href="//sale.591.com.tw">
                        <img className="img-fluid" height="40" src="//s.591.com.tw/build/static/house/saleList/images/logo.png?time=2023-08-08" alt="Logo" />
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto_  me-1 mb-2 justify-context-left mb-md-0">
                        <li>
                            <RegionSelector />
                        </li>
                    </ul>
                    <form className="d-flex col-12 col-lg-6 col-md-6 me-1 justify-context-left">
                        <input className="form-control me-2 mb-1 " type="search" placeholder="請輸入社區/街道名稱搜尋" aria-label="Search" />
                    </form>
                    <button className="btn btn-outline-success" type="submit">搜尋</button>                    
                </div>
            </div>
        </header>
    );
};

const Header2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="//sale.591.com.tw">
                            <img src="//s.591.com.tw/build/static/house/saleList/images/logo.png?time=2023-08-08" alt="Logo" className="head-area-logo" />
                        </a>
                        <div className="search-filter-region">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    新北市
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item active" href="#">台北市</a></li>
                                    <li><a className="dropdown-item active" href="#">新北市</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="請輸入社區/街道名稱搜尋" aria-label="Community search" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">搜尋</button>
                    </div>

                    <div className="d-flex">
                        <a href="//market.591.com.tw/list" className="me-3" target="_blank">社區找房</a>
                        <a href="//sale.591.com.tw/map-index.html" target="_blank">地圖找房</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;
export { Header2 };
