$(document).ready(function() {
  var contentContainer = $('.content-container');
  contentContainer.find('.content-title').click(function() {
    var copy = contentContainer.find('.content-copy');
    if (copy.hasClass('hide-xs')) {
      copy.removeClass('hide-xs');
    } else {
      copy.addClass('hide-xs');
    }
  });
});
