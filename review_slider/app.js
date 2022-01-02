// local reviews data
// array of objects - each object is a different person
// not yet learned ajax and http request 
const reviews = [
    {
    
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// get access to all of the elements that you need to access to pull in new data

// this selects each of the main elements you need 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// this section selects your buttons 
// use ._____ for class and # for id
const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//calls functions for your starting items
// start with 0 as a hard code way to see that it works 
// let currentItem = 0;

let currentItem = 0;


// this is a bad way to do this cod
// dom listing item for loading the item in the array 
window.addEventListener('DOMContentLoaded', function(){
   // always console.log to make sure the function works in the most simple state
    // console.log("info has arrived")
    showPerson();
});

// function which connects items to Window event listener - and simplifies it 
function showPerson(){
    //assign the load to an item in the array 
    const item = reviews[currentItem];

    //assign this to the item to make it load faster and simplicity
    img.src = item.img;

    //use textContent for this because you want to see what is written
    //id author connects to the name section of the array above
    author.textContent = item.name;

    // links to ITEM in the array named job
    job.textContent = item.job;

    info.textContent = item.text
}


// event listener for the click to the next-button (event listener click right)

nxtBtn.addEventListener("click", function(){
    currentItem ++;
    //restarts the scroll again 
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// event listener for the click to the prev-button (event listener click left)

prevBtn.addEventListener("click" , function(){
    currentItem --;
    //goes in loop counter clockwise to #4
    if (currentItem < 0){
        currentItem = reviews.length -1; 
    }
    showPerson();
});

//click event that selects a random item from the Array - math floor to make sure that the selection is a whole number 
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() *reviews.length);
    showPerson();
});