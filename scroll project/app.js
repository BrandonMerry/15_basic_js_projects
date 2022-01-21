// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************ - so you dont need to update manually 
// this const selects the html with an ID of 'date
const date =document.getElementById('date');
// innerHTML modifies the contents 
// getFullYear is a js function to replace the date
date.innerHTML = new Date().getFullYear();

// ********** close links ************
// this functions on the navbar and changes to the icon when we reach a specific px width
// query selector selects by a class -- for example 'class="nav-toggle"' from the btn
const navBtn = document.querySelector('.nav-toggle');
// this is the div where the links sit in
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// this is an event listener - with a  
// this can be a downside in a dynamic setup where number of links changes 
navBtn.addEventListener("click",function(){
    // links-container css has no height or overflow normally
    // this event adds a class="show-links" to the navBtn 
    // use for static data 
    // **********
    // linksContainer.classList.toggle("show-links"); 
    // **********
    // use this for dynamic data -- view notes at the top of page
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // now calls on the links height and calculates automatically 
    const linksHeight = links.getBoundingClientRect().height;


    // this statement is used to add height when links are close  - based on click event above 
    if (containerHeight === 0){
        // uses template literal to add to the variable 
        linksContainer.style.height = `${linksHeight}px`;
    }
    // else says if they have height, remove them -- all based on the click event above 
    else{
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
// this decides to make the navbar shown as your scroll down the page 
// read notes above for what is pageYOffset
// creates a new variable by selecting an id
const navbar = document.getElementById("nav");
// creates a const by selecting a class
const topLink = document.querySelector(".top-link");

 window.addEventListener("scroll", function () {
    //  creates new consts inside the function
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        // this adds a classlist to the const navbar
      navbar.classList.add("fixed-nav");
    } else {
        // removes the class list 
      navbar.classList.remove("fixed-nav");
    }

    //this tells when to show the fixed navbar 

    if(scrollHeight > 400){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }


});




// ********** smooth scroll ************
// select links