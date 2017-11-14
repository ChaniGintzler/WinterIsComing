const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');
const multer = require('multer')
const fs=require("fs")
var AWS = require('aws-sdk');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new profiles
exports.create = function(req, res) {
    console.log("server createdd")
    upLoadPic( req, res, SaveNew);
};

//create new profile
function SaveNew(req, res, path)
{
    const profile = new Profile(req.body);
    profile.image=path;
    profile.creator = req.user;

    profile.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the profile 
            res.json(profile);
        }
    });
}

//update existing profile
function save (req, res, path)
{
    const profile = req.profile;
    
        // Update the profile fields
        profile.lastName = req.body.lastName;
        profile.firstName = req.body.firstName;
        profile.age = req.body.age;
        profile.hobies = req.body.hobies;
        profile.description = req.body.description;
        profile.image=path;
        // Try saving the updated profile
        profile.save((err) => {
            if (err) {
                // If an error occurs send the error message
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                // Send a JSON representation of the profile 
                res.json(profile);
            }
        });
}
// Create a new controller method that retrieves a list of profiles
exports.list = function(req, res) {
    console.log("pfofile list aaa")
    // Use the model 'find' method to get a list of profiles
    // Profile.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, profiles) => {
    //     if (err) {
    //         // If an error occurs send the error message
    //         return res.status(400).send({
    //             message: getErrorMessage(err)
    //         });
    //     } else {
    //         // Send a JSON representation of the profile 
    //         res.json(profiles);
    //     }
    // });
    ///get all computers

    Profile.find(function(err, profiles){
        if(err){
            console.log(err);
            res.send(err);
        }
       // console.log(profiles);
        res.json(profiles);
    });

};

// Create a new controller method that returns an existing profile
exports.read = function(req, res) {
    console.log("req.profile")
    console.log(req.profile)
   res.json(req.profile);


};

// Create a new controller method that updates an existing profile
exports.update = function(req, res) {
    // Get the profile from the 'request' object
    console.log("server update")
    const profile = req.profile;
    
        // Update the profile fields
        profile.lastName = req.body.lastName;
        profile.firstName = req.body.firstName;
        profile.age = req.body.age;
        profile.hobies = req.body.hobies;
        profile.description = req.body.description;
      //  profile.image=path;
        // Try saving the updated profile
        profile.save((err) => {
            if (err) {
                // If an error occurs send the error message
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                // Send a JSON representation of the profile 
                res.json(profile);
            }
        });
};

// Create a new controller method that delete an existing profile
exports.delete = function(req, res) {
    // Get the profile from the 'request' object
    console.log("delete on server")
    const profile = req.profile;

    // Use the model 'remove' method to delete the profile
    profile.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            console.log("error delete on server")
    
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the profile 
           console.log("success delete on server")
    
            res.json(profile);
        }
    });
};

// Create a new controller middleware that retrieves a single existing profile
exports.profileByID = function(req, res, next, id) {
    console.log("find by id ")
    // Use the model 'findById' method to find a single profile 
    Profile.findById(id).populate('creator', 'firstName lastName fullName').exec((err, profile) => {
        if (err) return next(err);
        if (!profile) return next(new Error('Failed to load profile ' + id));

        // If an profile is found use the 'request' object to pass it to the next middleware
        req.profile = profile;

        // Call the next middleware
        next();
    });
};

function deltePic(key, callback)
{
    AWS.config.loadFromPath('./config/i.e.config.json');
    var s3 = new AWS.S3();
    s3.deleteObject({
      Bucket: 'winteriscomingchani',
      Key: key
    },function (err,data){})
}
 function upLoadPic(req,res, callback) 
{
    console.log(req.body.path);
    //console.log(res);
    console.log("on upLoad pic")
    AWS.config.loadFromPath('./config/i.e.config.json');
    var s3 = new AWS.S3();
    var bodystream = fs.createReadStream("c:\Welcome Scan.jpg");
    var params = {
            'Bucket': 'winteriscomingchani',
            'Key': 'uploads/images/' + "Welcome Scan.jpg",
            'Body': bodystream,
            'ContentEncoding': 'base64', 
            'Content-Type ': 'image/jpeg',
            'ACL': 'public-read'
             };
       return s3.upload(params, function(err, data){
             if(err)
                {
                    console.log('Error s3 upload====', err);
                    return null;
                }
                else
                    {
                       console.log('success s3 upload====', data.Location);
                       callback(req, res,data.Location);
                    }
         })
// const params = { 
        //     Bucket: 'winteriscomingchani', 
        //     Key: 'Welcome Scan.jpg', 
        //     ACL: 'public-read',
        //     Body:bodystream
        // };
        //      s3.putObject(params, function (err, data) {
        //         if (err) {
        //             console.log("Error uploading image: ", err);
        //           //  callback(err, null)
        //         } else {
        //             console.log("Successfully uploaded image on S3", data);
        //            // callback(null, data)
        //         }
        //     })  
    // var urlParams = {Bucket: 'winteriscomingchani', Key: 'Welcome Scan.jpg'};
    // s3Bucket.getSignedUrl('getObject', urlParams, function(err, url){
    //   console.log('the url of the image is', url);
    // })
};