import { useState } from 'react';

const useWeather = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [error, setError] = useState(null);

	const fetchData = async (city) => {
		const url =
			city && city !== 'Ciudad Actual'
				? `http://localhost:3001/v1/current/${city}`
				: `http://localhost:3001/v1/current`;

		const headers = new Headers();
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Content-Type', 'application/json');

		const options = {
			method: 'GET',
			headers: headers,
		};

		await fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				if (data.data) {
					setCurrentWeather(data.data);
				} else {
					setError('error');
				}
			})
			.catch((error) => {
				setError(error);
			});
	};

	return [currentWeather, error, fetchData];
};

export default useWeather;
