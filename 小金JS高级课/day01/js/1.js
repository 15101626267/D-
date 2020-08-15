// var A=Symbol("fn1");
// var objRender={
//      fn1:function(){console.log(1)},
//      "name":"lili"
// }

// objRender.fn1=function(){console.log(2)};



// {fn1: ƒ, name: "lili"}




// var A=Symbol("fn1");
// var objRender={
//      fn1:function(){console.log(1)},
//      "name":"lili"
// }

//  objRender[A]=function(){console.log(2)};

//  objRender[A]();
var a="fn"
var obj={"name":"lili","fn":1,"a":2};
console.log(obj[a]);// obj["fn"] 1
console.log(obj.a); // 2