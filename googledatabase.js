
var admin = require("firebase-admin");

var serviceAccount = require("C:\firebaseprojects\keys\database-6919a-firebase-adminsdk-0odu7-9ca7b0df39.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://database-6919a.firebaseio.com"
});
