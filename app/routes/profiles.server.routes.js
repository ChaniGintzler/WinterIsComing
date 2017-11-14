// const users = require('../../app/controllers/users.server.controller');
// const profiles = require('../../app/controllers/profiles.server.controller');

// module.exports = function(app) {
  
//     app.route('/api/profiles')
//     .post(users.requiresLogin, profiles.create);
    
//    app.route('/api/profiless')
//    .get( profiles.list);
//    app.route('/aaa')
//    .get( profiles.list);

   //app.param('profileId', profiles.profileByID);
        //.put(users.requiresLogin, profiles.hasAuthorization, profiles.update)
       // .delete(users.requiresLogin, profiles.hasAuthorization, profiles.delete);
        
    //	app.route('/api/profiles/uploadPics').post(profiles.uploadProfilePicture);

//};

//!!!!!!!!!!!!!!!!הקובץ לא עובד !!! הראוטס נמצאים בקובץ של יוזרס

// Load the module dependencies

const profiles = require('../../app/controllers/profiles.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// app.route('/api/profiles')
	//  .post(users.requiresLogin, profiles.create);
	 
	// app.route('/api/profiles')
	// .get( profiles.list);
	
	app.route('/api/profiless')
	.get( profiles.list);
};
