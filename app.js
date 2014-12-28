var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server('0.0.0.0', +process.env.PORT || 3000);

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates'),
  partialsPath: Path.join(__dirname, 'templates')
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
      // {
      //   title: 'RSVP',
      //   action: 'rsvp.html'  // Needs to be a google form.
      // },
      {
        title: 'Time, Date, & Location',
        action: 'time_date'
      },
      {
        title: 'Wedding Party',
        action: 'wedding_party.html'
      },
      {
        title: 'Accommodations',
        action: 'accommodations.html'
      },
      {
        title: 'Registry',
        action: 'registry.html'
      },
      {
        title: 'Things to do in Minnesota',
        action: 'things_to_do.html'
      },
      {
        title: 'Contact Information',
        action: 'contact.html'
      }
    ];
    reply.view('index', {
      asdf: 'foo',
      content: content
    });
  }
});

// Time, Date, & Location
server.route({
  method: 'GET',
  path: '/time_date',
  handler: function(request, reply) {
    reply.view('time_date');
  }
});


server.start(function() {
  console.log('--------------------');
  console.log('Server running at:', server.info.uri);
  console.log('--------------------');
});
