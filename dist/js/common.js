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
      console.log("start");
      nav.style.backgroundColor = "rgb(11, 24, 29)";
  });
}
for(var n = 0; n < navItem.length; n++){
  navItem[n].addEventListener("mouseout", function(){
      console.log("end");
      nav.style.backgroundColor = "rgb(11, 24, 29)";
  });
}
