// dependencies
const express = require('express');
const admin = require('firebase-admin');

// config - express 
const app = express()

// Config Firebase
const serviceAccount = require('./firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// endpoint - posts
app.get('/posts', (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  const posts = []

  db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
    snapshot.forEach((doc) => {
      posts.push(doc.data())
    });
    response.send(posts)
  })
})

// listen
app.listen(process.env.PORT || 3000)
