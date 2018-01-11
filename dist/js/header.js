var target = document.getElementById("headTarget");
var children = target.getElementsByTagName("ul");


target.addEventListener("mouseover", function(e){
  var child = isChild(e.target, "A");
  var value = child? getValue(e.target): void 0;
  console.log(value);
  if(value){
    hideAll();
    showOne(value);
  }
});


function isChild(node, ele){
  return node && node.nodeName == ele;
}

function getValue(node){
  return node.getAttribute("value");
}

function hideAll(){
  Array.prototype.map.call(children, function(val){
    val.setAttribute("style", "display: none;");
  });
}

function showOne(value){
  Array.prototype.map.call(children, function(ele){
    var mark = ele.getAttribute("value");
    console.log("mark: " + mark + "/ value: " + value);
    if(mark === value){
      ele.setAttribute("style", "display: block;");
    }
  });
}

// 手机模式下导航条箭头状态改变
var arrow = document.getElementsByClassName("header-toggle");
Array.prototype.map.call(arrow, function(ele){
  ele.getElementsByTagName("span")[0].setAttribute("data-content", "");
});
var arrowLen = arrow.length;
for(var i = 0; i < arrowLen; i++){
  arrow[i].addEventListener("click", function(e){
    var span = e.target.getElementsByTagName("span")[0];
    var toggle = e.target.getAttribute("toggle");
    var ul = e.target.parentNode.getElementsByTagName("ul")[0];
    console.log
    if(toggle == 0){//此处要加上屏幕尺寸的判断
      span.setAttribute("data-content", '');
      e.target.setAttribute("toggle", "1");
      ul.setAttribute("style", "display: none;");
    }else{
      span.setAttribute("data-content", '');
      e.target.setAttribute("toggle", "0");
      ul.setAttribute("style", "display: block; position: static;");
    }
    
  });
}
