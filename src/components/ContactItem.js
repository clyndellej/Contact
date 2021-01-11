import React from 'react'
import '../App.css';

const ContactItem = props => {
  const {
    index,
    value,
    contactDelete,
    viewContact,
    handleOnClickEdit
  } = props

  return (
    <div >
      
      <span>{value}</span>
      <button onClick={() => handleOnClickEdit(index, value)}>Edit</button>
      <button onClick={() => contactDelete(index)}>Delete</button>
      <button >View</button>
    </div>
  )
}

export default ContactItem