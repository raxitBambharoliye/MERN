import React, { useState } from 'react'
import { Button, Input } from '../../components'
import '../../assets/css/singleProduct.css'
function SingleProduct() {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <section className='singleProductData'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className=" singleProductLeft">
                <div className="row gx-2  ">
                  <div className="col-2 ">
                    <div className="singleProductSmallImage">
                      <img src="./image/model-1.jpg" alt="" />
                    </div>
                    <div className="singleProductSmallImage">
                      <img src="./image/model-1.jpg" alt="" />
                    </div>
                    <div className="singleProductSmallImage">
                      <img src="./image/model-1.jpg" alt="" />
                    </div>
                    <div className="singleProductSmallImage">
                      <img src="./image/model-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="singleProductImage">
                      <img src="./image/collection2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className=" singleProductRight">
                <h2>LIGHT MODAL NAME ETC </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur provident tenetur accus...</p>
                <h3>$ 44 <span>100$</span> </h3>
                <p className='discount'>save up to <span>50%</span>  </p>
                <div className="quantity d-flex align-items-center mb-3">
                  <button className='quantityBtn' onClick={(e) => { setQuantity((q) => q - 1) }}> - </button>
                  <input type='text' disabled className='form-control quantityInput' value={quantity}></input>
                  <button className='quantityBtn' onClick={(e) => { setQuantity((q) => q + 1) }}>+</button>
                </div>
                <div className="mb-3">
                  <Button>Add to Cart</Button>
                </div>
                <div className="">
                  <Button>Buy Now </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* customer review  */}
      <section className='customerReview'>
        <div className="container">
          <div className="customerReviewTitle mb-3">
            <h2>Customer Reviews</h2>
            <div className="rate d-flex align-items-center">
              <div className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p className='m-0 mt-1 ms-2'>5 Out Of 5</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="customerReviewRate">
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar" >
                    <div className="ratProgress" style={{width:"90%"}} >5 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{width:"70%"}}>4 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{width:"60%"}}>3 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{width:"40%"}}>2 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{width:"20%"}}>1 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>

              </div>
            </div>
            <div className="col-9">
        

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct
