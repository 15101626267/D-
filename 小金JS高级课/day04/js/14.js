

window.val = 1;//====>2===>4
var json = {
    val: 10, // 20
    dbl: function () {
        //this==>json json.val*=2
        // this==>window window.val*=2
        // this==>window window.val*=2
        this.val *= 2; 
    }
}
json.dbl();
var dbl = json.dbl;
dbl();
json.dbl.call(window);
//4+20=24  ==>"24"
alert(window.val + json.val);

var obj={}

/* 
 作用域：es6 之前：
    + 全局作用域
    + 函数
 es6：
    + 全局作用域
    + 函数
    + 块级作用域：（除了函数和普通对象，看到{}）

*/

