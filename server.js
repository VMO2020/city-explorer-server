// This library lets us access our .env file
require('dotenv').config();

// Express is a server library
const express = require('express');

// Initializes the express library
const app = express();

// MIDDLEWARE: library that determines who is allowed to speak to our server
const cors = require('cors');

// This settting says that everyone is allowed to speak to our server
app.use(cors());

// We are getting the port variable from the .env file.
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

// This is a route. if you turn the server on and go to http://localhost:8080
app.get('/', (request, response) => {
	response
		.status(200)
		.json('Hello from the City Weather Explorer API home route...');
});

app.get('/weather', async (req, res) => {
	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided

		// Make the fetch request to the API
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
		);
		const data = await response.json();

		// Return the data as the response
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

app.get('/movies', async (req, res) => {
	// https://api.themoviedb.org/3/search/movie?api_key=be09a8ef06ffc31f28b16e326ab9c675&query=Paris&language=en&region=Paris

	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided

		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}&language=en&region=${city}`
		);
		const data = await response.json();

		// Return the data as the response
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

// Run the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
