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
  const [charged, setCharged] = useState(false)
 const [ischange, setIschange] = useState(true)
 const [isChangeGrados, setChangeGrados] = useState(true);

  useEffect(() => {
    const success = (pos) => {
      const coords = pos.coords
      const lat = coords.latitude
      const long = coords.longitude
      
      setCharged(true)
        setTimeout(() => {
        setCharged(false)
        }, 3000)
     
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
        return 'https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      } else if (
        icon === '02d' ||
        icon === '04d' ||
        icon === '11d' ||
        icon === '50d'
      ) {
        return 'https://images.pexels.com/photos/2747045/pexels-photo-2747045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      } else if (
        icon === '01d' ||
        icon === '03n' ||
        icon === '09n' ||
        icon === '10n' ||
        icon === '13n' 
      ) {
        return 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      } else if (
        icon === '02n' ||
        icon === '04n' ||
        icon === '11n' ||
        icon === '50n'
      ) {
        return 'https://images.pexels.com/photos/8246465/pexels-photo-8246465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    }
    
    setBackground(set(weather.weather?.[0].icon))
    // document.body.style = `Background-image: url(${background})
  }, [charged])

  const convertion = () => {
    setIschange(!ischange)
    setChangeGrados(!isChangeGrados)
  }
 
const gradosKelvin = weather.main?.temp
const gradosCentigrados = parseInt(gradosKelvin - 273.15);
const gradosFahrenheit = parseInt(1.8 * (gradosKelvin - 273.15) + 32);
  console.log(weather)

  return (
    
        <div className='app'>
            <Background background={background} />
            <Hour />
            <div className='glass'>
                <Card>
                <div className='main'>
                <h2>{ischange ? gradosFahrenheit : gradosCentigrados} {isChangeGrados ? "°F" : "°C"} </h2>
                    <Location weather={weather} celsius={celsius} />
                    <Weather weather={weather} />
                    <Degrees weather={weather} celsius={celsius} />
                    <ChangeDegrees setCelsius={setCelsius} celsius={celsius}  />
                
                </div>
                <div className='secondary'>
                    <Secondary weather={weather} />
                </div>
                </Card>
            </div>
            <div className='moon'></div>
        </div>
    
  )
}
/**  ) : (
    <Spinner /> 
     )*/
export default App


