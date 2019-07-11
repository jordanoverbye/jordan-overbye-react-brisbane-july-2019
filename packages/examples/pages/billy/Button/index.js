import React from 'react'
import './index.scss'

function Button({ className, ...props }) {
  return <button className={['button', className].join(' ')} {...props} />
}

export default Button
