import React from 'react'

function SingleCartDetails(props) {
  return (
    <td>
        <td><img src={props.image} alt="" margin="auto"></img></td>
        <td>{props.description}</td>
        <td>{props.price + " zł"}</td>
    </td>
  )
}

export default SingleCartDetails