import React, { useState } from 'react'
import DisplayNumber from './layout/DisplayNumber'
import WeatherForm from './WeatherForm'
import './WeatherApp.css'
import styled from 'styled-components'


const Boton = styled.button`
 width:100%;
 background-color: #00ffc3;
 color:white;
 margin-top: 1rem;
 border-radius: 4px;
 border: none;
`

const Input = styled.input`
border:solid gray;
background-color:lightgrey;
color: black;
border-radius: 4px;
`

const WeatherApp = () => {
    const [temperature, SetTemperature] = useState(null)


    function queryTemperature(e) {
        e.preventDefault()
        const city = e.target.city.value;
        const apikey = 'c04423290622a444603ad1320075f545'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        fetch(url)
            .then(response => response.json())
            .then(weather => SetTemperature(weather.main.temp))

    }
    console.log(temperature)
    return (
        <div>
            <h2>Weather App</h2>
            <form onSubmit={queryTemperature}>
                <Input type="text" placeholder='digite la ciudad' id='city' />
                <Boton className='submit'>Enviar</Boton>
            </form>
            {/*operador ternario*/}
            {temperature !== null ? <div><h2 className='temp'>{temperature}</h2></div> : null}

            {/* operador de corto circuito*/}
            {/*temperature!==null && <div><h2>{temperature}</h2></div>*/}
        </div>
    )
}

export default WeatherApp