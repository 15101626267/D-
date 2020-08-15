function Fn(x,y){
    this.x=x;
    this.y=y;
}

Fn.prototype.mySay=function(){
    console.log(11)
}

var f1=new Fn(1,2);
var f2=new Fn(4,5);
f1.mySay();
f2.mySay();