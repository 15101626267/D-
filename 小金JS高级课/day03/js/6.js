debugger;
var x=1;
function func(x,y=function anonymous1(){x=2}){
   var x=3;
   
    y();
    console.log(x);
}
func(5);
console.log(x);


//===========>

// function fn(x,y=2){
//    return x+y;
// }
// var res=fn(1);
// console.log(res);