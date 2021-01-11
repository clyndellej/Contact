import React, { useState } from 'react'

import ContactItem from './ContactItem'
import axios from '../axios'

const Contact = () => {
  const [state, setState] = useState({
    contactlist: []
  })
  const [detail, setdetailState] = useState(
    {
     
      username: '',
      email:'',
      phone:'',
     
    }
  )
  const [edit, setEdit] = useState({
    editContact: '',
    editIndex: ''
  })

  
  


  const addContact = () => {
    
    const list = contactlist 
    list.push(username,email,phone) 
    setState({ contactlist: list })
    setdetailState({ username: '',email: '',phone: ''})
    axios.post('/contacts.json',list)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  const [contactUpdate, setcontactUpdate] = useState(false)
  const {contactlist } = state
  const {username,email,phone} = detail
  const { editContact: editContact, editIndex } = edit

  const handleOnChangeEdit = (event) => {
    const { name, value } = event.target

    setEdit({ ...edit, [name]: value })
  }

  const handleOnClickEdit = (index, value) => {
    setcontactUpdate(true)
    setEdit({editContact: value, editIndex: index})
  }

  const handleOnClickCancel = () => {
    setcontactUpdate(false)
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target

    setdetailState({ ...detail, [name]: value })
    
  }

 


  const contactDelete = (index) => {
    const list = contactlist 
    list.splice(index, 1) 
    axios.post('/contacts.json',list)
    setState({contactlist: list })
    setdetailState({ username: ''})
  }

  const updateContact = (index) => {
    const list = contactlist 
    list[index] = editContact 

    setState({ ...state, contactlist: list })
    setcontactUpdate(false)
    axios.post('/contacts.json',list)
    
    setEdit({editContact: '', editIndex: ''})
  }

  return (
    <>
      <div className="text"  >
        <div className= "App">
        <h1>Contact List Application</h1> 
        </div >
         
           <form  >
            
            <div >
                <label >Name</label>
                <div>
                <input type="text" required name="username" id="name" value={ username } 
                 onChange={ handleOnChange }  />
                </div>
               
            </div>

            <div >
                <label >Email</label>
                <div>
                <input type="text" required name="email" id="email" value={ email } 
                 onChange={ handleOnChange } />
                </div>
                
            </div>

            <div >
                <label>Phone</label>
                <div>
                <input type="number" id="phone" required name="phone"  value={phone }  
                onChange={ handleOnChange } />
                </div>
            </div> 
        </form>


          {
            username.length && phone.length && email.length?
              <button onClick={addContact}>Add Contact</button>
             : <button >Add Contact</button>
          }
  
        <div>
          <table >
          <thead>
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Contact Number</th>
                 
              </tr>
          </thead>
          </table>
          { 
              contactlist.map((value, index) => (
                <ContactItem
                  key={index}
                  index={index}
                  value={value}
                  contactDelete={contactDelete}
                  handleOnClickEdit={handleOnClickEdit}
                />
              )) 
          }
          {
            contactUpdate ?
              <div>
                <input
                  type="text"
                  name="editContact"
                  placeholder="Update Contact"
                  value={editContact}
                  onChange={handleOnChangeEdit}
                />
                <button onClick={() => updateContact(editIndex)}>Update</button>
                <button onClick={handleOnClickCancel}>Cancel</button>
              </div> : ''
          }
        </div>
      </div>
    </>
  )
}

export default Contact