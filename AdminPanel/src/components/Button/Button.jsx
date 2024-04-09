import React from 'react'

function Button({
    type = 'button',
    children = 'click me ',
    buttonClass=''
},ref) {
  return (
      <button type={type} className={`btn ${buttonClass}`} ref={ref}>{children}</button>
  )
}

export default React.forwardRef(Button);
