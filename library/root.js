const root = (request, response) => {
	response
		.status(200)
		.json('Hello from the City Weather Explorer API home route...');
};

module.exports = root;
