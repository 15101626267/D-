(function () {
    var val = 1; // 2
    var json = {
        val: 10,
        dbl: function () {
            // 此处的val 就是变量val，此作用域中无val这个变量，会向上一级查找，（自执行函数中的作用域）
            val *= 2;
        }
    };
    json.dbl();
    // json.val=10   2  10+2=12;// "12"
    alert(json.val + val);
})();