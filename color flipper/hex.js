//this array represents all the possible values that create a hex color 
// starts with a #, then a letter, then a number
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//targets your button
const btn = document.getElementById("btn");

//targets your color
const color = document.querySelector(".color"); 


btn.addEventListener("click", function(){
    //set equal to variable that holds the hashtag
    //use let because you will need to add to the string with a loop(6x) and const will give error 
    let hexColor = '#';
    //i starts at zero, runs 6 times, then adds ++ (one number to the string)
    for(let i = 0; i<6; i++){
       
       //this is a hard code to see if the code works 
       //+= means that you add to the string
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


//this function goes into the event listner to create the hex pattern
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}