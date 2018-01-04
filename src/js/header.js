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