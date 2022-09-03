window.onload = function () {
    var mask = document.querySelector('.mask');
    var circle = document.querySelector('.circle')
    circle.onmousemove = function () {
        mask.style.display = 'block'
    },
        circle.onmouseout = function () {
            mask.style.display = 'none'

        },
        //第二个
        $('.circle1').hover(function () {
            $('.mask1').css({ 'left': '6px' })
        }, function () {
            $('.mask1').css({ 'left': '405px' })

        }),
        //第三个
        $('.circle2').hover(function () {
            // over
            $('.c2').css({ 'transform': 'scale(0.5)', 'left': '140px' })
            $('.mask2').css({ 'left': '0px', 'opacity': 1 })
        }, function () {
            // out
            $('.c2').css({ 'transform': 'scale(1)', 'left': '0px' })
            $('.mask2').css({ 'left': '-220px', 'opacity': 0 })

        }),
        //第四个
        $('.circle3').hover(function () {
            // over
            $('.c3').css({ 'transform': 'scale(1.2)', 'opacity': 0 })
            $('.mask3').css({ 'transform': 'scale(1)' })
        }, function () {
            // out
            $('.c3').css({ 'transform': 'scale(1)', 'opacity': 1 })
            $('.mask3').css({ 'transform': 'scale(0.5)' })
        }),

        
        $('.r1').hover(function () {
            $('.info').css('display', 'block');
            $('.info h3').animate({ 'right': '0' })
            $('.info p').animate({ 'left': '0' })
            $('.rectangle img').css('transform', 'scale(1.1)')
        }, function () {
            $('.info').css('display', 'none');
            $('.info h3').css({ 'right': '320px' })
            $('.info p').css({ 'left': '320px' })
            $('.rectangle img').css('transform', 'scale(1)')
        })
    //第二个
    $('.r2').hover(function () {
        $('.info1').css({'transform': 'rotate(0deg)' });
        $('.info1 h3').animate({ 'right': '0' })
        $('.info1 p').animate({ 'left': '0' })
        $('.rectangle img').css('transform', 'scale(1.1)')
    }, function () {
        $('.info1').css({'transform': 'rotate(-90deg)' });
        $('.info1 h3').css({ 'right': '320px' })
        $('.info1 p').css({ 'left': '320px' })
        $('.rectangle1 img').css('transform', 'scale(1)')
    })
}