import React, { useId } from 'react'
import { Input, PasswordInput } from '../form'

 function AddDataInput(
    {
        type = "text",
        inputClass = "",
        labelClass = "",
        label,
        id,
        ...pros
    },ref
) {
    const Id =id?id: useId();
    return (
        <div className="row align-items-center mb-4" ref={ref}>
            <div className="col-md-3">
                <label htmlFor={Id} className={`form-label m-0 ${labelClass}`}>{label}</label>
            </div>
            <div className="col-md-9">
                {type=="password"? <PasswordInput id={Id} margin={false} inputClass={inputClass} {...pros}/> : <Input margin={false} type={type} id={Id} inputClass={inputClass} {...pros}></Input>}
                
            </div>
        </div>
    )
}
export default React.forwardRef(AddDataInput)