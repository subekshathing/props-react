import React from 'react'
import "./App.css"

const NameShow = ({studentName,address,college}) => {
  return (
    <div>
        <p>Hey {studentName}, you read at {college}, and you are from {address}</p>
    </div>
  )
}

export default NameShow