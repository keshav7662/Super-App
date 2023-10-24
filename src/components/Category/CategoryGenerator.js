import React, { useState } from 'react'
import './CategoryGenerator.css'
function CategoryGenerator({ title, image, backgroundColor, onClick,isSelected }) {
  const [radius, setRadius] = useState(false)
  const handleClick = () => {
    if (onClick) {
      setRadius(!radius);
      onClick(title);
    }
  };
  return (
    <>
      <div className='category-card' style={{backgroundColor:backgroundColor, border: isSelected ? '3px solid green' : 'none'}} onClick={handleClick}>
        <p>{title}</p>
        <img src={image} alt="" />
      </div>
    </>
  )
}

export default CategoryGenerator
