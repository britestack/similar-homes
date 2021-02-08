const express = require('express');
const path = require('path');
const cors = require('cors');
// const compression = require('compression');
const controller = require('./controller.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'dist')));
// app.use(compression());
app.use(cors());
app.use(express.json());

// users
app.get('/api/users/:userid', controller.getUserInfo);
app.post('/api/users', controller.addUser);
app.patch('/api/users/:userid', controller.updateUserInfo);
app.delete('/api/users/:userid', controller.removeUser);
app.patch('/api/userSaves', controller.updateUserSave);

// homes
app.get('/api/homes/:homeid', controller.getHomeInfo);
app.get('/api/homes/new/:homeid', controller.getNewHomes);
app.get('/api/homes/similar/:homeid', controller.getSimilarHomes);
app.post('/api/homes', controller.addHome);
app.patch('/api/homes/:homeid', controller.updateHomeInfo);
app.delete('/api/homes/:homeid', controller.removeHome);

app.listen(3001, () => { console.log('Listening on Port 3001'); });
