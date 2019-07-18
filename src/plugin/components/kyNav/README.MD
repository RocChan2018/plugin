##kyNav-导航栏
#左边定宽右边自适应宽度
 + HTML布局：容器+左右盒子 div.container>div.left{LOGO}*div.right>li{导航项}*2 + Tab
 ```
    <div class="container">
        <div class="left">
            LOGO
        </div>
        <ul class="right">
            <li>导航项</li>
            <li>导航项</li>
        </ul>
    </div>

 ```
 + CSS样式-将左侧div浮动，右侧div设置margin-left
 ```
    .container{
        margin: 0 30px;
        overflow: hidden;
    }
    .left {
        width: 300px;
        float: left;
    }
    .right {
        margin-left: 300px;
        overflow: hidden;
    }
 ```
 #我们要做一个响应式的导航栏
  1. 在这里我们使用媒体查询 @media，可以针对不同的媒体类型定义不同的样式。

  
```
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .example {background: red;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .example {background: green;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .example {background: blue;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .example {background: orange;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .example {background: pink;}
}
```