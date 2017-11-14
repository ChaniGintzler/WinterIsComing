var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    compName:{type:String, required:true},
    deptName :{type:String, required:false},
    lastDate :{type:Date, required:false},
    barId :{type:Number, required:false},
    isOk :{type:String, required:false}
});

module.exports=mongoose.model('Computer',schema);