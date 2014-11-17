var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server('0.0.0.0', +process.env.PORT || 3000);

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});


server.route({
  method: 'GET',
  path: '/css/{param*}',
  handler: {
    directory: {
      path: 'static/css'
    }
  }
});

server.route({
  method: 'GET',
  path: '/js/{param*}',
  handler: {
    directory: {
      path: 'static/js'
    }
  }
});

server.route({
  method: 'GET',
  path: '/fonts/{param*}',
  handler: {
    directory: {
      path: 'static/fonts'
    }
  }
});

server.route({
  method: 'GET',
  path: '/images/{param*}',
  handler: {
    directory: {
      path: 'static/images'
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index');
  }
});

server.start(function() {
  console.log('--------------------');
  console.log('Server running at:', server.info.uri);
  console.log('--------------------');
});
