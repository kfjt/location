import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Geolocation />
    </div>
  )
}

const Geolocation = () => {
  const [coords, setCoords] = useState({})

  const {geolocation} = navigator

  const getCoords = ({coords}) => {
    console.info(coords)
        const {accuracy, latitude, longitude} = coords
        setCoords({accuracy, latitude, longitude})
    }

  useEffect(() => {
    if (geolocation && geolocation.getCurrentPosition)
      geolocation.getCurrentPosition(getCoords, console.error)
    const timerId = setInterval(() => geolocation.getCurrentPosition(getCoords, console.error), 1000)
    return () => clearInterval(timerId)
  }, [geolocation])
  
  return (
    <div className="geolocation">
      <div >{`accuracy:${coords.accuracy}`}</div>
      <div >{`latitude:${coords.latitude}`}</div>
      <div >{`longitude:${coords.longitude}`}</div>
    </div>
  )
}

export default App
