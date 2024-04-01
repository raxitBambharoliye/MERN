import React from 'react'

function Button({
    children="Click me",
    type = 'button',
    className = '',
    them=true,
    ...props
}) {
    if (them) {
        className += ' btn-them';
    }
    return (
      
    <button type={type} className={`${className}`} {...props}>{children}</button>
  )
}

export default Button
