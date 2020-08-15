var res=function(x,y){
    console.log(1)
}

var res=(x,y)=>{
    console.log(x+y);
}
/* 
 如果只有一个参数，小括号可以省去
*/
var res=x=>{
   return x+y;
}

/* 
  如果执行体里面return 一句代码，大括号和return 都可以省去
 */
var res=x=>x+y;
    
