// 点击更多的相关操作

var more = document.getElementById('more');
var disappear = document.getElementsByClassName('moreDisappear');

more.addEventListener('click', function(e){
  if(e.target.nodeName == 'A'){
    // console.log(e.target.classList);
    e.target.classList.add("moreDisappear");
  }
});

document.addEventListener('click', function(e){
  var len = disappear.length;
  if(e.target.nodeName == 'A' && e.target.classList[0] == 'moreDisappear'){
    return;
  }else{
    for(var i = 0; i < len; i++){
      disappear[i].classList.remove('moreDisappear');
    }
  }
});