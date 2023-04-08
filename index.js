//detecting button

var drum_buttons = document.querySelectorAll(".drum") ;
for (let i = 0; i < drum_buttons.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        audioPlayer(buttonInnerHTML);
    });
                 
}

//detecting key press

document.addEventListener("keypress", function (event) {
    buttonAnimation(event.key);
    audioPlayer(event.key);
});


//function to change button color
function buttonAnimation(key, keyColor){
    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
// function to play sound  

function audioPlayer (key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();  
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();  
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();  
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();  
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();  
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();  
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();  
            break;
        default:
            console.log("switch case error");
    }
}