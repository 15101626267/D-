/* 
 需求：写一个类似于hasOwnProperty方法，用来检测某个对象是否具有的那个属性是不是公有的
  比如说 hasPublicProperty
  返回值：布尔
   
  判断：
  1、属性不论是公有还是私有的，起码得是那个对象的属性（in）
  2、不是私有的，就是公有的
  


*/

var obj={
    name:"lili"
}
var obj2={}
// attr 代表你要检测的属性
Object.prototype.hasPublicProperty=function(attr){
     //===>this 就是你当前的调用的那个实例
     // "name" in obj(obj)
     if(attr in this){
         // 说明起码有这个属性（无论是公有还是私有）
         // 如果不是私有的就是公有的
         if(this.hasOwnProperty(attr)){
            return false;
         }else {
            return true;
         }
     }else{
         // 没这个属性，直接返回false
        return false 
     }
}
/* 
obj obj2 都是实例
*/
// obj.hasOwnProperty("name"); 
console.log(obj.hasPublicProperty("toString"));
console.log(obj.hasPublicProperty("name"));
// obj2.hasPublicProperty("toString");