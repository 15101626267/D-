//"use strict";

//============> 
//1函数执行，看前面有没有点，如果有，前面是谁，函数中的this就是谁，如果没有，就是window（非严格模式），undefined（严格模式）
// var name="dawei";
// var obj={
//     "name":"lili",
//     fn:fn
// }
// function fn(){
//     // this===>window
//     // this===>obj
//    console.log(this.name)
// }

// fn(); //"dawei"
// obj.fn(); //"lili"


//============>
// 2、 自执行函数中的this，window（非严格模式下），undefined（严格模式下）

// (function(){
//    console.log(this);
// })();

// 3、给页面中的元素绑定事件，当事件触发的时候，函数里面的this就是当前绑定的元素（特殊：dom2级事件ie6-8 除外）
// var box=document.getElementById("box");
// box.onclick=function(){
//     console.log(this);
// }
//4、回调函数中的this 是window（非严格模式），undefined（严格模式）
// 回调函数：把一个函数当成实参传递给另一函数
// function fn(callback){
//         callback();
// }
// fn(function(){
//     console.log(this);
// })

//===========> 
// 5、 构造函数中的this都是当前实例

// function Fn(){
//     this.name="lili";
//     this.age=18;
// }

// var f1=new Fn();
// console.log(f1.name)
// var f2=new Fn();
// 6、箭头函数、块级作用中没有自己的this，this指的是上级作用中的this

// {
//     let a=3;
//     console.log(this);
// }

// 7、基于call/apply/bind可以强制改变THIS

var name="dawei";
var obj={
    "name":"lili",
    fn:fn
}
function fn(x,y){
    console.log(x,y);
   console.log(this.name)
}

/* 
 call(x,y)
 参数 x：要改变的this执行
 参数 y：函数里面要传递的参数
*/

//fn(); //"dawei"
fn.call(obj,10,20); //"lili"
