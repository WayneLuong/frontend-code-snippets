import React from 'react'

/* pass props to get params.id */
export default (props) => {
  return (
    <div>
      <h1 className='display-4'>About Contact Manager</h1>
        <p className='lead'>Simple App</p>
        <h1>{props.match.params.id}</h1>
        <p> Version 1.0.0</p>
    </div>
  )
}
