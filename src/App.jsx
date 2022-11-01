import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import Secondary from './components/Secondary'
import ChangeDegrees from './components/ChangeDegrees'
import Hour from './components/Hour'
import Card from './components/Card'
import Weather from './components/Weather'
import Degrees from './components/Degrees'
import Spinner from './components/Spinner'
import Background from './components/Background'

function App() {
  //to work with the weather api
  const [weather, setWeather] = useState({})
  const [celsius, setCelsius] = useState(true)
  const [background, setBackground] = useState('')
  const [charged, setCharged] = useState(true)

  useEffect(() => {
    const success = (pos) => {
      const coords = pos.coords
      const lat = coords.latitude
      const long = coords.longitude
      // console.log(`coords: ${coords}, lat: ${lat}, long: ${lo
      axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f61d6c238fa7d8ed6d4ec0acf0006cc4`
        )
        .then((res) => setWeather(res.data))
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    setCharged(!charged)
  }, [weather])

  useEffect(() => {
    const set = (icon) => {
      if (
        icon === '01d' ||
        icon === '03d' ||
        icon === '09d' ||
        icon === '10d' ||
        icon === '13d'
      ) {
        return 'https://i.ibb.co/vsVyMf3/sun.webp'
      } else if (
        icon === '02d' ||
        icon === '04d' ||
        icon === '11d' ||
        icon === '50d'
      ) {
        return 'https://i.ibb.co/TrXGZGG/sun2.webp'
      } else if (
        icon === '01d' ||
        icon === '03n' ||
        icon === '09n' ||
        icon === '10n' ||
        icon === '13n'
      ) {
        return 'https://i.ibb.co/k8G8H4Q/night2.webp'
      } else if (
        icon === '02n' ||
        icon === '04n' ||
        icon === '11n' ||
        icon === '50n'
      ) {
        return 'https://i.ibb.co/DgNc8WG/night.webp'
      }
    }

    setBackground(set(weather.weather?.[0].icon))
    // document.body.style = `Background-image: url(${background})
  }, [charged])

  console.log(weather)

  return charged ? (
    <div className='app'>
      <Background background={background} />
      <Hour />
      <div className='glass'>
        <Card>
          <div className='main'>
            <Location weather={weather} celsius={celsius} />
            <Weather weather={weather} />
            <Degrees weather={weather} celsius={celsius} />
            <ChangeDegrees setCelsius={setCelsius} celsius={celsius} />
          </div>
          <div className='secondary'>
            <Secondary weather={weather} />
          </div>
        </Card>
      </div>
      <div className='moon'></div>
    </div>
  ) : (
    <Spinner />
  )
}

export default App


