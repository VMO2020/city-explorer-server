const axios = require('axios');
require('dotenv').config();

const weather = async (req, res) => {
	const API_KEY = process.env.API_KEY;

	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided

		const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

		const result = await axios.get(URL);
		const data = await result.data;

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(404).json(error);
	}
};

module.exports = weather;
