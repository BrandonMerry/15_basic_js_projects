

const navToggle = document.querySelector('.sidebar-toggle');
const navClose = document.querySelector('.close-btn');
const navBar = document.querySelector('.sidebar');

// the reason for the navBar const is so that both other constants can act upon it in their functions 
// 'show-sidebar' is  a property attached to the .sidebar class which has become navBar  

// this function causes the sidebar to appear from the left when the toggle button is clicked 
navToggle.addEventListener('click', function(){
    navBar.classList.toggle("show-sidebar");
});


// this function causes the sidebar to vanish when the "X" or close button is removed 
navClose.addEventListener('click', function(){
    navBar.classList.remove("show-sidebar");
})