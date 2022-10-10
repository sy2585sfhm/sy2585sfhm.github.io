    var img = ['./img/1.jpg', './img/5eb614c00d844.jpg', './img/20200721103123999.jpg', './img/R-C.jpg'];
    var lever = 2;
    for (let i = 0; i < img.length; i++) {
        $('.list').append('<li></li>')
    }
    $('.left').append('<img src=' + img[0] + '></img>')
    $('.right').append('<img src=' + img[0] + '></img>')
    img.forEach(function (e, i) {
        var imgs = document.createElement('img')
        var imgsrc = imgs.src = e
        $('.list li')[i].appendChild(imgs);
    })
var mask = document.getElementById('masker');
    // 遮罩层大小
    $('.masker').css({ 'width': ($('.left').width() / lever) + 'px', 'height': ($('.left').height() / lever) + 'px' })
    //左边盒子
    $('.left').on('mousemove', function (e) {
        //鼠标坐标
        var mouseX = e.pageX - $('.left').offset().left;
        var mouseY = e.pageY - $('.left').offset().top;
        //遮罩层随鼠标移动
        var maskX = mouseX - ($('.left').width() / lever) / 2;
        var maskY = mouseY - ($('.left').height() / lever) / 2;
        console.log(maskX,maskY);
        if (maskX<0) {
            maskX=0
        }
        if (maskX>$('.left').width()-$('.masker').width()) {
            maskX = $('.left').width() - $('.masker').width();
        }
        if (maskY<0) {
            maskY=0
        }
        if (maskY>$('.left').height()-$('.masker').height()) {
            maskY=$('.left').height()-$('.masker').height()
        }
        $('.masker').css({ 'left': maskX + 'px', 'top': maskY +'px'});

        // //右边盒子
        var rightW = $('.right').width();
        var rightH = $('.right').height();
        var imgLeft=(rightW/$('.masker').width())*maskX
        var imgTop=(rightH/$('.masker').height())*maskY
        $('.right img').css({'left':-imgLeft,'top':-imgTop})
    })
    $('.left').hover(function () {
            // over
            $('.masker').css('display', 'block')
            $('.right').css('display', 'block')
        }, function () {
            // out
            $('.masker').css('display', 'none')
            $('.right').css('display', 'none')
        }
    );
    $('.list li').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active')
        $('.left img')[0].src = $(this).children()[0].src;
        $('.right img')[0].src = $('.left img')[0].src;
    })
