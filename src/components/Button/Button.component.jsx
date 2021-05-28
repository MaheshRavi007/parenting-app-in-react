import React from 'react'
import './Button.styles.css'
export const Button=({text,icon,...otherProps})=>(
    <button className='navbtn' {...otherProps}>
      {icon?icon:null}
      {text}
        </button>
)