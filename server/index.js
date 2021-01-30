const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const controllers = require('./controllers.js');

const app = express();

app.use('/:id', express.static(path.join(__dirname, '../client', 'dist')));
app.use(compression());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.redirect('/1'); });
app.get('/api/homes', controllers.getAllHomes);
app.get('/api/homes/nearby/:id', controllers.getNearbyHomes);
app.get('/api/homes/similar/:id', controllers.getSimilarHomes);
app.patch('/api/homes/liked/:id', controllers.updateLiked);

app.listen(3001, () => { console.log('Listening on Port 3001'); });
