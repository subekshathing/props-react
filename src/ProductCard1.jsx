import React from 'react'

const ProductCard1 = ({image,name,price}) => {
  return (
    <div style={{width:"220px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <img src={image} alt="" style={{width:"200px", height:"200px"}} />
        <h3 style={{color:"green"}}>{name}</h3>
        <p style={{color:price>50000?"red":"blue"}}>{price}</p>
    </div>
  )
}

export default ProductCard1