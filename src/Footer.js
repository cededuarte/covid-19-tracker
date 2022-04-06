import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer__info'>
        <span className="Footer__Line-message">
          Designed and developed by Ced Eduarte  {new Date().getFullYear()}
        </span>
    </div>
  )
}

export default Footer