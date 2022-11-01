import React from 'react'

function ChangeDegrees({ setCelsius, celsius }) {
  return (
    <>
      <div className='btn' onClick={() => setCelsius(!celsius)}>
        Change to {celsius ? '°F' : '°C'}
      </div>
    </>
  )
}

export default ChangeDegrees