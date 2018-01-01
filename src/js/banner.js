var intro = document.getElementById('banner-intro');
var content = document.getElementById('banner-content');
var image = document.getElementById('banner-image');

var title = document.title;
var url = data[title]['url'];
console.log(data[title]);

intro.innerHTML = data[title]['title'];
content.innerHTML = data[title]['content'];
// console.log(data[title][title]);
// console.log(data[title][content]);
image.setAttribute('src', url);


