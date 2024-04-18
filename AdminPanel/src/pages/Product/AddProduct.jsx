import React, { useEffect, useRef, useState } from 'react'
import AddDataInput from '../../components/AddDataInput/AddDataInput'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import PreviewImage from '../../components/PreviewImage/PreviewImage'
import axiosClient from '../../utility/axiosClient'
import { useSelector } from 'react-redux'
import { APP_URL } from '../../constant/'
import { useNavigate } from 'react-router-dom'
import Select from '../../components/form/Select'
import { Input } from '../../components/form'
import MultiPreviewImage from '../../components/PreviewImage/MultiPreviewImage'

export default function AddProduct() {
  const admin = useSelector((state) => state.authReducer.admin);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosClient.get(`${APP_URL.BE_ALL_CATEGORY}/0/0`);
        const categoryData = response.data.allCategory;
        let optionData = [];
        categoryData.forEach((element) => {
          optionData.push({ value: element._id, text: element.categoryName });
        })
        setCategory(optionData)
      } catch (error) {
        console.log(`CATCH ERROR :: IN :: addProduct :: get category :: API :: 💀💀💀 :: \n ${error} `)

      }

    })()
  },[])

  useEffect(() => {
    console.log('price', price)
    console.log('discount', discount)
    setDiscountPrice((price * discount) / 100);
  }, [price, discount])

  const test = (e) => {
    console.log("test")
    console.log("test", e.target.value)
  }

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const inputRef = useRef();
  const options = [{ value: "", text: "--select category--" }]
  const addSub = async (data) => {
    try {
      const formData = new FormData();
      if (data.bannerImage[0]) {
        formData.append("bannerImage", data.bannerImage[0]);
      }
      formData.append("categoryName", data.categoryName);
      formData.append("creator", admin._id)
      let response = await axiosClient.post(APP_URL.BE_ADD_CATEGORY, formData)
      console.log('response', response.data)
      if (response.status == 200) {
        navigate(APP_URL.RE_VIEW_PRODUCT_PAGE)
      }
    } catch (error) {
      console.log('error', error)
      if (error && error.response.status && error.response.status == 400 && error.response.data.error.length > 0) {
        error.response.data.error.forEach((element) => {
          setError(element.path, {
            message: element.msg
          })
        });
      }
    }
  }
  
  return (
    <div className="container ">
      <h2 className='pageTitle'>Add Product</h2>
      <div className="addDataFrom">
        <form onSubmit={handleSubmit(addSub)}>
          <PreviewImage labelClass='mb-4' {...register("bannerImage", {
            required: "category image is required "
          })} />
          {errors.bannerImage && <p className='validationError text-left'>{errors.bannerImage.message}</p>}
          {/* name */}
          <AddDataInput type="text" label={"Product Name : "} placeholder='Enter Product name ... ' ref={inputRef} inputClass='themInput'{...register("name", {
            required: "Product name is required"
          })} />
          {errors.name && <p className='validationError text-center'>{errors.name.message}</p>}
          {/*  description */}
          <AddDataInput type="text" label={"Product description : "} placeholder='Enter Product description ... ' ref={inputRef} inputClass='themInput'{...register("description", {
            required: "Product description is required"
          })} />
          {errors.description && <p className='validationError text-center'>{errors.description.message}</p>}

          <div className="row">
            <div className="col-md-5">
              {/*  price */}
              <AddDataInput type="number" label={"price : "} placeholder='Enter price ... ' ref={inputRef} onChange={test} inputClass='themInput'{...register("price", {
                required: "Product price is required"
              })} />
              {errors.price && <p className='validationError text-center'>{errors.price.message}</p>}
            </div>
            <div className="col-md-5">
              {/*  discount */}
              <AddDataInput type="number" label={" discount : "} placeholder='Enter  discount ... ' ref={inputRef} onChange={(e) => { setDiscount(parseInt(e.target.value)) }} inputClass='themInput'{...register("discount", {
                // required: "Product discount is required",
                validate: (value) => value >= 0 && value <= 100 || "Enter valid discount"
              })} />
              {errors.discount && <p className='validationError text-center'>{errors.discount.message}</p>}
            </div>
            <div className="col-md-2">
              <p>Price: {discountPrice > 0 ? discountPrice : 0}</p>
            </div>
          </div>

          {/*  stock */}
          <AddDataInput type="number" label={"Product stock : "} placeholder='Enter Product stock ... ' ref={inputRef} inputClass='themInput'{...register("stock", {
            required: "Product stock is required"
          })} />
          {errors.stock && <p className='validationError text-center'>{errors.stock.message}</p>}

          {/*  categoryData */}
          <AddDataInput type="select" options={category} label={"Product Category : "} placeholder='Enter Product Category ... ' ref={inputRef} inputClass='themInput'{...register("Category", {
            required: "Product Category is required"
          })} />
          {errors.Category && <p className='validationError text-center'>{errors.Category.message}</p>}
          {/* mul Image */}
          <MultiPreviewImage/>
          <div className="text-end">
            <Button buttonClass="themButtonFill" type='submit' ref={inputRef} >Add Category</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function onChangeHandler(e) {
  console.log(e.target.files)
}






/* name


description
price
discount
stock
inStock
isActive
categoryId
bannerImage
mulImage */