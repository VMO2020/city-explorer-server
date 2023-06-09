const axios = require('axios');
require('dotenv').config();

const movies = async (req, res) => {
	const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

	// https://api.themoviedb.org/3/search/movie?api_key=be09a8ef06ffc31f28b16e326ab9c675&query=Paris&language=en&region=Paris

	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided

		const URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}&language=en&region=${city}`;

		const result = await axios.get(URL);
		const data = await result.data;

		// Return the data as the response
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

module.exports = movies;
