// function fn(...arg1){
//    return function(...arg2){
//        var total=0;
//           arg1.concat(arg2).forEach(function(item,i){
//                    total+=item
//           });
//           return total;
//    }
// }

function fn(...arg1){
   return function(...arg2){
        return  eval(arg1.concat(arg2).join("+"))
   }
}

var res=fn(1,2);
console.log(res(3,4));
// res(5,6);
// res(1,1)


