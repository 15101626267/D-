/* 
获取元素的css 有两种方法
1、getComputedStyle(ele,null)[attr] 
2、ele.currentStyle[attr] 兼容ie6--ie8
*/
/* 
 ie8 以上的
*/
function getCss(ele,attr){
    return  getComputedStyle(ele)[attr];
}
/* 
 ie8 以下
*/
function getCss(){
    return ele.currentStyle[attr];
}

function getCss(ele,attr){
    if("getComputedStyle" in window){
        getCss= function(ele,attr){
              return  getComputedStyle(ele)[attr];
        }
    }else{
        getCss=function(ele,attr){
            return ele.currentStyle[attr];
        }
      
    }
    return getCss(ele,attr);
}
var box=document.getElementById("box");
getCss(box,"width");
getCss(box,"height");
getCss(box,"height");

