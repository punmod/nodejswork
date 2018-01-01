var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/baselinedata";
var request = require('request');
var newkeys =[];
var theirvalues=[];
var combined =[];
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("mainresult").find().toArray(function(err, result) {
    if (err) throw err;
    for(var i=0; i<result.length;++i)
    {  
                var obj = {};
               Object.keys(result[i]).map(function(key) {
                if(result[i][key]!=="") 
                {//console.log(key+"="+result[i][key]);
                      newkeys.push(key);
                      theirvalues.push(result[i][key]);
                     obj[newkeys[i]] = theirvalues[i];
                }
              });
              combined.push(obj);
             
              console.log(combined[i]);
        }  
}
);
});   
 

