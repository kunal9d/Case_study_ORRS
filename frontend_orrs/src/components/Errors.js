import React from 'react'
import { useHistory } from 'react-router-dom'

const Errors = () => {
  let history = useHistory()
  return (
    <h1 className='err'>
    <p>No page for this url : <button onClick={history.push("/")}>return to home </button></p>
    
    </h1>
  )
}

export default Errors