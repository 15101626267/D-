var ary=[4,5,6,7,8];
/* 
 reduce 有两个参数：
 + 回调函数，回调函数里面有两个参数：
    - pre：上一项
    - next：下一项
     在回调函数中，return 什么就会作为下次的pre，如果没有return 下次的pre就是undefined
 + 第二个参数可以修改第一次的pre    
*/
ary.reduce(function(pre,next){
   console.log(pre+":"+next)
   return pre+next;
   
},100);


