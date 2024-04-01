import React from 'react'

function Input({
    type = "text",
    name = "",
    id = "",
    className = "",
    label,
    labelClass = '',
    ...props
}, ref) {
    return (
        <div className="mb-3">
            {label && <label htmlFor={id} className={`form-label ${labelClass}`}>{label}</label>}
            <input
                type={type}
                className={`form-control ${className} `}
                id={id}
                {...props}
                ref={ref}
            />
        </div>
    )
}

export default React.forwardRef(Input)
