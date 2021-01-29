const express = require('express');
const path = require('path');
const cors = require('cors');
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(cors());
app.use(express.json());

app.get('/api/homes', controllers.getAllHomes);
app.get('/api/homes/nearby', controllers.getNearbyHomes);
app.get('/api/homes/similar', controllers.getSimilarHomes);
app.patch('/api/homes/liked/:id', controllers.updateLiked);

app.listen(3001, () => { console.log('Listening on Port 3001'); });
