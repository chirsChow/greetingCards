/**
 * Created by zhouqunhui on 17/1/7.
 */
window.onload = function () {
    var music = document.getElementById('music');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');

    var audio = document.getElementsByTagName("audio")[0];

    music.addEventListener('touchstart',function () {
        if(audio.paused){
            audio.play();
            //this.setAttribute('class', 'play');
            this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        }else{
            audio.pause();
            //this.setAttribute('class', '');
            this.style.animationPlayState = "paused";
            this.style.webkitAnimationPlayState = "paused";
        }

    });
};