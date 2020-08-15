// let n = 10;
// let m = n.plus(10).minus(5);
// console.log(m);//=>15（10+10-5）


Number.prototype.plus=function(val){
    // this 就是当前的实例
    return this+val;
}
Number.prototype.minus=function(val){
    // this 
    return this+val;
}
let n=10;
let res=n.plus(10).minus(5);// 只要函数执行完毕之后的返回结果，它的原型上还有下个调用的那个方法，就可以直接连在一起去写，链式写法；




var ary=[1,2,3];
//[3,2,1] [ 3, 2, 1, 4, 5, 6 ]
var res=ary.reverse();
var aa=res.concat([4,5,6])
/* 
push 的时候返回值是新数组的长度，所以返回值是一个数字，数字没有concat 
*/
ary.reverse().concat([4,5,6]) // 正确
ary.reverse().push(8).concat([4,5,6]);// 错误


