## 2017.11.2
1. background-size: cover; `拉伸图片以适应容器元素`
2. background-size: contain;`压缩图片以适应容器元素`
3. rgba(11,24,29,0.8);`设置透明背景颜色需要使用这种方法`
4. top: 50%;transform: translateY(-50%);`垂直居中`
5.  `background-image: url(../img/logo1.png);`换成简写形式试一下
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
6. 网页头部三栏情况：第一栏：绝对位置，移动定位；第三栏：绝对位置，移动定位；第二栏块级元素居中。
7. box-sizing: border-box;
8. section#superiority>div+div{}`选中除第一个子元素的所有子元素`
9. section#superiority div div.hold-text p:nth-child(1){}`对子元素p的第一个进行操作`
10. 两个display: inline-block;的父元素，要想垂直定位其中的元素，可以vertical-align: 某个值；然后再用父元素的padding-top进行偏移。（vertical-align针对inline元素中的内容，因此上述操作可行）。

## 2017.11.3
1. text-indent 属性设定行内盒子相对于包含元素的起点。这个属性设置在包含元素上（块级元素才会对其中的文本产生效果）
2. ![文本快](https://i.imgur.com/PiGF1Eo.jpg)文本包含在span元素中，此时如果将span设置为inline-block，将不能折行，而且在这个页面里，前面的蓝点和文本将位于不同的行。所以，折行自然的方式还是要靠inline的默认方式。
3. 下面这种两列居中方式
    section#goodness div.content{
    text-align: center;
    
    }
    section#goodness div.content div.hold-text{
    display: inline-block;
    vertical-align: top;
    
    }
    section#goodness div.content div.hold-image{
    display: inline-block;
    }

4. ![绝对定位参考](https://i.imgur.com/mUmdZHB.jpg)这两个引号是通过为元素插入的，进行了绝对定位，但是搞不清楚是相对谁进行的定位。
5. margin-bottom: 12px;某个父元素的的最后一个子元素设定上述值后，外边距在父元素边框外。原因？边距重叠？
6. 页面最后的颜色使用渐变，这个还没完成。**完成。**


## 2017.11.6
1. a元素要加上href属性才能被点击。
2. 设置为绝对定位后，块级元素变成包裹型的。
3. 轮播图的实现：  
    > 1.外框：宽度100%，overflow：hidden，position：relative  
    > 2.内框：宽度：200%， position：absolute，设置位移值  
    > 3.内框内并排两个要显示的内容，比如图片  
    > 4.内框同时设置 transition：all 1s 用于控制动画时间  
    > 5.在js文件中控制选择点击事件，回应相应的按钮点击赋予相关位移值或类名（这里直接设置位移值）  

4. 点击按钮的实现：
    > 1.外框包裹两个并排显示的div  
    > 2.每个div内各自含有一个a元素用来点击  
    > 3.div背景颜色设置为白色，a背景颜色设置为灰色（注意这个颜色设置！！！默认加载网页左侧按钮显示为白，为了能让右侧按钮可以点击，这样设置才是合理的）  
    > 4.设置a元素起始margin-left（注意此处选择a使用的是id选择器，层级等级高于类选择器）  
    > 5.使用animation设置进入的动画，放在通用的类名中。animation-fill-mode设置为forwards，这样能够让效果保持在动画结束的状态（注意！！！瞬间改变的style语句后面加了！important，这是因为上面层级的原因）  
    > 6.在js文件中控制选择点击事件，回应相应的按钮点击添加相应的类名

5. css动画效果1：目前使用了transition：all 1s，**设置在原始值所在位置**。
6. css动画效果2：animation目前用到的有**animation-duration**: 1s; **animation-name**: sliderightin;  **animation-fill-mode**: forwards;  **关于动画效果周末还要再看一下**
7. autoprefixer这个周末要看一下。

## 2017.11.7
1. linemove的动画使用animation-fill-mode默认值，在动画结束后鼠标没有移开时，仍能保持动画结束的状态，目测这是hove和active（上面的）的区别。
2. linemove设置背景颜色的动画默认就是从中间向两边变化，**为啥？**解释如下：设置auto的一边的宽度是根据盒模型计算出来得到的，可变；而没有设置auto的一边宽度是固定的，默认值，就会出现这种效果。  
    > div {  
    >   background-color: gray;  
    >   width: 200px;  
    >   height: 30px;  
    > }
    > 
    > span {  
    >   display: block;  
    >   height: 30px;  
    >   width: 200px;  
    >   margin-left: auto;  （这里的margin可以控制线条滚动的方向，左右都设置auto从中间向两侧滚动，光左侧设置为auto从右侧向左侧滚动，光右侧设置为auto从左侧向右侧滚动（默认））  
    >   margin-right: auto;  
    > }
    > 
    > div:hover span {  
    >   animation-name: linemove;  
    >   animation-duration: 1s;  
    >   background-color: blue;  
    > }  

3. 渐变色  
background: linear-gradient(to bottom, #020515, #06223f);括号中的分别表示渐变方向、起始颜色、终点颜色。
4. 页面滚动   
**1-**页面滚动使用scrollTop属性，scrollTop属性表示被隐藏在内容区域上方的像素数。元素未滚动时，scrollTop的值为0，如果元素被垂直滚动了，scrollTop的值大于0，且表示元素上方不可见内容的像素宽度。[点击这里](http://www.cnblogs.com/xiaohuochai/archive/2016/09/03/5836179.html)     
**2-**chrome和safari使用**document.body.scrollTop**，其他浏览器使用**document.documentElement.scrollTop**。滚动的兼容性写法：  
    var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
**3-**document.documentElement返回的是文档对象的根元素，html。[点击这里-mdn-document.documentElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement)  
**4-**Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。一个元素的 scrollTop 是可以去计算出这个元素最高高度距离它容器顶部的可见高度。当一个元素的容器没有产生垂直方向的滚动条,那它的 scrollTop 的值默认为0。[点击这里-mdn-scrollTop](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop)  
5. 页面滚动持续一段时间的效果  
    > goToTop.addEventListener("click", function () {  
    > var goback = document.documentElement ||document.body;  
    > var time = setInterval(function () {  
    > 	goback.scrollTop -= 50;  
    > 	console.log(goback.scrollTop);  
    > 	if(goback.scrollTop <= 0){  
    > 	clearInterval(time);  
    > }  
    > }, 3);  
    > });  

## 2017.11.10
1. nth-child和nth-of-type的区别  
**nth-of-type:**matches one or more elements of a given type, based on their position among a group of siblings.  
`p:nth-child(2)`  要满足2个条件：1.是p元素；2.位于子元素集合中的第二个  
**nth-child:**matches one or more elements based on their position among a group of siblings.
`p:nth-of-type(2)`  要满足1个条件：p元素集合中的第二个 
2. [两栏布局，左侧固定宽度，右侧自适应大小](http://blog.csdn.net/u012193330/article/details/51550033)  
方法一： 
    .left{  
    width: 300px;  
    height: 100%;  
    float: left;  
    }  
    .right{  
    height: 100%;  
    margin-left: 300px;  
    }  

3.

