var MongoClient = require('mongodb').MongoClient;

// Connect to the db
             



var request = require('request');


            
MongoClient.connect("mongodb://localhost:27017/baselinedata", function (err, db) {
   
    db.collection("mainresult", function (err, collection) {
       // for (let entry of body) {
         //console.log(entry);
         collection.find().toArray(function(err, items) {
            for(i in items)
            console.log(items[i].collegename);
            db.close();
             });
            });
        });