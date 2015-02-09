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


/** Site content layout */
var Content = {
  Root: {
    title: 'Jamie & Nick\'s Wedding Site',
    layout: '/layout_navigation',
    path: '/'
  },
  Story: {
    title: 'Our Story',
    layout: '/layout_story',
    path: '/story'
  },
  WeddingParty: {
    title: 'Wedding Party',
    layout: '/layout_wedding_party',
    path: '/weddingparty'
  },
  DateLocation: {
    title: 'Schedule',
    layout: '/layout_time_date',
    path: '/schedule'
  },
  Accommodations: {
    title: 'Accommodations',
    layout: '/layout_accommodations',
    path: '/accommodations'
  },
  RSVP: {
    title: 'RSVP',
    layout: '/layout_rsvp',
    path: '/rsvp'
  },
  Registry: {
    title: 'Registry',
    layout: '/layout_registry',
    path: '/registry'
  },
  ThingsToDo: {
    title: 'Things to do in Minnesota',
    layout: '/layout_things_to_do',
    path: '/thingstodo'
  },
  OtherInformation: {
    title: 'Other Information',
    layout: '/layout_other_information',
    path: '/otherinfo'
  },
  Contact: {
    title: 'Contact Information',
    layout: '/layout_contact_info',
    path: '/contact'
  }
};


/** Navigation Content */
var ContentArray = Object.keys(Content).map(function(k) { return Content[k]; });
ContentArray.splice(0, 1); // Remove the root nav from the navigation menu.


/** Create paths for each content object */
Object.keys(Content).forEach(function(key) {
  var content = Content[key];

  // Create a route for the layout.
  server.route({
    method: 'GET',
    path: content.layout,
    handler: function(request, reply) {
      if (content.path == '/') {
        replyObj = { content: ContentArray };
      } else {
        replyObj = content;
      }
      reply.view(content.layout.replace('/layout_', ''), replyObj);
    }
  });
  // Create another route for the URL path.
  server.route({
    method: 'GET',
    path: content.path,
    handler: function(request, reply) {
      reply.view('index', content);
    }
  });
});


/** static content */
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


/** Run the server! */
server.start(function() {
  console.log('============================');
  console.log('Server running at:', server.info.uri);
  console.log('============================');
});
