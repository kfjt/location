import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Geolocation />
    </div>
  );
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

export default App;
