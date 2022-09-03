// obj(变量名) targer(目标值) calllback(回调)
function animate(obj, targer, callback) {
    //先清除以前的定时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        //步长(目标值-现在的位置)/10
        var step = (targer - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft==targer) {
            clearInterval(obj.timer)
            if (callback) {
                callback();
            }
        }
        obj.style.left=obj.offsetLeft+step+'px'
    }, 15);
}