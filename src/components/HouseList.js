import { useState, useContext } from "react";

import { RegionContext } from "../context/RegionContext";

import HouseItem from "./HouseItem";

const HouseList = () => {

    const houseList = [
        { name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' }
    ];

    return (
        <>
            <div className="container mt-2 mb-2">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-12">
                        {
                            houseList.map(house => (
                                <div className="row p-2 bg-white border rounded">
                                    <div className="col-md-3 mt-1">
                                        <a href="#">
                                            <img className="img-fluid img-responsive rounded product-image" src={house.imageUrl} alt={house.name} />
                                        </a>
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <h5>{house.name}</h5>
                                        <div className="d-flex flex-row">
                                            <div>
                                                <i className="bi bi-house"></i>

                                                <span className="ms-1 me-1 badge text-bg-info">電梯大樓</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-secondary">兩房兩廳兩衛</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-light">權狀45坪</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-light">主建20.49坪</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-light">6年</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-light">13F/15F</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="mt-1">
                                                <i class="bi bi-geo-alt-fill"></i>

                                                <span className="ms-1 me-1 badge text-bg-light">隱馥玉</span>
                                                |
                                                <span className="ms-1 me-1 badge rounded-pill text-bg-light">汐止區-中興路</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="d-flex col-md-3 border-left mt-1">
                                        <div className="d-flex flex-column align-self-center">
                                            <h4 className="text-danger">1,890萬</h4>
                                            <span className="text-danger">(含車位價)</span>
                                            <span>44.94萬/坪</span>
                                            {/* <button className="btn btn-outline-primary btn-sm mt-2" type="button">詳細內容</button> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default HouseList;