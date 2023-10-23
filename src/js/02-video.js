import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');


const player = new Player(iframe);


function getCurrentTime() {
    return player.getCurrentTime().then(time => {
        return time;
    });
}


function saveCurrentTime() {
    getCurrentTime().then(time => {
        localStorage.setItem('videoplayer-current-time', time);
    });
}


function playVideoFromSavedTime() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(parseFloat(savedTime));
    }
}


const saveCurrentTimeThrottled = throttle(saveCurrentTime, 1000);

player.on('timeupdate', saveCurrentTimeThrottled);


player.ready().then(() => {
    playVideoFromSavedTime();
});