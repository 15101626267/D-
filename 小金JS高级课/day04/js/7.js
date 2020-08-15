
// var a=2;
// a=3;
// console.log(a);

// let a=2;
// a=3;
// console.log(a);

/* 
  const 定义的是常量，这个值定义过一次之后，就不能再修改了
*/
// const a=3; //Assignment to constant variable.
// a=6;

// console.log(a);// undefined
// var a=3;
//=====> let const 声明的变量 无变量提升
// console.log(a); //a is not defined
// let a=3;


//==========> es6 里面有块级作用域的概念，在块级作用域外面是获取不到里面的变量的，里面的是私有的
// 除了函数、对象，其它的{}，比如：for循环里面的{}
// {
//     var a=3;
// }
// console.log(a); //3


// {
//     let a=3;
// }
// console.log(a); //a is not defined

//===========> let 声明的变量不能重复声明，在es6语法中，虽然没有变量提升，但是有一个此法检测阶段，在代码还没自上而下执行呢，如果检测出来有重复声明的变量，就直接报错，下面的ok并不会打印出来


// console.log("ok");
// let a=3;      //Identifier 'a' has already been declared
// var a=5;

//=============>es6 中有"暂时性死区”的概念，在遇到声明变量之前，不能使用（访问）此变量，使用的话就会报错，直到遇到那行代码了，就可以了。而且还解决了之前的一个问题，typeof 


// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // Cannot access 'tmp' before initialization
//   let tmp;
  
// }

//console.log(typeof a);//undefined

//console.log(a);//a is not defined

console.log(typeof a); // a is not defined
let a;