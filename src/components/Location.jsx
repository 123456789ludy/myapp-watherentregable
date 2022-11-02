import React from 'react'
import { useEffect } from 'react'

function Location({ weather }) {
  return (
    <div className='location'>
      <h1>
        {weather.name}, {weather.sys?.country}
      </h1>
    </div>
  )
}

export default Location