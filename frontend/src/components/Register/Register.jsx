import React, { useId, useRef } from 'react';
import { Button, Input } from '../common';

function Register() {
    const id = useId();
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
                <form action="" className="modal-content form">
                    {/* Modal header and body content */}
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
                        <Input label="Email : " type="email" className="input" placeholder='Enter your Email Id... '/>
                        <Input label="User Name : " type="text" className="input" placeholder='Enter your user name... '   />
                        <Input label="Password : " type="password" className="input" placeholder='Enter your password ... '   />
                        <Input label="Conform Password : " type="password" className="input" placeholder='Conform your password ... '   />
                    </div>
                    <div className="modal-footer">
                        <Button className="rounded light" type="submit" children="Sign Up"   />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
