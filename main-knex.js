'use strict';
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config({ path: '.env' });

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
    });
  
    knex.raw("SELECT VERSION()")
    .then(version => console.log(version));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




