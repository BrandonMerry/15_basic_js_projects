
// traversing the dom -- moving up and down the dom tree
// this shows how to do it step by step for my reference 


// const btns = document.querySelectorAll('.question-btn');


// // forEach iterates over every button - use with querySelectorAll
// // set up the for each than create the function for the "1" button inside its function
// btns.forEach(function (btn){
//     btn.addEventListener("click", function(e){
//         //create a variable for the function that returns the parent
//         const question = e.currentTarget.parentElement.parentElement;
//        // this acts on the new variable and toggles the css class of show text 
//         question.classList.toggle("show-text");
//     });
// });



// parentElement - is a function in JS that lets you find the parent class 
// you use Console.log first to find out the parent class 
//then go up more classes to find the original parent
// this also works for sibling 





//using selectors inside the element
// this selects the articles instead of btns

const questions = document.querySelectorAll ('.question');

questions.forEach(function (ques) {
    //console.log('ques');
    const btn = ques.querySelector('.question-btn');
    // console.log(ques); --- do this to check if it works 
    btn.addEventListener('click', function(){

        //reference the bts to then mak it so you can only have one open at a time 
        // this is your first const 
        // item === ques but uses different name for clarity 
        // forEach is your loop 
        questions.forEach(function(item){
        //    !== means does not match
            if(item !== ques){
                item.classList.remove("show-text");
            }
        });

        //this ques references your article 
        //the button references the actual button that is clicked within the article 
        ques.classList.toggle("show-text");
    });
});