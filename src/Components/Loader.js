import React from 'react';
import '../Styling/Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-container'>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__ball'></div>
      </div>
    </div>
  )
}

export default Loader

//https://codepen.io/ispal/pen/mVaaJe