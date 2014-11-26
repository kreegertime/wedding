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
    var content = [
      {
        title: 'RSVP',
        copy: 'rsvp.html'
      },
      {
        title: 'Time & Date',
        copy: 'time_date.html'
      },
      {
        title: 'Accommodations',
        copy: 'accommodations.html'
      },
      {
        title: 'Registry',
        copy: 'registry.html'
      },
      {
        title: 'Things to do in Minnesota',
        copy: 'things_to_do.html'
      },
      {
        title: 'Contact',
        copy: 'contact.html'
      }
    ];
    reply.view('index', {
      content: content
    });
  }
});

server.start(function() {
  console.log('--------------------');
  console.log('Server running at:', server.info.uri);
  console.log('--------------------');
});
