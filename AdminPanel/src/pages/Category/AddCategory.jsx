import React, { useRef } from 'react'
import AddDataInput from '../../components/AddDataInput/AddDataInput'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import PreviewImage from '../../components/PreviewImage/PreviewImage'
import axiosClient from '../../utility/axiosClient'
import { useSelector } from 'react-redux'
import {APP_URL} from '../../constant/'

export default function AddCategory() {

  const adminData = useSelector((state) => state.authReducer.admin);
  const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm();
  const inputRef = useRef();
  const addSub = async (data) => {
    try {
      console.log('data', data)
      const formData = new FormData();
      if (data.categoryImage[0]) {
        formData.append("categoryImage", data.categoryImage[0]);
      }
      formData.append("categoryName", data.categoryName);
      let response = await axiosClient.post('/addAdmin', formData)
      console.log('response', response.data)

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
      <h2 className='pageTitle'>Add Category</h2>
      <div className="addDataFrom">
        <form onSubmit={handleSubmit(addSub)}>
          <PreviewImage labelClass='mb-4' {...register("categoryImage")} />

          <AddDataInput type="text" label={"Category Name : "} placeholder='Enter category name ... ' ref={inputRef} inputClass='themInput'{...register("categoryName", {
            required: "company name is required"
          })} />
          {errors.companyName && <p className='validationError text-center'>{errors.companyName.message}</p>}

          <div className="text-end">
            <Button buttonClass="themButtonFill" type='submit' ref={inputRef} >Add Category</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
