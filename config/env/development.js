// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/mean-development',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: 'Facebook Application ID',
		clientSecret: 'Facebook Application Secret',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '2526072673-6147igth4m16pj6dk0or50bp9s9r84jb.apps.googleusercontent.com',
		clientSecret: 'Ul-mnKju_H-E0YhIjbGSl9gC',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};