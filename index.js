var button = document.querySelectorAll('button.drum');

for (var i = 0; i <button.length; i++){
  button[i].addEventListener("click", drumBeat);
}

document.addEventListener("keydown", drumBeat);

function drumBeat(event){
  switch (event.key || this.innerHTML) {
    case "w":
      buttonAnimation("w");
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      buttonAnimation("a");
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      buttonAnimation("s");
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      buttonAnimation("d");
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      buttonAnimation("j");
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      buttonAnimation("k");
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      buttonAnimation("l");
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    default:
      console.log(this.innerHTML || event.key);

  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)

}
