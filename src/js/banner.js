(function(){
  var intro = document.getElementById('banner-intro');
  var content = document.getElementById('banner-content');
  var image = document.getElementById('banner-image');
  var secondLink = document.getElementsByClassName('second-link');
  var thirdLink = document.getElementsByClassName('third-link');
  var fourthLink = document.getElementsByClassName('fourth-link');
  var button = document.getElementById('banner-button');
  var link3 = document.getElementById('link3');
  var link4 = document.getElementById('link4');
  
  
  var title = document.title;
  var url = data[title]['url'];
  var flag = data[title]['button'];

  if(data[title]['grandpa']){
    link3.style.display = 'none';
    fourthLink[0].innerHTML = document.title;
    thirdLink[1].innerHTML = data[title]['parent'];
    secondLink[1].innerHTML = data[title]['grandpa'];
  }else{
    link4.style.display = 'none';

    thirdLink[0].innerHTML = document.title;
    secondLink[0].innerHTML = data[title]['parent'];
  }
  
  
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




