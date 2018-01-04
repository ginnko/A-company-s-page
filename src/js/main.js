// 点击轮播操作
var ele_left = document.getElementById("left-button");
var ele_right = document.getElementById("right-button");

var carousel_box = document.getElementsByClassName("inner")[0];


ele_left.addEventListener("click", slideleft, false);
ele_right.addEventListener("click", slideright, false);

function slideleft() {
    carousel_box.style.left = 0;
    ele_left.className = "slide-left-in";
    ele_right.className = "slide-left-out";
}

function slideright() {
    carousel_box.style.left = "-100%";
    ele_left.className = "slide-right-out";
    ele_right.className = "slide-right-in";
}

//滚动显示导航条背景操作
var nav = document.getElementById("navigation");

window.addEventListener("scroll", function () {
    var goback = document.documentElement.scrollTop || document.body.scrollTop;
    if (goback > 10) {
        nav.style.backgroundColor = "rgba(11, 24, 29, 0.8)";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});
//滚动显示返回页面顶端
var goToTop = document.getElementById("goToTop");

window.addEventListener("scroll", function () {
    var goback = document.documentElement.scrollTop || document.body.scrollTop;
    if (goback > 230) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
});
goToTop.addEventListener("click", function () {
    var goback = document.documentElement || document.body;
    var time = setInterval(function () {
        goback.scrollTop -= 50;
        if(goback.scrollTop <= 0){
            clearInterval(time);
        }
    }, 3);
});

//shrink-button改变
var firstLine = document.getElementById("first-line");
var secondLine = document.getElementById("second-line");
var shrinkButton = document.getElementsByClassName("shrink-button")[0];
var navigation = document.getElementById("navigation");
var headerMiddle = document.getElementsByClassName("header-middle")[0];
var headerRight = document.getElementsByClassName("header-right")[0];
var headerContent = document.getElementsByClassName("header-content");
var innerPosition = document.getElementsByClassName("inner-position")[0];
var flag = true;
shrinkButton.addEventListener("click", function(){
    if(flag === true){
        flag = false;
        firstLine.classList.add("activeClockwise");
        secondLine.classList.add("activeAntiClockwise");
        navigation.classList.add("expand");
        headerMiddle.classList.add("header-middle-shrink");
        headerRight.classList.add("header-right-shrink");
        innerPosition.classList.add("border-shrink");
        for(var i=0; i<headerContent.length; i++){
            headerContent[i].classList.add("vertical");
        }
        //headerContent 是一个htmlcollection ，无法使用foreach函数
    }else{
        flag = true;
        firstLine.classList.remove("activeClockwise");
        secondLine.classList.remove("activeAntiClockwise");
        shrinkButton.classList.remove("expand");
        navigation.classList.remove("expand");
        headerMiddle.classList.remove("header-middle-shrink");
        headerRight.classList.remove("header-right-shrink");
        innerPosition.classList.remove("border-shrink");
        for(var j=0; j<headerContent.length; j++){
            headerContent[j].classList.remove("vertical");
        }

    }
});

//拉宽网页自动取消shrink模式

window.addEventListener("resize", function(){
    var pageWidth = window.document.documentElement.clientWidth;
    if(pageWidth > 1024){
        firstLine.classList.remove("activeClockwise");
        secondLine.classList.remove("activeAntiClockwise");
        shrinkButton.classList.remove("expand");
        navigation.classList.remove("expand");
        headerMiddle.classList.remove("header-middle-shrink");
        headerRight.classList.remove("header-right-shrink");
        innerPosition.classList.remove("border-shrink");
        for(var j=0; j<headerContent.length; j++){
            headerContent[j].classList.remove("vertical");
        }
    }
});
//鼠标移到导航项上导航条颜色改变
//此处可以使用apply或call绑定this，这个试一下
var navItem = document.getElementsByClassName("header-content");
for(var m = 0; m < navItem.length; m++){
    navItem[m].addEventListener("mouseover", function(){
        nav.style.backgroundColor = "rgb(11, 24, 29)";
    });
}
for(var n = 0; n < navItem.length; n++){
    navItem[n].addEventListener("mouseout", function(){
        nav.style.backgroundColor = "rgb(11, 24, 29)";
    });
}
