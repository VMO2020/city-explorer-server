require('dotenv').config();

const weather = async (req, res) => {
	const API_KEY = process.env.API_KEY;

	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided
		console.log(city);

		// Make the fetch request to the API
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
		);
		const data = await response.json();

		// Return the data as the response
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(404).json(error);
	}
};

module.exports = weather;
