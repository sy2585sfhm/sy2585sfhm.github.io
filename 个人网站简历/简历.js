var texts = document.querySelector('.content').children
for (let i = 0; i < texts.length; i++) {
    $('.dots').append('<li data-index='+i+'></li>');
}
var number = 0;
$('.dots li').on('click', function () {
    number = $(this).index() * -512 + 'px';
    $('.content').css('left', number);
    $(this).addClass('activer').siblings().removeClass('activer')
})
$('.dots li')[0].classList.add('activer')
