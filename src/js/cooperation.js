// 点击更多的相关操作

var moreWrapper = document.getElementById('moreWrapper');

var more = moreWrapper.getElementsByTagName('a');

moreWrapper.addEventListener('click', function(e){
  if(e.target.nodeName == 'A'){
    var len = more.length;
    for(var i = 0; i < len; i++){
      more[i].classList.add("moreDisappear");
    }
    displayAll(e);
  }
});

document.addEventListener('click', function(e){
  var len = more.length;
  if(e.target.nodeName !== 'A'){
    for(var i = 0; i < len; i++){
      more[i].classList.remove("moreDisappear");
    }
    hideAll();
  }
});

function displayAll(e){
  var target = e.target.parentNode.getElementsByTagName('div')[0];
  target.classList.add('coVisible');
}

function hideAll(){
  var visible = document.getElementsByClassName('coVisible')[0];
  visible.classList.remove('coVisible');
}