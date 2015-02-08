$(document).ready(function() {

  // Set equal height
  $('.content-container').height($('.nav').height());

  // Class name toggle utility method
  function toggleClass(element, classname) {
    if (element.classList.contains(classname)) {
      element.classList.remove(classname);
    } else {
      element.classList.add(classname);
    }
  }

  // Show/hide container.
  $('.content-nav').click(function() {
    var action = this.getAttribute('action');
    if (action == 'form') {
      // TODO(kreeger): Handle this in the future.
    } else {
      $('.content-nav').toggleClass('hidden');
      $('.content-container').toggleClass('hidden');
      $('.content-container .content').html('');

      $.get(action, function(result) {
        console.log('result', result);
        $('.content-container .content').html(result);
      });
    }
  });

  // Content back button
  $('.back-button').click(function() {
    $('.content-nav').toggleClass('hidden');
    $('.content-container').toggleClass('hidden');
  });

});
