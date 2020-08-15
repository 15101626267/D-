/* 
obj.prop.getFullName()
里面的this：obj.prop

test()====》this 是window

*/

var fullName = 'language';
var obj = {
    fullName: 'javascript',
    prop: {
        getFullName: function () {
            //obj.prop.fullName ====>没有fullName这个属性====undefined
            // return window.fullName====>"language"
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());