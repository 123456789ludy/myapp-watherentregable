import React from 'react'

function Secondary({ weather }) {
  return (
    <ul>
      <li>
        <img src='https://img.icons8.com/office/16/000000/windsock.png' /> Wind:{' '}
        {weather.wind?.speed} km/h
      </li>
      <li>
        <img src='https://img.icons8.com/color/48/000000/downpour--v1.png' />{' '}
        Clouds: {weather.clouds?.all}%
      </li>
      <li>
        <img src='https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png' />{' '}
        Humidity: {weather.main?.humidity}%
      </li>
    </ul>
  )
}

export default Secondary