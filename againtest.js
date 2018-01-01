var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var request = require('request');

request.post(
    'http://misrusachd.in/api/baselineapi/selectformongodb.php',{},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("bd1").insertOne(JSON.parse(body), function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
        }
    }
);