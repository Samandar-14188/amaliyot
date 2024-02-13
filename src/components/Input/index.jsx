import React from 'react'

export default function Input({label, placeholder, type, ref}) {
  return (
    <div className='input-wrapper'>
          <label>{label}</label> 
          <input r type={type} placeholder={placeholder} />
    </div>
  )
}
