var MongoClient = require('mongodb').MongoClient;

// Connect to the db
             



var request = require('request');

request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591b422e64cb95337dc36d59"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);       
        });db.close();
    });
        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d28efc3ae8d6099b535d5"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        });db.close();
    });
        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d37afc3ae8d6099b53c4b"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        });db.close();
    });
        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591c419064cb95337dc39a82"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body); 
        
        });db.close();
        
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591b46e364cb95337dc36dcc"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        }); db.close();
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d2dc0c3ae8d6099b5377b"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body); 
        
        });db.close();
        
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d3afac3ae8d6099b53d8b"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        }); db.close();
        
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d3a3fc3ae8d6099b53d59"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        }); db.close();
        
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d2c7cc3ae8d6099b53750"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        }); db.close();
        
    });

        }
    }
);
request.post(
    'https://rusamhrd.tiss.edu/api/Form/getOne ',
    { json: {"_id":"591d34a9c3ae8d6099b53b60"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {MongoClient.connect("mongodb://localhost:27017/fundtracker", function (err, db) {
    
    db.collection('Completedata', function (err, collection) {
        
        collection.insert(body);
        
        
        }); db.close();
        
    });

        }
    }
);
