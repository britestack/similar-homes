const express = require('express');
const path = require('path');
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(express.json());

app.get('/api/homes', controllers.getAllHomes);
app.get('/api/homes/nearby', controllers.getNearbyHomes);
app.get('/api/homes/similar', controllers.getSimilarHomes);
app.patch('/api/homes/liked/:id', controllers.updateLiked);

app.listen(3000, () => {console.log('Listening on Port 3000'); });
