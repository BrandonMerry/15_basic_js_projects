// select modal-btn,modal-overlay,close-btn 
const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector ('.modal-overlay');
const closeBtn = document.querySelector ('.close-btn');



// listen for click events on modal-btn 
// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener('click', function(){
    overlay.classList.add("open-modal");
});

// listen for click events on close-btn
// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener('click', function(){
    overlay.classList.remove("open-modal");
});



