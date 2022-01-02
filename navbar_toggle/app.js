// list of methods you can use for the classList call back in console.log

// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// creates an item navToggle which is linked to the class of nav-toggle
const navToggle = document.querySelector(".nav-toggle");
//creates a constant item navLinks which is linked to the class of links
const navLinks = document.querySelector(".links");


// because you have a const"nav.toggle" and "navLinks", you can now have an event listener 


navToggle.addEventListener('click', function(){
    // classList - shows/gets all classes that an element has 
    // console.log(navLinks.classList);
   
    //this lets you use the method contains on classList and lets you check for a specific class - returns "true" / "false"
    // console.log(navLinks.classList.contains());

   
    //this allows you to click the button with the class of "nav-toggle" and then add and remove the "show-links" property in css
    // this is the old school way of "add" && "remove"
    // if(navLinks.classList.contains("show-links")){
    //     navLinks.classList.remove("show-links");
    // }
    // else{
    //     navLinks.classList.add("show-link");
    // }

    // new method for using the toggle method -- clean and easy 
    navLinks.classList.toggle("show-links");
});