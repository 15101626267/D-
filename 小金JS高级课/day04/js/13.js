/* 
Tom.wait();

*/

var name = 'window';
var Tom = {
    name: "Tom",
    show: function () {
        //this===>window
        //          window.name ===>'window'
        console.log(this.name);
    },
    wait: function () {
        // this====>Tom
        //        Tom.show
        var fun = this.show;
        fun();
    }
};
Tom.wait();