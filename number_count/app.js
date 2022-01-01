//set intitial count to zero
let count = 0;

 //select value and btn 

 //use the # to select and id 
 // use selector because of the singular value
 const value = document.querySelector('#value');

 //use selectorAll because you can select all with the class of btn
 // .btn is the selector for class
 const btns = document.querySelectorAll(".btn");

// you will see that this gives you a node list
// with node list, you can use 'for each' if not, you will need to transform to an array 
//  console.log(btns);


//the function is a call back function 
//this will correlate with the event listner above
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        //lets you check that you can click on each btn and tells classes
        // console.log(e.currentTarget)

        //at each click, it saves the classes of the btn variable
        //that is the command e.currentTarge
        const styles = e.currentTarget.classList;

        //this is the if else part to show the command what to do
        if(styles.contains('dec')){
            // -- decreases count by 1 for each click
            count--;
        }
        //do else if as the second use for inc to ++ (add) to count
        else if(styles.contains('inc')){
            count ++;
        }
        // this is a shortcut because you know there are only 3 btns
        else {
            count = 0;
        }

        //change number color based on value - only use multiple 'if' statements 
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = 'black';
        }


        //this is the way of changing the number on the screen
        value.textContent = count;
    });
});