import { useState, useContext } from "react";
import { useParams } from 'react-router-dom';

import { RegionContext } from "../context/RegionContext";

const HouseItem = () => {
    const { id } = useParams(); // 獲取 URL 中的 id 參數

    const houseList = [
        { id: 1, name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { id: 2, name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { id: 3, name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { id: 4, name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' },
        { id: 5, name: '中興路隱馥玉2房車位徐尉婭', imageUrl: '/images/house1.jpg' }
    ];

    const getHouseDetailsById = (id) => {
        return houseList.filter(n => n.id == id)[0];
    };

    const house = getHouseDetailsById(id);

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img className="img-fluid img-responsive rounded product-image" width="350" src={house.imageUrl} alt={house.name} />
                                        </div>
                                        <div className="thumbnail text-center">
                                            {/* <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70" />
                                            <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i>
                                                {/* <span className="ml-1">Back</span> */}
                                            </div>
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{house.id}</span>
                                            <h5 className="text-uppercase">{house.name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <div>
                                                    <i className="bi bi-house"></i>
                                                    <span className="ms-1 me-1 badge text-bg-light">編號：{house.id}</span>
                                                    <span className="ms-1 me-1 badge text-bg-info">電梯大樓</span>
                                                    |
                                                    <span className="ms-1 me-1 badge rounded-pill text-bg-secondary">兩房兩廳兩衛</span>

                                                </div>
                                                <div className="ml-2">
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ms-1 me-1 badge rounded-pill text-bg-light">權狀45坪</span>
                                        |
                                        <span className="ms-1 me-1 badge rounded-pill text-bg-light">主建20.49坪</span>
                                        |
                                        <span className="ms-1 me-1 badge rounded-pill text-bg-light">6年</span>
                                        |
                                        <span className="ms-1 me-1 badge rounded-pill text-bg-light">13F/15F</span>
                                        <div className="sizes mt-5">

                                        </div>
                                        <div className="cart mt-4 align-items-center"> 
                                            <div className="btn btn-danger text-uppercase mr-2 px-4">1,890萬</div> 
                                            <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default HouseItem;
