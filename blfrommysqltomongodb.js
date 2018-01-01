var MongoClient = require('mongodb').MongoClient;

// Connect to the db
             



var request = require('request');

request.post(
    'http://misrusachd.in/api/baselineapi/selectforreport.php',{},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            
MongoClient.connect("mongodb://localhost:27017/baselinedata", function (err, db) {
   
    db.collection("mainresult", function (err, collection) {
       // for (let entry of body) {
         //console.log(entry);
        
         if(err)
         {throw err;}
        else 
        {
        body =JSON.parse(body);
        for (i = 0; i < body.length; i++) {
          
            collegename=body[i].company; 
            parameter=body[i].parameter;
            collection.insert({ collegename,parameter });
        
        if (body[i].paramid==1)
            collection.update({collegename,parameter},{collegename,parameter,session:{s1617 : {stream :{arts:{nostudents:body[i].pha}}}}});
               
                                
        } 
       
}
        //}    
    });
        db.close();
    });
        }
    }
);