$(document).ready(function () {
    var audio = document.querySelector('audio')
    var bar = document.querySelector('.jp-play-bar')
    var volume = document.querySelector('.volume-level')
    var mousex=0 ;
    var music = [{
        title: '小芳',
        singer: '李荣浩',
        mp3: 'http://ws.stream.qqmusic.qq.com/C400004Aqajj3rTOjU.m4a?guid=544839445&vkey=E4B7E8B118011599D9A93458581E818B5747928E5D9C8D412278A2F5225947FCD10E8264D414F8ED6884EF8297B95752A384A5E8298B3000&uin=&fromtag=120032',
        poster: "http://33.media.tumblr.com/0b35eb42176eedbf4a96e52efa760875/tumblr_mxp7a0v3fr1rqx86wo1_500.png"
    }, {
        title: '你不是第一个离开的人',
        singer: '邓紫棋',
        mp3: 'http://ws.stream.qqmusic.qq.com/C400002gIrZ419ssQG.m4a?guid=835336001&vkey=D3CA4659195151C69C3D3211AAF4EEC18328A3D2E043DEA2388BE89953E7003A06C3FFB6E85E53347A37F4A233B0ACB37EDA8790A0A4EC3E&uin=&fromtag=120032',
        poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    }, {
        title: '如愿',
        singer: '王菲',
        mp3: 'http://ws.stream.qqmusic.qq.com/C400001ufyHx10iWpg.m4a?guid=560245395&vkey=9AE446342D5C87FFE2A90EC073875B5770F75F53D785837DA10BD62155F10C005660BEEDF4802369DD153E43DAAAF6384B492619309486CC&uin=&fromtag=120032',
        poster: "http://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
    }]
    audio.src = music[0].mp3
    var num = 0;
    var sum = 0;
    var jd1
    var m = 0;
    var s = 0;
    var time;
    $('.jp-play').click(function () {
        num++;
        if (num % 2 !== 0) {
            $('.jp-play').addClass('icon-pause').removeClass('icon-play')
            audio.play();
            time = setInterval(function () {
                jd1 = audio.currentTime / audio.duration * 350
                m = Math.floor((audio.currentTime) / 60)
                m = m < 10 ? '0' + m : m;
                s = Math.floor((audio.currentTime) % 60)
                s = s < 10 ? '0' + s : s;
                if (jd1 < 350) {
                    bar.style.width = jd1 + 'PX'
                    $('.current').html(m + ':' + s)
                } else {
                    clearInterval(time)
                    $('.jp-play').removeClass('icon-pause').addClass('icon-play')
                }
            }, 1000);
        }
        if (num % 2 == 0) {
            $('.jp-play').removeClass('icon-pause').addClass('icon-play')
            audio.pause();
            clearInterval(time)
        }
    })
    $('.icon-previous').click(function () {
        if (sum == 0) {
            alert('前面没歌了');
            $('.jp-play').addClass('icon-pause').removeClass('icon-play')
            audio.play();
            time = setInterval(function () {
                jd1 = audio.currentTime / audio.duration * 350
                m = Math.floor((audio.currentTime) / 60)
                m = m < 10 ? '0' + m : m;
                s = Math.floor((audio.currentTime) % 60)
                s = s < 10 ? '0' + s : s;
                if (jd1 < 350) {
                    bar.style.width = jd1 + 'PX'
                    $('.current').html(m + ':' + s);
                } else {
                    $('.jp-play').removeClass('icon-pause').addClass('icon-play')
                    clearInterval(time)
                }
            }, 1000);
        }
        sum--;
        if (sum<0) {
            sum=0
        }
    })
    $('.icon-next').click(function () {
        sum++;
        if (sum < 3) {
            audio.src = music[sum].mp3;
            $('.jp-play').addClass('icon-pause').removeClass('icon-play')
            time = setInterval(function () {
                jd1 = audio.currentTime / audio.duration * 350
                m = Math.floor((audio.currentTime) / 60)
                m = m < 10 ? '0' + m : m;
                s = Math.floor((audio.currentTime) % 60)
                s = s < 10 ? '0' + s : s;
                if (jd1 < 350) {
                    bar.style.width = jd1 + 'PX'
                    $('.current').html(m + ':' + s)
                } else {
                    clearInterval(time)
                    $('.jp-play').removeClass('icon-pause').addClass('icon-play')
                }
            }, 1000);
            audio.play();
        } else {
            alert('最后一首了');
        }
    })
    $('.jp-volume-bar-value').mousedown(function () { 
        console.log(12);
        volume.onmousemove=function (e) {
            let x = Math.floor(e.pageX - $('.jp-volume-bar-value').offset().left) 
            mousex = x;
           if (x>200) {
               x = 200;
            }
           if (x<0) {
               x = 0;
            }
            $('.jp-volume-bar-value').css('width', x + 'px')
            audio.volume = mousex / $('.volume-level').width();
        }
    });
    $('.jp-volume-bar-value').mouseup(function () { 
        console.log(345);
        volume.onmousemove = null;
    })
    $('.jp-volume-bar-value').css('width',   '200px')

})