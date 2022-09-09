import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player ('iframe');

player.on('timeupdate', throttle(e => {
    localStorage.setItem('videoplayer-current-time',)
}, 1000)
);
player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(error => {
        console.log(error);
    })
