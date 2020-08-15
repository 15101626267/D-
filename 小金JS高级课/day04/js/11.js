

let obj = {
    fn: (function () {
        return function () {
            console.log(this);
        }
    })()
};
/* 
obj.fn   return f
*/
obj.fn(); // obj
let fn = obj.fn;  //f
fn(); //f()  // window (非严格模式下)