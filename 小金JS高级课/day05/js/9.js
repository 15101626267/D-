var obj={
    name:"li"
}

Object.create(null);// 创建一个空对象，什么都没有，也没有原型链
var res=Object.create(obj);//创建一个空对象，并且让这个空对象的__proto__ 指向你传进去的对象（参数）

