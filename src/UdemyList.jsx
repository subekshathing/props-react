import React from 'react'

const UdemyList = ({image,name,tutorName,price}) => {
  return (
    <div style={{width:"290px", height:"400px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}>
        <img src={image} alt="udemy" style={{width:"250px",height:"200px"}}/>
        <h4>{name}</h4>
        <h6>{tutorName}</h6>
        <p>${price}</p>

    </div>
  )
}

export default UdemyList