
var express = require('express');
var router = express.Router(); 
var Computer=require('../models/computermodel')

const fs = require('fs');
const util = require('util');
var path = require('path');

function walkSync(dir) {
    return fs.lstatSync(dir).isDirectory()
        ? fs.readdirSync(dir).map(f => walkSync(path.join(dir, f)))
        : dir;
}

///get all computers
router.get('/computers', function(req, res, next){
    Computer.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});


//add new computer
router.post('/computer',function(req,res,next){
    console.log(req.query.compName);
var com=new Computer({
    compName:req.body.compName,
    deptName:req.body.deptName,
    barId:req.body.barId
});
com.save(function(err,result){
    if(err){
       return res.status(500).json({
           message:'error while saving'
       });
    }
     res.status(201).json({
        message:'data saved successfully'
    });
});   
});


router.get('/lastfile', function(req, res, next){
    //console.log(req.query.name);
    var path='//'+req.query.name;
   // console.log(path);
    res.json(getNewestFileInarr(getFilesFromDir(path, [".xps"]))); 
}
);

function getNewestFileInarr(files) {
    //console.log("in serching new"+files.length)
    var newest = null,
  
    one_matched = 0,
    i

    for (i = 0; i < files.length; i++)
     {
      if (one_matched == 0) {
            newest = files[i];
       // console.log(newest);
        one_matched = 1;
            continue
        }
        //console.log(files[i]);
        f1_time = fs.statSync( files[i]).mtime.getTime()
        f2_time = fs.statSync( newest).mtime.getTime()
        if (f1_time > f2_time)
            newest = files[i]  
    }

if (newest != null){}
    return fs.statSync( newest).mtime;
return null
}


function getFilesFromDir(dir, fileTypes) {
var filesToReturn = [];
function walkDir(currentPath) {
  var files = fs.readdirSync(currentPath);
  for (var i in files) {
    var curFile = path.join(currentPath, files[i]);      
    if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
      filesToReturn.push(curFile.replace(dir, ''));
    } else if (fs.statSync(curFile).isDirectory()) {
     walkDir(curFile);
    }
  }
};
walkDir(dir);
//console.log(filesToReturn.length)
return filesToReturn; 
}


module.exports = router;
