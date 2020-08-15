/* 
EC（g）
    VO：
      X=1
      function func：func
*/
var x=1;
/* 
func(5)
EC(func5)
  AO:
    x:5  ===> 3===>2
    y:anonymous1
   
*/
function func(x,y=function anonymous1(){x=2}){
    x=3;
    /* 
      EC(y)
        AO:
        x=2;
    */
    y();
    console.log(x); // 2
}
func(5);
console.log(x); //1