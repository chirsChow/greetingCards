/**
 * Created by zhouqunhui on 17/1/7.
 */
window.onload = function () {
    var music = document.getElementById('music');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var lantern = document.getElementsByClassName('p1_lantern')[0];

    var audio = document.getElementsByTagName("audio")[0];

    audio.addEventListener("ended",function () {
        pause();
    }, false);

    music.addEventListener('touchstart',function () {
        if(audio.paused){
            play();
        }else{
            pause();
        }

    }, false);

    function pause() {
        audio.pause();
        music.setAttribute('class', '');
        // this.style.animationPlayState = "paused";
        // this.style.webkitAnimationPlayState = "paused";
    }

    function play() {
        audio.play();
        music.setAttribute('class', 'play');
        //this.style.animationPlayState = "running";
        //this.style.webkitAnimationPlayState = "running";
    }

    lantern.addEventListener('touchstart',function () {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        },5500);
    }, false);

};