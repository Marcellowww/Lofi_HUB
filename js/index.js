const id1 = '5qap5aO4i9A';
const id2 = 'Yx1wtgBi7w0';
const id3 = '-5KAN9_CzSA';
const id4 = 'MCkTebktHVc';
const id5 = 'DWcJFNfaw9c';
const id6 = 'bM0Iw7PPoU4';
const id7 = 'lcYJhHqotIQ';
const id8 = '21qNxnCS8WU';
const id9 = '3H6_bcfts8g';


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
            'origin': 'https://marcellowww.github.io'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });


}

function loadVideo(id) {
    //console.log('click', id);
    player.loadVideoById(id);

}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        console.log(player);
        done = true;
    }

}


document.addEventListener('keyup', (event) => {
    const keyCode = event.code;
    // console.log(keyCode);

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



})

document.addEventListener('keydown', (event) => {
    const keyCode = event.code;
    //console.log(event)

    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code) > -1) {
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


