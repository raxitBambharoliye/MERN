import React, { useId, useRef } from 'react'
import { Button, Input } from '../common'
import Register from '../Register/Register'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const inputRef = useRef();
    const id = useId();
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm();
    const submitHan = (data) => {
        console.log("submit run ")
        console.log(data);
    }
    return (
        <>
            <div
                className="modal fade"
                id="login"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered "  >
                    <form action="" className="modal-content form" onSubmit={handleSubmit(submitHan)} >

                        <div className="modal-header justify-content-center" data-bs-theme="dark"   >
                            <h1 className="text-center flex-grow-1" id="staticBackdropLabel">
                                Light Store
                            </h1>
                            <button
                                type="button"
                                className="btn-close text-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body login">

                            <Input label="Email : " type="email" className="input" placeholder='Enter your Email Id... ' ref={inputRef}
                                {...register("email")}
                            />
                            <Input label="Password : " type="password" className="input" placeholder='Enter your password ... ' ref={inputRef}
                                {...register("password", {
                                    required: "password is required",
                                    minLength: {
                                        value: 6,
                                        message:"password must be at least 6 characters"
                                    }
                                })}
                            />
                            {errors.password && (<p className="ValidationError">{errors.password.message}</p>)}
                        </div>
                        <div className="modal-footer">
                            <Link className='fromLInk' data-bs-toggle="modal" data-bs-target="#register" >create new Account</Link>
                            < Button className=' rounded light ' type='submit' children='LogIn' />
                        </div>

                    </form>
                </div>
            </div>
            <Register />

        </>
    )
}
export default Login
