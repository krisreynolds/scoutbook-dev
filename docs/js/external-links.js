document.addEventListener("DOMContentLoaded", function() {
  // Select all anchor (link) tags on the page
  var links = document.querySelectorAll('a');
  
  links.forEach(function(link) {
    // Check if the link points to an external domain and is not a relative path/anchor link
    if (link.hostname !== window.location.hostname && link.hostname !== '') {
      
      // Open the external link in a new tab
      link.setAttribute('target', '_blank');
      
      // Security best practice: Prevent the new page from accessing the window object of the original page
      link.setAttribute('rel', 'noopener');
    }
  });
});