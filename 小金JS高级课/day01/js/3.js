// var ary=[4,5,6];
// var res=ary.map(function(a,b){
//     return item+"你好呀"
// });
// console.log(res);


let arr = [10.18, 0, 10, 25, 23];
arr = arr.map(parseInt);
console.log(arr);

// ary.map(function(str,stir){})

/* 
parseInt(10.18,0);  10==>10
parseInt(0,1);   进制数除了0或者是不写，有一个范围 2 ~ 36 ，不在这个范围：NaN
parseInt(10,2);  10===》1*2^1(2)+0*2^0=2
parseInt(25,3);  2===> 2*3^0=2
parseInt(23,4);  23===>2*4^1(8)+3*4^0(3)=11


*/