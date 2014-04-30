'use strict';

var path = require('path'),
    config;

config = {
  production: {
    url: 'http://toasty_blog.herokuapp.com',
    mail: {},
    database: {
      client: 'postgres',
      connection: {
        host: process.env.DATABASE_URL,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT
      }
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  },
  development: {
    url: 'http://localhost:3000'
  },
  database: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'content/data/ghost-dev.db')
    },
    debug: false
  },
  server: {
    host: '127.0.0.1',
    port: '3000'
  },
  paths: {
    contentPath: path.join(__dirname, '/content/')
  }
}

module.exports = config;
