var imgUrl = [
  "../img/hengfengbank.png",
  "../img/minshengbank.png",
  "../img/yinlian.png",
  "../img/shanghaibank.png",
  "../img/zhongxinbank.png",
  "../img/guojiadianwang.png",
  "../img/zhengwu.png",
  "../img/qixiangju.png",
  "../img/gonganting.png",
  "../img/shanghaijiaoda.png",
  "../img/meidi.png",
  "../img/oppo.png",
  "../img/baoqianli.png",
  "../img/jingdongfang.png",
  "../img/zhongguodianxin.png",
  "../img/wanda.png"
];

var imgContainer = document.getElementsByClassName("client-img");
console.table(imgContainer);
for(var i =0; i< imgContainer.length; i++){
  imgContainer[i].setAttribute("style", "background-image: url("+ imgUrl[i] +")");
}