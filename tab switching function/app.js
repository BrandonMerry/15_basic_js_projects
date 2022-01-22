
// creates JS constants from selecting classes in the html
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


// add an event listener to the parent container "about"
// function(e) calls on the event object
about.addEventListener("click", function (e){
    // inside is the actual target 
    // console.log to find it with - even bubbling 
    // this targets the dataset called id
    // console.log(e.target.dataset.id);
    // ***********************************
    // this tells js to respond if the button is clicked on 
    const id = e.target.dataset.id;
    if (id) {
      // removes active from all btns 
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      // then adds active to what is clicked on
      e.target.classList.add("active");
      /// this is all within the statement because they have the data-id attribute 
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });