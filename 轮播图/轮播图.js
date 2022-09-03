var con = document.querySelector('.container')
var imgbox = document.querySelector('.imgbox');
var lis = imgbox.children
var imgw = lis[0].clientWidth;
var dots = document.querySelector('.radio');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var circle = 0;
var num = 0;
function lbt() {
    //1 根据图片生成圆点 点击圆点切换图片 给每个圆点index
    for (let i = 0; i < lis.length; i++) {
        var dot = document.createElement('li');
        dot.setAttribute('index', i);
        dots.appendChild(dot);
        dot.addEventListener('click', function () {
            for (let i = 0; i < dots.children.length; i++) {
                dots.children[i].className = ''
            }
            var index = this.getAttribute('index')
            circle = index;
            num = index;
            dots.children[i].className = 'current';
            animate(imgbox, -i * imgw)
        })
    }
    dots.children[0].className = 'current';
    var first = imgbox.children[0].cloneNode(true);
    imgbox.appendChild(first)

    //左右按钮显示与隐藏
    con.addEventListener('mousemove', function () {
        left.style.display = 'block'
        right.style.display = 'block'
    })
    con.addEventListener('mouseout', function () {
        left.style.display = 'none'
        right.style.display = 'none'
    })

    //左右按钮实现图片左右移动
    left.addEventListener('click', function () {
        if (num == 0) {
            num = lis.length - 1
            imgbox.style.left = -num * imgw + 'PX'
        }
        num--;
        animate(imgbox, -num * imgw);
        circle--;
        if (circle < 0) {
            circle = 3
        }
        for (let i = 0; i < dots.children.length; i++) {
            dots.children[i].className = ""
        }
        dots.children[circle].className = 'current'
    })
    function Right() {
        if (num==lis.length-1) {
            num=0;
            imgbox.style.left=0
        }
        num++;
        animate(imgbox,-num*imgw)
        circle++;
        if (circle==dots.children.length) {
            circle=0
        }
        for (let i = 0; i < dots.children.length; i++) {
            dots.children[i].className = ""
        }
        dots.children[circle].className = 'current'
    }
    right.addEventListener('click', Right);
    // setInterval(function () {
    //     Right()
    // }, 3000);
}
lbt()
