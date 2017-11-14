// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');

// var index = require('./app/routes/index');
// var tasks = require('./app/routes/tasks');
// var computers = require('./app/routes/computers');
// var users = require('./app/routes/users.server.routes')(app);
// var users = require('./app/routes/profiles.server.routes')(app);


// var mongoose=require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('localhost:27017/Winter');


// var port = 3000;

// var app = express();

// //View Engine
// app.set('views', path.join(__dirname, '/app/views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));

// // Body Parser MW
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', index);
// app.use('/api', tasks);
// app.use('/app', computers);

// app.listen(port, function(){
//     console.log('Server started on port '+port);
// });


// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress(db);

// Configure the Passport middleware
const passport = configurePassport();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;