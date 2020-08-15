
function fun(){
    this.a=0;//
    this.b=function(){
        //==>this:f===>f.a===>"0"
        alert(this.a);
    }
}
fun.prototype={
    b:function(){
        this.a=20;
        alert(this.a);
    },
    c:function(){
        //===>this:f
        this.a=30; // f.a=30  // 把小f 里面私有的属性a=0 改成了a=30
        alert(this.a)// "30"
    }
}
var f=new fun();
f.b();
f.c();