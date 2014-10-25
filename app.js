var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server(3000);

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index');
  }
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
