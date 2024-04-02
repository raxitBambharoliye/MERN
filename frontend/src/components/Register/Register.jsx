import React, { useId, useRef } from 'react';
import { Button, Input } from '../common';
import { useForm } from 'react-hook-form';

function Register() {
    const inputRef = useRef();
    const {register,handleSubmit, formState:{errors} } = useForm();


    const registerSubmit= async (data)=>{
        try {
            console.log(data)
        } catch (error) {
            
        }
    }

    return (
        <div
            className="modal fade"
            id="register"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <form action="" className="modal-content form" onSubmit={handleSubmit(registerSubmit)}>
                    <div className="modal-header justify-content-center" data-bs-theme="dark">
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
                        {...register("email",{
                            required : "email required",
                        })}
                        />
                        {errors.email && <p className="ValidationError text-center mt-2">{errors.email.message}</p>}

                        <Input label="User Name : " type="text" className="input" placeholder='Enter your user name... ' ref={inputRef} 
                        {...register("userName",{
                            required:"user name required"
                        })}
                        />
                        {errors.userName && <p className="ValidationError text-center mt-2">{errors.userName.message}</p>}

                        <Input label="Password : " type="password" className="input" placeholder='Enter your password ... ' ref={inputRef}
                        {...register("password",{
                            required:"password required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long"
                            }
                        })}
                         />
                        {errors.password && <p className="ValidationError text-center mt-2">{errors.password.message}</p>}

                        <Input label="Conform Password : " type="password" className="input" placeholder='Conform your password ... ' ref={inputRef} 
                        {...register("CPassword")}
                        />
                    </div>
                    <div className="modal-footer">
                        <Button className="rounded light" type="submit" children="Sign Up" ref={inputRef} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
