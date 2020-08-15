var obj={"name":"lili","age":13};
var a=Symbol("a");
obj[a]="ff";

for(var key in obj){
   console.log(key);
}

console.log(obj[a]);