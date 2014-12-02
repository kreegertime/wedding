$(document).ready(function() {

  // Class name toggle utility method
  function toggleClass(element, classname) {
    if (element.classList.contains(classname)) {
      element.classList.remove(classname);
    } else {
      element.classList.add(classname);
    }
  }

  // Show/hide container.
  $('.content-container').click(function() {
    toggleClass(this.querySelector('.content-copy'), 'hide-xs');
  });

});
