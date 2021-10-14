const element1 = { id: '5qap5aO4i9A', img: '../img/lofi1.gif' }
const element2 = { id: 'Yx1wtgBi7w0', img: '../img/lofi2.gif' }
const element3 = { id: '-5KAN9_CzSA', img: '../img/lofi3.gif' }
const element4 = { id: 'MCkTebktHVc', img: '../img/lofi4.gif' }
const element5 = { id: 'DWcJFNfaw9c', img: '../img/lofi5.gif' }
const element6 = { id: 'bM0Iw7PPoU4', img: '../img/lofi6.gif' }
const element7 = { id: 'lcYJhHqotIQ', img: '../img/lofi7.gif' }
const element8 = { id: '21qNxnCS8WU', img: '../img/lofi8.gif' }
const element9 = { id: '3H6_bcfts8g', img: '../img/lofi9.gif' }


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'CIfGUiICf8U',
      playerVars: {
         'autoplay': 1,
         'controls': 0,
         'loop': 1,
         'origin': 'http://marcellowww.github.io',
      },
      events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
      }
   });


}


const bgSection = document.getElementById('background-section');
const body = document.getElementById('body');


function loadVideo(element) {
   console.log(element);
   player.loadVideoById(element.id);

   setTimeout(() => {
      const videoData = player.getVideoData()
      console.log(videoData)
      body.style.display = 'none'
      bgSection.style.display = 'block'
      bgSection.innerHTML = `<img src=${element.img} alt="gif-ilustrativo" class="background-gif" id="background-image"/>
      <div class='infos'>
      <h1 class="info-title">${videoData.title}</h1>
      <h3 class="info-author">${videoData.author}</h3>
      </div>`
   }, 1000)

}

function onPlayerReady(event) {
   event.target.playVideo();
}

var done = false;
var videoData;
function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
      console.log(player);
      done = true;
   }

}


document.addEventListener('keyup', (event) => {
   const keyCode = event.code;
   //console.log(keyCode);

   if (keyCode == 'Space') {
      if (player.getPlayerState() == 1) {
         player.pauseVideo();
      } else (player.getPlayerState() == 2), player.playVideo();

   }

   if (keyCode == 'KeyM') {
      if (player.isMuted() == true) {
         console.log('mutado')
         player.unMute();
      }
      if (player.isMuted() == false) {
         player.mute();
      }
   }

   if (keyCode == 'Escape') {
      bgSection.style.display = 'none'
      body.style.display = 'block'
      player.stopVideo()
      player.clearVideo()
   }



})

document.addEventListener('keydown', (event) => {
   const keyCode = event.code;
   //console.log(event)

   if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(event.code) > -1) {
      event.preventDefault();
   }

   var volume = player.getVolume();
   if (keyCode == 'ArrowUp') {
      if (volume == 100) return;
      volume = volume + 1;
      player.setVolume(volume);
      //console.log(volume)
   }

   if (keyCode == 'ArrowDown') {
      if (volume == 0) return;
      volume = volume - 1;
      player.setVolume(volume);
      //console.log(volume)
   }

})


