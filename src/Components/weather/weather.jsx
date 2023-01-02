import React from 'react';
import './weather.css';

const Weather = ({ data }) => {
	return (
		<div className='weather'>
			<div className='top'>
				<div>
					<p className='city'>{data.location.city}</p>
					<p className='weather-description'>
						{data.weather.weather[0].description}
					</p>
				</div>
				<img
					alt='weather'
					className='weather-icon'
					src={`icons/${data.weather.weather[0].icon}.png`}
				/>
			</div>
			<div className='bottom'>
				<p className='temperature'>{Math.round(data.weather.main.temp)}°C</p>
				<div className='details'>
					<div className='parameter-row'>
						<span className='parameter-label'>Details</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Feels like</span>
						<span className='parameter-value'>
							{Math.round(data.weather.main.feels_like)}°C
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Wind</span>
						<span className='parameter-value'>
							{data.weather.wind.speed} m/s
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Humidity</span>
						<span className='parameter-value'>
							{data.weather.main.humidity}%
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Pressure</span>
						<span className='parameter-value'>
							{data.weather.main.pressure} hPa
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
