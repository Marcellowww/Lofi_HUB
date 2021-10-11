const id1 = '5qap5aO4i9A'
const id2 = 'Yx1wtgBi7w0'
const id3 = '-5KAN9_CzSA'
const id4 = 'MCkTebktHVc'
const id5 = 'DWcJFNfaw9c'
const id6 = 'bM0Iw7PPoU4'
const id7 = 'lcYJhHqotIQ'
const id8 = '21qNxnCS8WU'
const id9 = '3H6_bcfts8g'


var vId;
function openPlayer(id) {
    
    console.log('click', id)
    var tag = document.createElement('script');
    
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    vId = id

}


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: vId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });


}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        console.log(player)
        done = true;
    }

}

document.addEventListener('keyup', (event) => {
    const keyCode = event.code

    if (keyCode == 'Space') {
        if (player.getPlayerState() == 1) {
            player.pauseVideo()
        } else (player.getPlayerState() == 2), player.playVideo()

    }

    if (keyCode == 'KeyM') {
        if (player.isMuted() == true) {
            console.log('mutado')
            player.unMute();
        }
        if (player.isMuted() == false) {
            player.mute()
        }
    }
})

