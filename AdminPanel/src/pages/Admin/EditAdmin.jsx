import React, { useRef } from 'react'
import { Input } from '../../components/form'
import { useForm } from 'react-hook-form';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import Button from '../../components/Button/Button';
import axiosClient from '../../utility/axiosClient';
import { useSelector, useDispatch } from 'react-redux'
import { getAllAdmin } from '../../store/dataSlice';
import {APP_URL} from '../../constant/'

export default function EditAdmin({
    id,
    admin,
}) {
    const editorAdmin = useSelector((state) => state.authReducer.admin)
    const dispatch = useDispatch();
    const buttonRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            userName: admin.userName,
            email: admin.email,
            companyName: admin.companyName,
            phone: admin.phone,
            role: admin.role
        }
    });
    const editAdminSub = async (data) => {
        try {
            const formData = new FormData();
            if (data.profile[0]) {
                formData.append('profile', data.profile[0])
            }
            formData.append("userName", data.userName)
            formData.append("email", data.email)
            formData.append("companyName", data.companyName)
            formData.append("phone", data.phone)
            formData.append("role", data.role)
            formData.append("adminId", admin._id)
            formData.append("editor", editorAdmin._id)
            const response = await axiosClient.post( APP_URL.BE_EDIT_ADMIN_PROFILE, formData);
            dispatch(getAllAdmin(response.data.allAdmin))
            buttonRef.current.click();
        } catch (error) {
            console.log(`CATCH ERROR :: IN :: editAdminSub :: submitHandler :: API :: 💀💀💀 :: \n ${error} `)
        }
    }
    const inputRef = useRef();
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
        >
            <div className="modal-dialog  modal-dialog-centered modal-lg">
                <form className="modal-content" onSubmit={handleSubmit(editAdminSub)}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Edit Admin {admin.userName}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="card-body px-4">
                            <PreviewImage ref={inputRef} src={admin.profile ?? './image/profile.jpg'}    {...register("profile")} />
                            {/* email */}
                            <div className="editProfileItem ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor={"profileEditEmail"} className={`form-label`}>Email : </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Input type="email" id={"profileEditEmail"} inputClass="themInput " placeholder="Enter your email id ..."
                                            {...register("email", {
                                                required: "Please enter your email",
                                                email: "Please enter valid email"
                                            })} ></Input>
                                    </div>
                                </div>
                            </div>
                            {errors.email && <p className='validationError'>{errors.email.message}</p>}
                            {/* company name */}
                            <div className="editProfileItem ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor={"profileEditCompanyName"} className={`form-label`}>Company Name : </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Input type="text" id={"profileEditCompanyName"} inputClass="themInput " placeholder="Enter your Company Name ..."
                                            {...register("companyName", {
                                                required: "company name is required"
                                            })}></Input>
                                    </div>
                                </div>
                            </div>
                            {errors.companyName && <p className='validationError'>{errors.companyName.message}</p>}

                            {/* user name */}
                            <div className="editProfileItem ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor={"profileEditUserName"} className={`form-label`}>User Name : </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Input type="text" id={"profileEditUserName"} inputClass="themInput " placeholder="Enter your User Name ..."
                                            {...register("userName", {
                                                required: "user name is required"
                                            })}></Input>
                                    </div>
                                </div>
                            </div>
                            {errors.userName && <p className='validationError'>{errors.userName.message}</p>}
                            {/* phone */}
                            <div className="editProfileItem ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor={"profileEditPhone"} className={`form-label`}>Phone : </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Input type="text" id={"profileEditPhone"} inputClass="themInput " placeholder="Enter your Phone Number..."
                                            {...register("phone", {
                                                required: "Enter your phone number",
                                                // pattern:/^(\+92)?[0-9]{10}$/||"Enter valid number"
                                            })}></Input>
                                    </div>
                                </div>
                            </div>
                            {errors.phone && <p className='validationError'>{errors.phone.message}</p>}
                            {/* post */}
                            <div className="editProfileItem ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor={"profileEditPost"} className={`form-label`}>Post : </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Input type="text" id={"profileEditPost"} inputClass="themInput " placeholder="Enter your Post..."
                                            {...register("role", {
                                                required: "post is required"
                                            })}></Input>
                                    </div>
                                </div>
                            </div>
                            {errors.role && <p className='validationError'>{errors.role.message}</p>}
                            <div className="text-end">


                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" buttonClass="themButtonBorder me-2 " data-bs-dismiss="modal" ref={buttonRef} >Discard</Button>
                        <Button type="submit" buttonClass="themButtonFill ">Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
