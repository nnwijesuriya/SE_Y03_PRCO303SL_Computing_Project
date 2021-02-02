const express = require('express');
const bodyparser = require ('body-parser');
const admin = require('firebase-admin');

const app = express();

var serviceAccount = require("../Backend/servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hris-project-9b070.firebaseio.com"
});

app.use(bodyparser.json());

app.use((req,res,next) =>
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post('/add-person/form',(req, res, next) => {
const post = req.body;
admin.auth().createUser({
    email: post.Eemail, 
    password: post.password
}).then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
    res.status(201).json({ 
       message: userRecord.uid.toString()
    });
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
});

module.exports = app;