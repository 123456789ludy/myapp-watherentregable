import React from 'react'

function Degrees({ weather, celsius }) {
  return (
    <div className='degrees'>
      <h2>
        {celsius
          ? `${(weather.main?.temp - 273.15).toFixed(1)}`
          : `${(((weather.main?.temp - 273.15) * 9) / 5 + 32).toFixed(1)}`}
        <span className='corf'>{celsius ? '°c' : '°f'}</span>
      </h2>
      <ul>
        <li>
          Feels like:{' '}
          {celsius
            ? `${(weather.main?.temp - 273.15).toFixed(1)}°c`
            : `${(((weather.main?.temp - 273.15) * 9) / 5 + 32).toFixed(
                1
              )}°f`}{' '}
        </li>
        <li>
          Low:{'  '}
          {celsius
            ? `${(weather.main?.temp_min - 273.15).toFixed(2)}°c`
            : `${(((weather.main?.temp_min - 273.15) * 9) / 5 + 32).toFixed(
                2
              )}°f`}
        </li>
        <li>
          High:{'  '}
          {celsius
            ? `${(weather.main?.temp_max - 273.15).toFixed(2)}°c`
            : `${(((weather.main?.temp_max - 273.15) * 9) / 5 + 32).toFixed(
                2
              )}°f`}
        </li>
      </ul>
    </div>
  )
}

export default Degrees