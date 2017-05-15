var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/furniture'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/furniture'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/furniture'
  }
};

module.exports = config[env];
