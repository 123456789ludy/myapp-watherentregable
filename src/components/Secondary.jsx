import React from 'react'

function Weather({ weather, celsius }) {
  return (
    <div className='weather'>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
      />
      <h2 className='weather-main'>{weather.weather?.[0].description}</h2>
    </div>
  )
}

export default Weather                