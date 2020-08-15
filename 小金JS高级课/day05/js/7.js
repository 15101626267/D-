var obj={
    name:"lili"
}
// attr 代表你要检测的属性
Object.prototype.hasPublicProperty=function(attr){
    //  if(attr in this){
    //      return this.hasOwnProperty(attr)?false:true;
    //  }
    //  return false 

     return attr in this?(this.hasOwnProperty(attr)?false:true):false;
}


/* 
obj obj2 都是实例
*/
// obj.hasOwnProperty("name"); 
console.log(obj.hasPublicProperty("toString"));
console.log(obj.hasPublicProperty("name"));
// obj2.hasPublicProperty("toString");