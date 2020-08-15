function fn(...arg1){
   return function(...arg2){
       var total=0;
          arg1.concat(arg2).forEach(function(item,i){
                   total+=item
          });
          return total;
   }
}

var res=fn(1,2);
res(3,4);
res(5,6);
res(1,1)


