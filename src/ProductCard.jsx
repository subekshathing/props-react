import React from 'react'

const ProductCard = ({image,name,price}) => {

  return (
    <div style={{width:"400px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <img src={image} style={{height:"300px"}} alt="" />
       <h3>{name}</h3>
        <p>रु {price}</p>
        
    </div>
  )
}

export default ProductCard
 