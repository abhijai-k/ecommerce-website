import React from 'react'
import './Breadcrum.css'
import arraow_icon from '../Assets/arrow_icon.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcum'>
        HOME <img src={arraow_icon} alt="" /> SHOP <img src={arraow_icon} alt="" /> {product.category} <img src={arraow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum