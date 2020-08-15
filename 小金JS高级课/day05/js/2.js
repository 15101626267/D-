/* 
  1、每个函数身上都有一个prototype（原型）属性，这个属性值是对象数据类型，主要存放一些公有的属性和方法
  2、prototype 身上有一个属性：constructor，属性值是当前的构造函数（类）
  3、每个对象身上都有一个属性__proto__,它的值指向当前实例所属类的原型

    函数：
      + 普通函数
      + 构造函数
      + 内置类：Array、Number、、、、
    对象：
      + 普通对象、数组、正则、日期....
      + 实例也是对象  
      + prototype 原型也是对象
      + __proto__ 也是对象
      + 函数也是对象...

*/

/* 
 创建数组的两种方式：
   + var ary=new Array(1,2,3); 构造函数
   + var ary3=[4,5,6];// 字面量
*/


// var ary=new Array(1,2,3);
// console.log(ary);//[1,2,3];
// 参数值只要一个整数，代表的是数组的长度
// var ary2=new Array(3);
// console.log(ary2);
// ary2[0]=1;
// ary2[1]=2;
// ary2[2]=3; //[1, 2, 3]
// ary3[3]=4;



var f1=new Array(1,2,3);
var f2=new Array(4,5,6);