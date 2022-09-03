var lever = 2;
var left = document.getElementById('left');
var leftImg = left.getElementsByTagName('img');
var mask = document.getElementById('box');
var right = document.getElementById('right');
var rimg = document.querySelector('.rimg');
left.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    right.style.display = 'block';
})
left.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    right.style.display = 'none';
})
left.addEventListener('mousemove', function (e) {
    //鼠标在图片里的坐标
    var x = e.pageX;
    var y = e.pageY;
    var mouseX = x - left.offsetLeft;
    var mouseY = y - left.offsetTop;
    //缩略图大小
    var lew = left.offsetWidth;
    var leh = left.offsetHeight;
    //遮罩层大小
    var maskw = lew / lever;
    var maskh = leh / lever;
    mask.style.width = maskw + 'px';
    mask.style.height = maskh + 'px';
    //遮罩层随鼠标移动且遮罩层不超过缩略图范围
    var maskx = mouseX - maskw / 2;
    var masky = mouseY - maskh / 2;
    if (maskx < 0) {
        maskx = 0
    } else if (maskx>lew-maskw) {
        maskx=lew-maskw
    }
    if (masky<0) {
        masky=0
    } else if (masky>leh-maskh) {
        masky=leh-maskh
    }
    mask.style.left = maskx + 'px';
    mask.style.top = masky + 'px';

    //放大图大小和放大的大小(倍数*100%)
    var bigw = right.offsetWidth;
    var bigh = right.offsetHeight;
    right.style.backgroundSize = lever * 100 + '%';
    // //放大图的移动  -(放大图的大小/遮罩层大小*遮罩层坐标)
    rimg.style.left = -(bigw / maskw) * maskx + 'px';
    rimg.style.top = -(bigh / maskh) * masky + 'px';
})