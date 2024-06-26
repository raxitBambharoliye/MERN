import React from 'react'
import '../../assets/css/product.css'
import { Button } from '../common'
import { shortString } from '../../utility/common'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeSingleProductId } from '../../store/data.slice'
function ProductItem({ product }) {

  const dispatch = useDispatch();
    
    return (
        <div className="productItem">
            <div className="productImage">
                <img src={`${import.meta.env.VITE_BASE_URL}${product.bannerImage}`} alt="" />
            </div>
            <div className="productData">
                <div className="productRating ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>

                </div>
                <h3 className="productName" title={product.name}>{shortString(product.name,14)}</h3>
                <h4 className="productPrice">${product.price*product.discount/100} <span>${ product.price}</span></h4>
                <div className="d-flex">
                    <Button className="productButton">Buy Now </Button>
                    <Link to={"/singleProduct"}>
                    <Button className="productButton ms-2" onClick={(e)=>{dispatch(changeSingleProductId(product._id))}} >Red More </Button></Link>
                </div>

            </div>
        </div>
    )
}

export default ProductItem
