/* 
高级单例模式
*/


let people1=(function(){
      function fn(){
          console.log("fn")
      }
      return {
         fn:fn
      }
})();


let people2=(function(){
       return {
           init:function(){
               people1.fn();
           }
       }
 })();
 people2.init();


 fn(); // 1

 function fn(){
     console.log(1)
 }
 

 fn();// 报错：fn is not defined
 let fn=function(){

 }
