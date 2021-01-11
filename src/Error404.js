import React from 'react'
import { useHistory } from 'react-router-dom'
import './App.css'
import error from './error.svg';


const Error404 = () => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/')
  }
    return (
        <div className="App" >
          <div>   <img src={error}  /></div>
          <p>We are sorry but the page you are looking for does not exist.</p>
          <button onClick={handleOnClick}>Main Page</button>
        
          
         
        </div>
      )
  }

  


export default Error404;