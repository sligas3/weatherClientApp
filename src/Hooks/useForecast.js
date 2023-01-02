import { useState } from 'react';

const useForecast = () => {
	const [forecast, setForecast] = useState(null);
	const [error, setError] = useState(null);

	const fetchData = async (city) => {
		const url =
			city && city !== 'Ciudad Actual'
				? `http://localhost:3001/v1/forecast/${city}`
				: `http://localhost:3001/v1/forecast`;

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
					setForecast(data.data);
				} else {
					setError('error');
				}
			})
			.catch((error) => {
				setError(error);
			});
	};

	return [forecast, error, fetchData];
};

export default useForecast;
