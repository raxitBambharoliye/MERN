import React, { useId, useState } from 'react'

function PasswordInput({
    inputClass = "",
    labelClass = "",
    label = 'label',
    ...pros
}, ref) {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState("fa-solid fa-eye");
    // <i className="fa-solid fa-eye-slash"></i>
    const Id = useId();
    const changeInput = (e) => {
        console.log('e', e)
        setType(type === 'password'  ? "text" : "password")
        setIcon(type === 'password'  ? "fa-solid fa-eye" : "fa-solid fa-eye-slash")
    }
    return (
        <div className="mb-3 ">
            <label htmlFor={Id} className={`form-label ${labelClass}`}>{label}</label>
            <div className="position-relative">
                <input type={type} className={`form-control  ${inputClass} pe-2`} id={Id} {...pros} ref={ref} />
                <button className="PasswordEyeButton " onClick={changeInput}>
                    <i className={icon} />
                </button>
            </div>

        </div>
    )
}

export default React.forwardRef(PasswordInput)
