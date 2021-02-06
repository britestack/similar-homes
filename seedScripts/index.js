const faker = require('faker');
const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  user: 'bmalamudroam',
  host: 'localhost',
  database: 'carouselhomes',
  password: '',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log('ERROR connecting to db: ', err));

module.exports.connection = client;
