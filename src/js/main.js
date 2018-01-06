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






