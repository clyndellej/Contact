import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Main = () => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/contact')
  }

  return (
    <div className="App">
      <h1>Main Page</h1>
      <button onClick={handleOnClick}>Create Contact</button>
    </div>
  )
}

export default Main