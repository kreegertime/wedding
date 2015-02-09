var Wedding = {};

/**
 * Handles loading content for the site.
 */
Wedding.load = function(title, layout, path) {
  $('.content-container .content').html('');

  $.get(layout, function(result) {
    if (path == '/') {
      $('.back-button').addClass('hidden');
    } else {
      $('.back-button').removeClass('hidden');
    }
    $('.content-container .content').html(result);

    window.history.pushState({
       title: title,
       layout: layout,
       path: path
    }, title, path);
  });
};


/**
 * Handles loading the home link.
 */
Wedding.loadHome = function() {
  Wedding.load('', '/layout_navigation', '/');
};

/**
 * Handles history events and updates the window URL bar accordingly.
 */
Wedding.handlePopState = function(event) {
  if (event.state) {
    Wedding.load(event.state.title, event.state.layout, event.state.path);
  } else {
    Wedding.loadHome();
  }
};


/**
 * Document click handling
 */
$(document).ready(function() {
  // Assign window popstate handling
  window.onpopstate = Wedding.handlePopState;

  // Set equal height
  $('.content-container').height($('.nav').height());

  // Header clickable
  $('.header-clickable').click(function() {
    Wedding.loadHome();
  });
  // Content back button
  $('.back-button').click(function() {
    Wedding.loadHome();
  });
});
