import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useWeather from './Hooks/useWeather';
import useForecast from './Hooks/useForecast';
import Weather from './Components/weather/weather';
import Forecast from './Components/forecast/forecast';

function App() {
	const [isLoading, setIsLoading] = useState(null);
	const [weather, errorWeather, getWeather] = useWeather();
	const [forecast, errorForecast, getForecast] = useForecast();

	const handleServices = async (city) => {
		setIsLoading(true);
		return new Promise(async () => {
			await getWeather(city);
			await getForecast(city);
			setIsLoading(false);
		})
			.catch((err) => {
				setIsLoading(false);

				throw new Error(err);
			})
			.finally((resolve) => {
				resolve();
			});
	};

	const handleOnClickCity = (event) => {
		const selectedCity = event.target.value;

		handleServices(selectedCity);
	};

	useEffect(() => {
		handleServices();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<ul className='list'>
					<li>
						<button
							className='button'
							value='Ciudad Actual'
							onClick={(e) => handleOnClickCity(e)}>
							Ciudad Actual
						</button>
					</li>
					<li>
						<button
							className='button'
							value='Montevideo'
							onClick={(e) => handleOnClickCity(e)}>
							Montevideo
						</button>
					</li>
					<li>
						<button
							className='button'
							value='Nueva York'
							onClick={(e) => handleOnClickCity(e)}>
							Nueva York
						</button>
					</li>
					<li>
						<button
							className='button'
							value='Bogota'
							onClick={(e) => handleOnClickCity(e)}>
							Bogota
						</button>
					</li>
					<li>
						<button
							className='button'
							value='Chicago'
							onClick={(e) => handleOnClickCity(e)}>
							Chicago
						</button>
					</li>
				</ul>

				{isLoading && (
					<>
						<img src={logo} className='App-logo' alt='logo' />
					</>
				)}
				{weather && <Weather data={weather} />}
				{forecast && <Forecast data={forecast} />}
			</header>
		</div>
	);
}

export default App;
