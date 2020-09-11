(function() {
  'use strict';

  var http = require('http'),
    express = require('express'), //express
    path = require('path'), //untuk path folder
    // favicon = require('serve-favicon'), //untuk favicon
    // morgan = require('morgan'), //untuk log aplikasi
    // methodOverride = require('method-override'),
    session = require('express-session'), //session
    bodyParser = require('body-parser'), //handle rest
    errorhandler = require('errorhandler'), //error
    // redis = require('redis');
    // redisStore = require('connect-redis')(session);
    // client  = redis.createClient();
    // logger = require('./utils/logger'), //loging
    mongoose = require('mongoose'), //mongoose
    cookieParser = require('cookie-parser'),
    BukuRoute = require('./routes/BukuRoute'),
    UserRoute = require('./routes/UserRoute'),
    AdminRoute = require('./routes/AdminRoute'),
    Login = require('./routes/login'),
    app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(cookieParser());
  // app.use(favicon(__dirname + '/public/favicon.ico'));
  // app.use(morgan('combined', {
  //   stream: logger.stream
  // }));
  // app.use(methodOverride());
  app.use(session({
    // store: new redisStore({ 
    //   host: 'localhost', 
    //   port: 6379, 
    //   client: client,
    //   ttl : 260
    // }),
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
  }));

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'bower_components')));

  app.use('/', BukuRoute);
  app.use('/', UserRoute);
  app.use('/', Login);
  app.use('/', AdminRoute);

  mongoose.connect('mongodb://localhost/bukudb', function(err, res) {
    if (err) {
      // return logger.error('koneksi mongodb gagal', err);
    } else {
      // return logger.info('koneksi mongodb berhasil');
    }
  });

  if ('development' === app.get('env')) {
    app.use(errorhandler());
  }

  app.use(function(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    // handle CSRF token errors here
    res.status(403)
    res.send('csrf token tidak tersedia bung');
  });

  var server = http.createServer(app);
  server.listen(app.get('port'), function() {
    return console.log('Server jalan pada port ' + app.get('port'));
  });

}).call(this);
