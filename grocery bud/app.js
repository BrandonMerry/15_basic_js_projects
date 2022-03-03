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

// submit form (event, function name)
from.addEventListener('submit', addItem)

// clear items btn  (class... = event, function name)
clearBtn.addEventListener('click', clearItems)



// ****** FUNCTIONS **********

// add event object (e) because normally it should be submited to a database 
function addItem(e){
    e.preventDefault();
    // now traget  input of grocery and give it a value
    const value = grocery.value; 
    // this is a way to give each item a new id - not normal way for serious projects 
    // new date(), getTime() are in day / MS - the toString to get correct format for ID placement
    const id = new Date().getTime().toString;
    // if value is not empty and edit flag is false (this means no value and im not editing)
     if(value !== '' && editFlag === false){
        //  create a new element for the list
        const element = document.createElement('article');
        // add class to article
        element.classList.add('grocery-item');
        // add id from const ID 
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` 
                <p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`;

        
        // delete function with BTN- target when you have access to it // uses the class from btn above 
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        // edit function with BTN - target when you have access to it
        const editBtn = element.querySelector('.edit-btn');
        editBtn.addEventListener('click', editItem);


        // append the child list
            list.appendChild(element);
        // display alert
            displayAlert("item added to the list", "success");

        // show the container with the css class
            container.classList.add('show-container');

        // add to local storage 
            addToLocalStorage(id,value);
        // set back to default
            setBackToDefault();
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

// clear items 

function clearItems(){
    // select all items 
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    // reset the clear items btn by removing the  css class 
    container.classList.remove('show-container');
    displayAlert('empty list', "danger");
    // setback to default so that edit works and looks good 
    setBackToDefault();
    // localStorage.removeItem('list);
}

// delete function from  above using const = deleteBtn
function deleteItem(e){
    // access the parent container 'grocery-item' with event object
    // use current target so you directly select the btn
    const element = e.currentTarget.parentElement.parentElement;
    // this is the id setup earlier 
    const id = element.dataset.id;
    list.removeChild(element);
    // hide container if needed
    if (list.children.length === 0) {
        container.classList.remove('show-container');
      }
    // shows alert
    displayAlert('item removed', 'danger');
    // return everything back to default with the function created below 
    setBackToDefault();
    // remove from local storage - use your ids /
    // removeFromLocalStorage(id);

}

// edit function above using from const = editBtn 
function editItem(){
    console.log('item edited');
}

// set back to default
function setBackToDefault(){
    // this returns the placeholder in the input 
    grocery.value = '';
    editFlag = false;
    editID = '';
    submtBtn.textContent = 'submit';
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    console.log("added to local storage");
}

function removeFromLocalStorage(id){

}
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