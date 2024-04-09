import React, { useId } from 'react'

function Input({
    type = "text",
    inputClass = "",
    labelClass="",
    label = 'label',
    ...pros
}, ref) {
    const Id = useId();
    return (
        <div className="mb-3">
            <label htmlFor={Id} className={`form-label ${labelClass}`}>{ label}</label>
            <input type={type} className={`form-control ${inputClass}`} id={Id} {...pros} ref={ref} />
        </div>
    )
}

export default React.forwardRef(Input)
