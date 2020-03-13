/*
 __  __     __  __        __         ______     ______     _____     ______     ______     ______     ______     ______     __   __   
/\ \/\ \   /\_\_\_\      /\ \       /\  __ \   /\  __ \   /\  __-.  /\  ___\   /\  ___\   /\  == \   /\  ___\   /\  ___\   /\ "-.\ \  
\ \ \_\ \  \/_/\_\/_     \ \ \____  \ \ \/\ \  \ \  __ \  \ \ \/\ \ \ \___  \  \ \ \____  \ \  __<   \ \  __\   \ \  __\   \ \ \-.  \ 
 \ \_____\   /\_\/\_\     \ \_____\  \ \_____\  \ \_\ \_\  \ \____-  \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_\\"\_\
  \/_____/   \/_/\/_/      \/_____/   \/_____/   \/_/\/_/   \/____/   \/_____/   \/_____/   \/_/ /_/   \/_____/   \/_____/   \/_/ \/_/


Support: https://discord.gg/mNNATGu
 
NOTES:
- Time is in mil seconds
- Make sure to add your images to the __resource.lua file or it: !!!! WILL NO WORK !!!!

*/
const config = {
  "useImg": true,//COMING SOON. LEAVE IT :0
  "music": true, //Enable music.
  "musicID": "lTRiuFIWV54", //ID of the youtube video.
  "musicControl": true, //Enable spacebar to toggle music.
  "warning": true, //Enable the warning at top of page.
  "text": {
    "title": "UX Loadscreen", //Main Title.
    "warningtext": "UX Loadscreen is currently in beta, and should not be used in production. (remove this in config)" //Warning text for the loadscreen.
  },
}

//DONT TOUCH ANYTHING BELOW THIS LINE, DOING SO WILL VOID OUR SUPPORT!
//DONT TOUCH ANYTHING BELOW THIS LINE, DOING SO WILL VOID OUR SUPPORT!
//DONT TOUCH ANYTHING BELOW THIS LINE, DOING SO WILL VOID OUR SUPPORT!

window.onload = function reload() {
  if (config.warning === false) {
    document.getElementById("wholediv").style.display = "none";
  }
  document.getElementById('middle-text').innerHTML = config.text.title;
  document.getElementById('warning').innerHTML = config.text.warningtext;

  var close = document.getElementsByClassName("closebtn");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function () { div.style.display = "none"; }, 600);
    }
  }

  window.onkeydown = function(e) {
    var elem = e.target.nodename;
    if( elem !== 'TEXTAREA' && elem != 'INPUT' ) {
        return !(e.keyCode == 32);
    }
};

};

let player;

if (config.music) {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubePlayerAPIReady() {
    const intId = setInterval(function () {
      // Check if player is initialized and the video is loaded
      if (player) {
        getData()
        function getData() {
          document.getElementById("scroll").innerHTML = '<b>🎵: </b>' + player.getVideoData().title;
        }
        clearInterval(intId);
      }
    }, 100);

    player = new YT.Player('ytplayer', {
      width: '0%',
      height: '0%',
      videoId: config.musicID,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    player.setPlaybackQuality("small");
  }

  function onPlayerStateChange(event) {
    if (player.getPlayerState() == 1) {
      getData()
      console.log(title)
    }

    if (event.data == YT.PlayerState.ENDED) {
      player.seekTo(0);
      player.playVideo();

      if (event.data === 0) {
        isPaused(false);
      }
    }
  }
  if (config.musicControl) {
    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        toggleAudio();
      }
    })
  }

  function stopAudio() {
    player.pauseVideo()
  }

  function playAudio() {
    player.playVideo()
  }

  function toggleAudio() {
    if (player.getPlayerState() == 1 || player.getPlayerState() == 3) {
      player.pauseVideo();
      isPasued(true);
    } else {
      player.playVideo();
      isPaused(false);
    }
  }
}

