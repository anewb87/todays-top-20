import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='results'>
      <h2>FAKE NEWS!</h2>
      <p>Let's rewrite some history and try again.</p>
      <Link to='/'>
        <button className='go-home-btn'>Home</button>
      </Link>
    </div>
  )
}

export default Error