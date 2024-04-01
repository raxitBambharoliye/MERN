import React, { useRef } from 'react'
import { Button, Input } from '../common'

function Login() {
    const inputRef= useRef()
    return (
        <div
            className="modal fade"
            id="login"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered " >
                <div className="modal-content form">
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
                        <form action="">
                            <Input label="Email : " type="email" className="input" placeholder='Enter your Email Id... ' />
                            <Input label="User Name : " type="text" className="input" placeholder='Enter your user name... ' />
                            <Input label="Password : " type="password" className="input" placeholder='Enter your password ... ' />
                            <Input label="Conform Password : " type="password" className="input" placeholder='Conform your password ... ' />
                        </form>
                    </div>
                    <div className="modal-footer">
                        < Button className=' rounded light ' children='LogIn' ref={inputRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
