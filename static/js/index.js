let lists = document.querySelector('.lists')
let jslists = document.querySelector('.jslists')
let production = [
    {
        id: 'html',
        pic: `./项目图片/截图20221028193843.png`,
        path: "./3D旋转图片墙/3D旋转图片墙.html",
        title: '3D旋转图片墙'
    },
    {
        id: 'html',
        pic: `./项目图片/截图20221028191010.png`,
        path: "http://127.0.0.1:5504/%E5%84%BF%E7%AB%A5%E7%BD%91%E7%AB%99%E6%8E%92%E7%89%88/%E5%84%BF%E7%AB%A5%E7%BD%91%E7%AB%99.html",
        title: '儿童网站排版'
    },
    {
        id: 'html',
        pic: `./项目图片/屏幕截图 2022-09-13 191154.jpg`,
        path: "file:///C:/Users/86136/Desktop/%E9%A1%B9%E7%9B%AE%E7%BB%83%E4%B9%A0/iHover/%E5%9C%86%E5%BD%A2%E6%82%AC%E5%81%9C/%E6%82%AC%E5%81%9C.html",
        title: 'Hover效果'
    },
    {
        id: 'html',
        pic: `./项目图片/屏幕截图 2022-09-13 201923.jpg`,
        path: 'http://127.0.0.1:5504/%E6%8C%89%E9%92%AE/%E7%BA%AFcss%E6%8C%89%E9%92%AE.html',
        title: 'css按钮'
    }, {
        id: 'html',
        pic: './项目图片/屏幕截图 2022-09-13 185907.jpg',
        path: 'http://127.0.0.1:5504/360%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8.html',
        title: '360极速浏览器排版'
    }, {
        id: 'html',
        pic: './项目图片/截图20221027200658.png',
        path: 'http://127.0.0.1:5504/%E7%BB%83%E4%B9%A0/%E6%9C%8D%E8%A3%85%E9%A1%B5%E9%9D%A2.html',
        title: '服装网站排版'
    },
    {
        id: 'html',
        pic: './项目图片/截图20221027200742.png',
        path: 'http://127.0.0.1:5504/%E7%BB%83%E4%B9%A0/%E7%BB%83%E4%B9%A0%E5%B8%83%E5%B1%80.html',
        title: '医疗网站排版'
    },
    {
        id: 'html',
        pic: './项目图片/屏幕截图 2022-09-13 202607.jpg',
        path: 'http://127.0.0.1:5504/%E7%BB%83%E4%B9%A0/%E7%BD%91%E9%A1%B5%E7%BB%83%E4%B9%A02.html',
        title: '慈善网站排版'
    },
    {
        id: 'html',
        pic: './项目图片/屏幕截图 2022-09-13 192559.jpg',
        path: 'http://127.0.0.1:5504/%E9%92%A2%E7%90%B4%E8%8A%82%E5%A5%8F/%E9%92%A2%E7%90%B4%E8%8A%82%E5%A5%8F%E6%B8%B8%E6%88%8F.html',
        title: '自我简历网站排版'
    },
    {
        id: 'js',
        pic: './项目图片/截图20221027203545.png',
        path: 'http://127.0.0.1:5504/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E7%AE%80%E5%8E%86/%E7%BD%91%E7%AB%99%E7%AE%80%E5%8E%86.html',
        title: '别踩白块'
    },
    {
        id: 'js',
        pic: './项目图片/截图20221027203334.png',
        path: 'http://127.0.0.1:5504/%E6%BB%9A%E5%8A%A8%E6%97%B6%E9%92%9F/%E6%BB%9A%E5%8A%A8%E8%AE%A1%E6%97%B6%E5%99%A8.html',
        title: '滚动时钟'
    },
    {
        id: 'js',
        pic: './项目图片/屏幕截图 2022-09-13 201626.jpg',
        path: 'http://127.0.0.1:5504/%E6%94%BE%E5%A4%A7%E9%95%9C2/%E6%94%BE%E5%A4%A7%E9%95%9C2.html',
        title: '购物放大镜'
    },
    {
        id: 'js',
        pic: './项目图片/屏幕截图 2022-09-13 192656.jpg',
        path: 'http://127.0.0.1:5504/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8.html',
        title: '简易音乐播放器'
    },
    {
        id: 'js',
        pic: './项目图片/截图20221028194253.png',
        path: 'http://127.0.0.1:5504/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE.html',
        title: '无缝轮播图'
    },
    {
        id: 'js',
        pic: './项目图片/截图20221027202521.png',
        path: 'http://127.0.0.1:5504/%E4%B9%9D%E5%AE%AB%E6%A0%BC%E6%8A%BD%E5%A5%96/%E6%8A%BD%E5%A5%96.html',
        title: '九宫格抽奖'
    },
    {
        id: 'js',
        pic: './项目图片/屏幕截图 2022-09-13 192419.jpg',
        path: 'http://127.0.0.1:5504/%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E6%A0%8F/%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E6%A0%8F.html',
        title: '底部导航栏'
    },
    {
        id: 'js',
        pic: './项目图片/截图20221027211104.png',
        path: 'http://127.0.0.1:5504/%E6%89%8B%E9%A3%8E%E7%90%B4/jq%E6%89%8B%E9%A3%8E%E7%90%B4.html',
        title: '手风琴'
    },
    {
        id: 'ajax',
        pic: './项目图片/屏幕截图 2022-09-13 191018.jpg',
        path: 'http://127.0.0.1:5504/%E5%8A%A8%E6%BC%AB/2.html',
        title: 'ajax 动漫'
    },
]
for (let i = 0; i < production.length; i++) {
    var li = document.createElement('li')
    li.innerHTML = `
    <a href="${production[i].path}">
        <div class="img">
    <img src="${production[i].pic}" alt="">
</div>
<span>${production[i].title}</span>
    </a >`
    if (production[i].id == 'html') {
        lists.appendChild(li)
    }else if(production[i].id == 'js') {
        jslists.appendChild(li)
    } else {
        console.log(123);
    }
}