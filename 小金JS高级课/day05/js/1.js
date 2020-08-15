// ##数据类型
/*  + 基本数据类型
      + number  
      + string
      + boolean
      + null
      + undefined
      + ....
   + 引用数据类型 
      + 对象
      + 函数
   
*/

//=============>
/* 1、一个普通函数在执行的时候，一旦用了new，这个函数就变成了构造函数（类），返回结果（f1）就是当前类的实例
   2、构造函数里面的this就是当前的实例
   3、构造函数中虽然没有return，但是默认返回的就是当前的实例，如果手动更改return，
      return的是基本数据类型的值，还是返回默认的
      return的是引用数据类型的值，返回就是这个引用数据类型
   4、在构造函数中通过this添function Fn(){
//    this.name="lili";
//    this.age=18;
//    return {"name":"xiao"}
// }加的属性都是给实例添加的“私有属性”   
*/
// 
//fn();
// var f1=new Fn();
// console.log(f1.age);
// var f2=new Fn();
//console.log(f2.age)

//============> 普通函数中如果没有return ，返回值就是undefined，如果return了，返回值就是return的内容
// function fn(){
//    // return 100
// }

// var f1=fn();
// console.log(f1)

//============> 判断某个对象是否具有某个（私有）属性
// in  不论是公有还是私有，只要具有此属性，返回值就是true，没有就是false
//hasOwnProperty 判断某个属性是不是对象私有的，如果是私有的返回true，反之返回false
// var obj={
//    name:"lili"
// }
// console.log("name" in obj);
// console.log("age" in obj);

//console.log(obj.hasOwnProperty("name"));// true
//console.log("toString" in obj);// true,说明obj具有toString这个属性
//console.log(obj.hasOwnProperty("toString"));//false,说明不是私有属性


//===========>
// instanceof 用来判断当前实例是不是隶属于某个类，true属于 false 不属于

function Fn(){
   this.name="li",
   this.say=function(){}
}
var f1=new Fn();
var f2=new Fn();
console.log(f1===f2);


console.log(f1 instanceof Fn);



