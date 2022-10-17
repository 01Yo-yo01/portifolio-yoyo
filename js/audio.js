/*onst music = document.querySelector('#music')

const handleClick = async (e) => {
   await music.play();
}

var x = document.getElementById("myAudio"); 

function playAudi() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} */

const music = document.querySelector('#music');

let isPlaying = false;

const handleClick = async (e) => {
   if(isPlaying) {
     await music.pause();
     isPlaying = false;
   } else {
     await music.play();
     isPlaying = true;
   }
}

  