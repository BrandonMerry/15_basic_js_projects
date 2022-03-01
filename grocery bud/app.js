// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const from = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submtBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option -- variables that can be changed 

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
from.addEventListener('submit', addItem)

// ****** FUNCTIONS **********

// add event object (e) because normally it should be submited to a database 
function addItem(e){
    e.preventDefault();
    // now traget  input of grocery and give it a value
    const value = grocery.value 
    // this is a way to give each item a new id - not normal way for serious projects 
    // new date(), getTime() are in day / MS - the toString to get correct format for ID placement
    const id = new Date().getTime().toString
    // if value is not empty and edit flag is false (this means no value and im not editing)
     if(value !== '' && editFlag === false){
         console.log('adding item')
     }
     else if(value !== '' && editFlag === true){
         console.log('editing')
     }
     else{
        //  invokes function from below
        displayAlert('please enter a value ', "danger")
         
     }

}

// display the alert 
// action = display  red , or green (danger /success)
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // setTimeOut to remove the alert 
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********






















// ************short way of the function
// shows that everything is considered Truthy in JS 
// ! function in front to show that something is false 

// function addItem(e){
//     e.preventDefault();
   
//     const value = grocery.value 
//     const id = new Date().getTime().toString
//      if(value && !editFlag ){
//          console.log('adding item')
//      }
//      else if(value && editFlag ){
//          console.log('editing')
//      }
//      else{
//          alert.textContent = 'empty value';
//      }

// }