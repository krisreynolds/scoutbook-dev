document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    if (link.hostname !== window.location.hostname && link.hostname !== '') {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });
});