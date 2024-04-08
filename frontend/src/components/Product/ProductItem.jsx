import React from 'react'
import '../../assets/css/product.css'
import { Button } from '../common'
function ProductItem() {
    return (
        <div className="productItem">
            <div className="productImage">
                <img src="./image/model-2.jpg" alt="" />
            </div>
            <div className="productData">
                <div className="productRating ">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <h3 className="productName">Test Lamp test title</h3>
                <h4 className="productPrice">$150 <span>$180</span></h4>
                <div className="d-flex">
                    <Button className="productButton">Buy Now </Button>
                    <Button className="productButton ms-2">Red More </Button>
                </div>

            </div>
        </div>
    )
}

export default ProductItem
