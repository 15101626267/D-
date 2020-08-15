/* 
获取元素的css 有两种方法
1、getComputedStyle(ele,null)[attr] 
2、ele.currentStyle[attr] 兼容ie6--ie8
*/

function getCss(ele,attr){
    if("getComputedStyle" in window){
        return  getComputedStyle(ele)[attr];
    }else{
        ele.currentStyle[attr];
    }
}
var box=document.getElementById("box");
var res=getCss(box,"width");


/* 
 通过in 这个方法可以判断某个对象是否包含某个属性，
 语法：[属性] in 对象
 如果返回值是true 就说明这个对象包含此属性，如果是false 就无
*/
// var obj={
//     name:"lili"
// }
// console.log("name" in obj);
// console.log("age" in obj);