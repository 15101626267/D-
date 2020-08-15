function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        //====>f1.x 
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    //===>f1.__proto__  Fn.prototype.x undefined
    console.log(this.x);
};
Fn.prototype.getY = function () {
    //====> this==f2===f2.y
    //===>Fn.prototype==>Fn.prototype.y
    console.log(this.y);
};
let f1 = new Fn;
let f2 = new Fn;

f1.getX(); //100
f1.__proto__.getX();//undefined
f2.getY(); //200
Fn.prototype.getY();// undefined



// 一个是私有  一个是公有
console.log(f1.getX === Fn.prototype.getX);// false
console.log(f1.constructor); // Fn 这个函数
console.log(Fn.prototype.__proto__.constructor);// Object 函数
console.log(f1.getX === f2.getX);//私有属性 所以是false
console.log(f1.getY === f2.getY);// 私有里面无，去找公有
// f1.__proto__=Fn.prototype    
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
//f1.__proto__.getX=Fn.prototype.getX   f2.getX(私有的)
console.log(f1.__proto__.getX === f2.getX); //false
