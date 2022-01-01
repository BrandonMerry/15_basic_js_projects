// remember that all commands should in with a ; 
//semicolon's make commands work 


//a specific array of colors for the basic color selection
const colors = ["green","red","rgba(133,122,200)",
"#f15025"];

//targets your button
const btn = document.getElementById("btn");

//targets your color
const color = document.querySelector(".color");



//this function gets a random number from the color array above 
//colors.length tells the function to stop counting at the end of this array 
function getRandomNumber (){
    return Math.floor(Math.random() * colors.length);
}


//thi function listens for a click event
btn.addEventListener('click', function(){
    // // manually select color from cont colors (the array) - get ran num between 0-3
    // const randomNumber = 2;

    //const calls the function above to get a random number
    const randomNumber = getRandomNumber();

    //this selects the body style of background color - it uses the random number generated from above to create the style 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

