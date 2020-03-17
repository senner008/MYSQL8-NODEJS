'use strict';
const express = require('express');
require('dotenv').config({ path: '.env' });

const app = express()
const port = 3000

const mysqlx = require('@mysql/xdevapi');
const options = { user: process.env.DB_USER, password: process.env.DB_PASSWORD, port: DB_PORT };

(async function () {
  let session;

  try {
    session = await mysqlx.getSession(options);
    session
        .sql("USE test")
        .execute();
    session
        .sql('CREATE TABLE foo (bar VARCHAR(3))')
        .execute();

  } catch (err) {
    console.error(err.message);
  } finally {
    session && session.close();
  }
})();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))