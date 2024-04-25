import React, { useEffect, useState } from 'react'
import '../../assets/css/category.css'
import axiosClient from '../../utility/api/axiosClient';
import { APP_URL } from '../constant';
function Category() {
    const [category,setCategory]=useState();
    useEffect(()=>{
        (async()=>{
            try {
                const response= await axiosClient.get(APP_URL.BE_GET_ALL_CATEGORY)
                
                
            } catch (error) {
               console.log('CATCH ERROR : IN : get all category data:: ',error) 
            }
        })()
    })



    return (
        <section className="category">
            <div className="container">
                <div className="row spanRow justify-content-center">
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                      <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="categoryItem">
                            <img src="./image/model-1.png" alt="" className="categoryImg" />
                            <p>Home</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Category
