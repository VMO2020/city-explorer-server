// This library lets us access our .env file
require('dotenv').config();

// Express is a server library
const express = require('express');

// Initializes the express library
const app = express();

// MIDDLEWARE: library that determines who is allowed to speak to our server
const cors = require('cors');

// This setting says that everyone is allowed to speak to our server
app.use(cors());

// library functions
const weather = require('./library/weather');
const movies = require('./library/movies');
const root = require('./library/root');

// We are getting the port variable from the .env file.
const PORT = process.env.PORT || 8080;

// This is a route. if you turn the server on and go to http://localhost:8080
app.get('/', root);
app.get('/weather', weather);
app.get('/movies', movies);

// Run the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
