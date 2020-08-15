function fn(...arg1){
      //arg1[1,2,3,4]
   return function(...arg2){
       // arg2 [10,20]
       var total=0;
      //console.log(arg1.concat(arg2) ) //[ 1, 2, 3, 4, 10, 20 ]
          arg1.concat(arg2).forEach(function(item,i){
                   total+=item
          });
          return total;
   }
}

var res=fn(1,2);
console.log(res(3,4));


