'use strict';

let SwaggerExpress = require('swagger-express-mw'),
    config = { appRoot: __dirname };

let app = require('express')();

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) throw err;

  swaggerExpress.register(app);

  app.listen(process.env.PORT || 10010);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('Open in your browser: http://127.0.0.1:' + (process.env.PORT || 10010) + '/hello?name=Scott');
  }
});


module.exports = app;