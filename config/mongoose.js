// Load the module dependencies
const config = require('./config');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	
	//const db = mongoose.createConnection(config.db);
	const db = mongoose.connect(config.db,{useMongoClient:true});

	// Load the 'User' model 
	require('../app/models/user.server.model');
	//require('../app/models/article.server.model');
	require('../app/models/profile.server.model');

	// Return the Mongoose connection instance
	return db;
};