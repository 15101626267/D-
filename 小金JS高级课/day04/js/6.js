/* 
把嵌套的多层函数实现扁平化 compose 思想

*/
const fn1 = (x,y) => x +y+ 10;
const fn2 = x => x - 10;
const fn3 = x => x * 10;
const fn4 = x => x / 10;
function compose(...arg1){
    // arg1=[fn1,fn3,fn4,fn2];
    return function(...arg2){
        //[10,1]
        if(arg1.length==1){
          return arg1[0](...arg2);
        }
        if(arg1.length==0){
           return arg2;
        }
      return  arg1.reduce(function(pre,next){
              /* 
                第一次： pre 10  next fn1  
                        fn1(10)==20
                第二次：pre 20   next fn3
                       fn3(20)== 200
                第三次：pre：10  next：fn4
                       fn4(10) 
                .....             
              */     
              if(Array.isArray(arg2)){
                   return  next(...pre);
              }else{
                  return  next(pre);
              }
             
        },arg2)
    }
}


fn2(fn4(fn3(fn1(10))));
console.log(compose()(10,1))

arg1=[fn1,fn3,fn4,fn2];