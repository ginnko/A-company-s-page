(function(){
  var intro = document.getElementById('banner-intro');
  var content = document.getElementById('banner-content');
  var image = document.getElementById('banner-image');
  var secondLink = document.getElementById('second-link');
  var thirdLink = document.getElementById('third-link');
  var button = document.getElementById('banner-button');
  
  
  var title = document.title;
  var url = data[title]['url'];
  var flag = data[title]['button'];
  
  thirdLink.innerHTML = document.title;
  secondLink.innerHTML = data[title]['parent'];
  intro.innerHTML = data[title]['title'];
  writeInContent();
  // console.log(data[title][title]);
  // console.log(data[title][content]);
  image.setAttribute('src', url);
  if(!flag){
    button.setAttribute('style', 'display: none;');
  }

  window.addEventListener("resize", function(e){
    writeInContent();
  });

  function writeInContent(){
    if(window.document.documentElement.clientWidth <= 1025){
      content.innerHTML = data[title]['min-content'];
    }else{
      content.innerHTML = data[title]['content'];
    }
  }

}());




