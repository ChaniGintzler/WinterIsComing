// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    description:{type:String},
    hobbies:{type:String},
    age:{type:Number},
    height:{type:Number},
    image :{type:String},
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

ProfileSchema.index({location:1});

// Create the 'Article' model out of the 'ProfileSchema'
mongoose.model('Profile', ProfileSchema);