let config = require('config.js')

document.getElementById('link').innerHTML = config.text.link;
let audio = `<div data-video=${config.videoID} data-autoplay="1" data-loop="1" id="youtube-audio"> </div>`;
if (config.music === true) { 
 $("body").append(audio);
} 

    function onYouTubeIframeAPIReady() {
    let e = document.getElementById("youtube-audio"), 
    t = document.createElement(null); 
    e.appendChild(t); let a = document.createElement("div"); 
    a.setAttribute("id", "youtube-player"), e.appendChild(a); 
    let o = function (e) { 
        t.setAttribute("src", "https://i.imgur.com/" + a) }; 
        e.onclick = function () { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) }; let r = new YT.Player("youtube-player", { height: "0", width: "0", videoId: e.dataset.video, playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop }, events: { onReady: function (e) { r.setPlaybackQuality("small"), r.setVolume(config.musicVolume) 
        o(r.getPlayerState() !== YT.PlayerState.CUED) }, 
        onStateChange: function (e) { e.data === YT.PlayerState.ENDED && o(!1) } } }) 
    }
    
    window.addEventListener('message', function (e) {
        (handlers[e.data.eventName] || function () { })(e.data);
    });