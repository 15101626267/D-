/* 
 有一个函数，里面有形参：
 1、形参只有一个赋值默认值
 2、在此作用域中出现了let、var、const...(出现过私有变量的这种行为),一般情况下function，但是如果function的名字本身也是形参，并且赋值过默认值。
 就会产生两个作用域，会把{}部分再生成一个块级作用域。
*/


/*
EC(g) 
  VO：x=1
      func=func
*/

var x=1;
/* 
  func(5)
  EC(func) 
    AO:
      x=5==3===2
      y=anonymous1


*/
function func(x,y=function anonymous1(){x=2}){
   var x=3;
   /* 
    y()
    EC(y)
     AO:
       x=2;
   
   */
    y();
    console.log(x); // 2
}
func(5);
console.log(x); //1


