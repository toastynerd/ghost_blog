/* jshint indent:2 */
var path = require('path'),
    config;

config = {
  production: {
    url: 'http://toasty-blog.herokuapp.com',
    mail: {},
    database: {
      client: 'pg',
      connection: {
        host: process.env.POSTGRES_URL,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_NAME,
        port: process.env.POSTGRES_PORT
      }
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  },
  development: {
    url: 'http://127.0.0.1:3000',
    database: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'toasty_blog',
        database: 'toast_blog_dev'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '3000'
    }
  }
};

module.exports = config;
