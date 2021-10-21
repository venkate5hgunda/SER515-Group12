import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['cmp-btn--primary', 'cmp-btn--outline']; // Never name a CSS Class just btn. There'll be style conflict. Name it with component prefix, like cmp-btn for component-button

const SIZES = ['cmp-btn--medium', 'cmp-btn--large'];

export const Button =({children, type, onclick, buttonStyle,buttonSize}) => {
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
 return (
  <Link to='/sign-up' className='cmp-btn-mobile'>
   <button className={`cmp-btn ${checkButtonStyle} ${checkButtonSize}`}
   onClick={onclick}
   type={type}>
    {children}
   </button>

  </Link>
 )
} 