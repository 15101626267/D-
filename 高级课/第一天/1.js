/*
基本数据类型(值类型/原始值类型)
  - number  Infinity无穷大
  - string
  - boolean
  - null
  - undefined
  - symbol
  - bigint
引用数类型
  - 对象数据类型
    + object
    + 普通对象
    + 实例对象
    + 数组对象 Set
    + 正则对象 
    + 日期对象
    + prototype原型对象
  - function
*/

//Symbol([value]):创建唯一值
//console.log(Syblo('A')==Symbol9('A'));

//Bigint:大数据值
//JS存在最大和最小的安全数
//console.log(Number.MAX_SAFE_INTEGER);
//console.log(Number.MIN_SAFE_INTEGER);

// 数据类型检测
// - typeof
//   检测数来的结果用字符串表示，
//   null的结果是'object',bug
// - instanceof
// - constructor
// - Object.prototype.toString.call([value])