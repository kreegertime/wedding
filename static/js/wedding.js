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
 * Handles history events and updates the window URL bar accordingly.
 */
Wedding.handlePopState = function(event) {
  if (event.state) {
    Wedding.load(event.state.title, event.state.layout, event.state.path);
  } else {
    window.location.reload();
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
    window.location = '/';  // TODO(kreeger): Make this not reload.
  });
  // Content back button
  $('.back-button').click(function() {
    window.location = '/';  // TODO(kreeger): Make this not reload.
  });
});
