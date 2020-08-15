/* 
获取元素的css 有两种方法
1、getComputedStyle(ele,null)[attr] 
2、ele.currentStyle[attr] 兼容ie6--ie8
*/

var flag="getComputedStyle" in window;

function getCss(ele,attr){
    if(flag){
        return  getComputedStyle(ele)[attr];
    }else{
       return ele.currentStyle[attr];
    }
}
var box=document.getElementById("box");
getCss(box,"width");
getCss(box,"height");
getCss(box,"height");

