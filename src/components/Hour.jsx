import React from 'react'

function Hour() {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const date = new Date()
  const hour = date.getHours().toLocaleString()
  const day = weekday[date.getDay()]
  const minutes = date.getMinutes().toLocaleString()

  return (
    <div className='date'>
      <h2>{day.toUpperCase()}</h2>
      <h3>{`${hour <= 9 ? 0 + hour : hour}:${
        minutes <= 9 ? 0 + minutes : minutes
      } ${hour > 12 ? 'PM' : 'AM'}`}</h3>
    </div>
  )
}

export default Hour