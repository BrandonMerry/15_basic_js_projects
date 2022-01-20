// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// for the button uses the defined class 
const btn = document.querySelector ('.switch-btn')
// for the video 
const video = document.querySelector ('.video-container')

btn.addEventListener('click', function(){
    // '!' is the not operator 
    // if the btn does not contain the slide class, then...
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        
        // this section controls the video with the btn connection
        video.pause();
    }
    // this else is to put the btn off if it does contain the class
    else{
        btn.classList.remove('slide');
        video.play();
    }
});

// the js function calls on the css style and uses the span to cover one side of the toggle