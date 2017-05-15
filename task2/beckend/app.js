let express = require('express'),
  config = require('./config/config'),
  db = require('./app/models'),
  bodyParser = require('body-parser');
  cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

module.exports = require('./config/express')(app, config);

app.use(function (req, res, next) {
    console.log('qwe');
    let err = new Error('Not Found1');
    err.status = 404;
    next(err);
});


app.use((err, req, res, next)=> {
    console.log('qwe');
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err.errors,
        title: 'error'
    });
});

db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
      app.listen(config.port, function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });

