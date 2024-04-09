import React from 'react'

const DisplayList = (props) => {
  return (
    <div style={{width:"250px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", flexWrap:"wrap"}}>
    <img src={props.image} style={{height:"200px", width:"200px"}} alt="" />
   <h3>{props.name}</h3>
    <p>रु {props.price}</p>
    
</div>
    
  
  )
}

export default DisplayList