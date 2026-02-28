// Get the button: Back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  
}



function toggleParagraph(elementId) {
  var paragraph = document.getElementById(elementId);
  if (!paragraph) return; // element not found — fail silently

  var computed = window.getComputedStyle(paragraph).display;
  if (computed === "none") {
    // restore previous inline display if saved, otherwise use original computed fallback
    paragraph.style.display = paragraph.dataset._origDisplay || "";
  } else {
    // save current inline/computed display so we can restore it
    paragraph.dataset._origDisplay = paragraph.style.display || computed;
    paragraph.style.display = "none";
  }
}