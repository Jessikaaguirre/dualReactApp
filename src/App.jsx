import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CounterApp from './components/CounterApp'
import WeatherApp from './components/WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>My DualReactApp</h1>
      <div className='container'>
        <CounterApp />
        <WeatherApp />
      </div>
    </div>
  )
}

export default App
