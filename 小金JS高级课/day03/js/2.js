
var a=1;
var obj ={
   name:"tom"
}
function fn(){
   var a2 = a;
   obj2 = obj;
   a2 =a;
   obj2.name ="jack";
}
fn();
console.log(a);
console.log(obj);