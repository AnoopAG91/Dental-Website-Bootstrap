//--- header scroll js ----//

// Select the element with the class 'navbar' and store it in the variable 'nav'
let nav = document.querySelector('.navbar');

// Assign a function to the window's 'onscroll' event
window.onscroll = function() {
    // Check if the vertical scroll position of the document is greater than 100 pixels from the top
    if (document.documentElement.scrollTop > 100) {
        // If the condition is true, add the class 'header-scrolled' to the 'nav' element
        nav.classList.add('header-scrolled');
    } else {
        // If the condition is false (scroll position is less than or equal to 100 pixels), remove the class 'header-scrolled' from the 'nav' element
        nav.classList.remove('header-scrolled');
    }
}


//--- navbar collapse js ---//

// Get all navlinks
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Attach click event listener to each navlink
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    // Close the collapsed navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.classList.add('collapsed');
    navbarCollapse.classList.remove('show');
  });
});