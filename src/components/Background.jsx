import React from 'react'

function Background({ background }) {
  return (
    <div className='background'>
      <img src={background} alt='image' />
    </div>
  )
}

export default Background