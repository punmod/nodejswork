var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fundtracker";
var request = require('request');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: "Park Lane 38" };
  db.collection("Completedata").find().toArray(function(err, result) {
    if (err) throw err;
    for(var i=0; i<result.length;i++)
    {
        console.log(result[i].data.json.instituteId.name);
              totalexp=0;
              totalrealexp=0;
        for(var j=0; j<(result[i].data.json.projects).length;j++)
        {
               for(var k=0;k<(result[i].data.json.projects[j].projectExpenses).length;k++)
                 {
                  totalexp = totalexp + (parseInt(result[i].data.json.projects[j].projectExpenses[k].amount)||0);
                          for(var l=0; l<(result[i].data.json.projects[j].projectExpenses[k].institutetoVendors).length;l++)
                          totalrealexp=totalrealexp + (parseInt(result[i].data.json.projects[j].projectExpenses[k].institutetoVendors[l].amount)||0);
                }
        
        }  

        var options = {
            url: 'http://misrusachd.in/usersc/fundatlas/updatemapdata.php',
            method: 'POST',
        
            form: {'collegename':result[i].data.json.instituteId.name, 'totalexp': this.totalrealexp}
        }
        
        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }else{console.log(response.statusMessage);}
        })
        console.log("Total Expenses mentioned are:" + totalexp); 
        console.log("Total of real expenditure is:" + totalrealexp);
    }
    
    
    db.close();
  });
});

