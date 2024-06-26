import React, { useEffect, useState } from 'react'
import { Button, Input } from '../../components'
import '../../assets/css/singleProduct.css'
import axiosClient from '../../utility/api/axiosClient';
import url from '../../components/constant/url';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SingleProduct() {

  const navigate = useNavigate();
  let stateData = useSelector((state)=>state.dataReducer);
  if (!stateData.singleProductId) {
    return navigate('/products')
  }
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await axiosClient(`${url.BE_GET_ALL_PRODUCT}/?singleId=${stateData.singleProductId}`)
        if (response && response.status == 200) {
          setSingleProduct(response.data.allProducts[0])
        }
        console.log('response', response)
        console.log(response.data);
        setLoading(false)
      } catch (error) { 
        console.log('CATCH ERROR : IN : get single product : API', error)
      }
    })()
  }, [])
  if (loading) {
    return (<><h1>loading</h1></>)
  }
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
                <h2>{singleProduct.name} </h2>
                {/* { eval(singleProduct.description) } */}
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
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className='m-0 mt-1 ms-2'>5 Out Of 5</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="customerReviewRate">
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar" >
                    <div className="ratProgress" style={{ width: "90%" }} >5 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{ width: "70%" }}>4 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{ width: "60%" }}>3 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{ width: "40%" }}>2 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>
                <div className="customerReviewRateItem d-flex  align-items-center">
                  <div className="customerRateProgressBar">
                    <div className="ratProgress" style={{ width: "20%" }}>1 start</div>
                  </div>
                  <p className='m-0 ms-1'>100%</p>
                </div>

              </div>
            </div>
            <div className="col-9">
              <div className="customerReviewInner ps-4">
                <div className="customerReviewItem">
                  <div className="customerReviewProfile">
                    <div className="customerProfile d-flex align-items-center">
                      <img src="./image/userPro.png" alt="customer profile" />
                      <h3 className='m-0'>Raxit Patel</h3>
                    </div>
                    <div className="customerRate star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="customerReviewMessage">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat odio aut assumenda voluptas deserunt ratione alias veniam perspiciatis, ea aliquid.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct
