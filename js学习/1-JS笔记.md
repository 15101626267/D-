- import  导入 
- 给客户看的
  + alert 浏览器弹出框，只有确定按钮，都会被转化为字符串toString
    + confirm 增加了取消  点击确当接收true 点击取消接受false
      + prompt  增加让用户输入  点击取消获取null  点击确定获取输入内容 没有内容时空字符串
# 控制台输出：方便开发人员调试
  - Elements 元素 可以查看页面的结构样式，还可以进行调试
  - Console 控制台 
    - console.log 在控制台输出 不会转换数据类型
    - console.dir 输出的更详细
    - console.table 把js数据展示为一个表格
  - Sources 当前页面所以html和css源代码
  - NetWork 数据请求
# JavaScript  一门客户端语言，不仅要操作浏览器的某些功能，还有操作页面中的dom元素
  - ECMAScript(ES) 规范了js的一些基础核心知识（变量、数据类型、语法规范、操作语句）3/5-6/7
  - DOM document object model 文档对象模型 属性和方法 操作页面的元素
  - BOM browser object model 浏览器对象模型 操作浏览器
  - 变量 值是可以改变的
    + var 变量名 = 值； ES6 用let   
  - 常量 只是不可以改变的  用const
# js中创建变量的方式
- var 声明一个变量（es3）可以重复创建
- function  声明一个函数（es3）
- const 声明一个常量 （es6）
- let 声明一个变量（es6）不允许重复创建
- class 创建一个类（es6）创建的时候必须赋值
- import 基于es6的模块，导入需要的信息（es6）
# js命名规范
  - 严格区分大小写
  - 驼峰命名法
  - 下划线、字母、数字、$ 数字不可以开头
    + $开头的一般都是应用JQ获取到的值
    + _开头 全局或公用的变量
  - 关键字和保留字不可以随便命名
  - 用英文单词 不要使用拼音 不是所有单词都可以简写
    + info  information 信息
    + in  initialization 初始化
    + remove/rm/claear/del/delete 删除
    + update修改
    + get/query/select 查询获取
# 基本数据类型
  - number 数字 [] = 0
      - console.log(Number(null))  // 0
      - console.log(Number(undefined))  // NaN
      - console.log(Number( {} ))   // 对象转字符串都是"[object Object]" 再转数字就是 NaN
      - console.log(Number（[1,2,3])) // 数组转字符串'1,2,3'  再转数字就是NaN
      - console.log(Number（[]))   // <!-- 空数组转字符串是'' 再转数字是0 -->
      - console.log(Number（[1，{}])) //"1,[object Object]"  再转数字就是NaN
    + parseInt：从左到右查找有效数字，非有效为止，不识别小数
    + parseFloat：识别小数
    + toFixed：他的返回值是一个字符串，可以保留小数位  console.log(num.toFixed(2))
    - isNaN 不是有效数字时true 是有效数字时false
  - string 字符串  ''  ""
    + 其他数据类型转字符串 val.toString
      - num数据类型转字符串，就是加个引号
      - null和undefined不能直接调用tosSring  需要加一个空字符串，拼接
      - 所有的对象转字符串 都是"[object Object]"
      - 数组转字符串 也是加一个引号
      - 空数组转字符串是空字符串
  - booleam 布尔 
    - false  只有 0 NAN '' null undefined五个
    - !  取反  !=不等于
  - null 空对象指针
  - undefind 未定义
  - symbol 创建唯一值
  ## 四则运算  转num在运算
    - 出现NaN了，结果一定是NaN
    - 加法出现+和字符串相遇了，就拼接
    - 拼接过程中出现引用值转字符串后在拼接
# 引用数据类型
  -  对象数据类型
    + object{ } 普通对象 
      - 又0到多组键值对组成，逗号隔开。每一个键值对都是由属性名和属性值组成，属性值必须是js数据类型的一种
      - var obj = {name:'gxy',age:8}  console.log（obj.name）  console.log（obj['name']）不存在就是undefined 
      - 有则修改，无责新增   
      - 假删除，赋值为null   真删除delete对象.属性名 
    + [ ] 数组
      - 每一项都是属性值，属性名是浏览器默认生成的，0开始递增，最后一项为ary.length-1称为索引
      - 天生自带一个length属性，属性值代表数组的长度
      - 末尾新增 一项ary[ary.length] = xxx
      - 末尾删除，实际就是不显示了 ary.length=arylength-1
    + /^$/ 正则
    + math 数学对象  Math.round(3.14) 取整四舍五入 
    + Date的实例，时间
  - 函数数据类型
    - function fn(){}
    - 类
# 基本数据类型和引用数据类型的区别
  - 基本数据类型存储在栈内存里是  变量：值
  - 引用数据类型存储在栈内存里是  变量；空间地址（空间地址里面是值）
  - 修改的是栈内存里面的值和空间地址里面的值  新增变量时才会新增空间地址
# 数据类型的比较
  - = 赋值  == 比较  ===
  - 除对象外都转数字再比较 <!-- 空数组转字符串是'' 再转数字是0 -->
  - 对象 == 数字  转数字在比较  所有的对象转字符串都是"[object Object]" 再转数字就是 NaN
  - 对象 == 对象  比较的是空间地址
  - 对象 == 字符串 转为字符串在比较
  - 字符串之间比较的是ASCII码  按第一位顺序比较，'9'>'11'
  - null == undefined 除本身外和谁都不相等
  - NaN和谁都不等 包括自己
# 逻辑运算符
  - && 与  前面转布尔市true，取后面的值，false取自己
  - || 或  前面转布尔是true取前面的，false取后面的
  - % 取模 取余数
  - +=/-=  累加累减
  - i++/i--  先取值后运算
  - ++i/--i  先运算后取值
# null和undefined的区别
  - null  坑都没挖  暂时没有 预期中以后会有也会没有
    - 创建一个变量，手动赋予
    - 通过id名获取不到元素
  - undefined 完全没在预料之内
    - 获取不到属性值
    - 实参不给形参赋值
    - 函数执行时没有return
  - ''  挖坑没种东西  消耗了一丢丢内存
  - 0
# 三个判断
  ## if条件判断语句
  - if(条件1){条件1成立时执行的操作}    转为布尔类型，判断真假决定是否成立
  - else if(条件2){条件2成立时执行的操作}
  - else{以上条件都不成立时执行的操作}
  - 多个条件成立时，值执行第一个条件，后面忽略
  - 如果if后面只有一行代码，可以省略大括号
    ### 三元运算符 
    - 条件？条件成立做什么事：条件不成立做什么，可以拿null占位
    - num<5?num++:num--; 
    - 想做多件事的时候可以用小括号括起来，逗号分隔，小括号里可以嵌套if
  ## switch case  
    let num = 10;
    <!-- 值、变量、运算 -->
    swith(num){
      <!-- case放值，和num做对比 -->
      case 1：
      console.log(1)
      <!-- 结束当前判断 下面不执行 每一个case后面都要跟一个break-->
      break;
      <!-- 等于else -->
      default:
    }
    - 不加break小应用 把符合某几项都去做同一件事情
  ## for(设置循环初始值，设置循环执行条件，步长累加){循环体：重复做的事情}
    <!-- 条件成立，执行循环，不成立循环结束 -->
    let ary = [1,2,3]
    <!-- for循环执行不完，下面的代码不会执行，会阻塞线程 -->
    for(var i = 0;i<ary.length;i++){
    console.log(ary[i]);    
    }
    continue；<!-- 结束本轮循环 以下的代码不会执行 执行下轮循环-->
    break;<!-- 结束整个循环，后面代码不执行了，步长累加也不执行了 -->
  ## for in 输出每一个对象的属性名
    let obj = {
      name:1,
      age:2,
      sex:'boy'
    } 
    for(var i in obj){
      <!-- 输出每一个对象的属性名 -->
      console.log(i)
      <!-- 如果获取的属性名是数字或者变量，只能用[] -->
      <!-- 输出每一个对象的属性值 -->
      console.log(obj['key'])
    }
    ## while 一般用于不知道循环多少次的循环——死循环
    let a = 0;
    while(a<6){
      console.log(1)
      a++
    }
    console.log(a)
# JS检测方式
  - typepof 检测数据类型的运算符  返回的结果是一个包含值所属类型的字符串
    + 他的返回值是一个字符串
    + 字符串里的内容就是当前值的类型
    + typeof的局限性：不能够区分 null、普通对象、数组，因为他们的返回值都是 'object'
      - console.log(typeof 1)                 // 'number'
      - console.log(typeof '1')               // 'string' 
      - console.log(typeof undefined)         // 'undefined'
      - console.log(typeof true)              // 'boolean'
      - console.log(typeof null)              // 'object'
      - console.log(typeof ({name:1,age:2}))  // 'object'
      - console.log(typeof [])                // 'object' 
      - console.log(typeof typeof 1)          // 两次以上都是'string'
  - instanceof 检测某个实例是否属于这个类
  - constructor 获取当前实例的构造器
  - object.prototype.toString.call 获取当前实例的所属类信息，检测数据类型最好的方式
# 函数
  - 每一次执行都是相互独立的
  <!-- 形参 -->
  - function num(n,m){
      let sum = n + m;
     sum = sum/2;
     console.log(sum);
    }
    <!-- 实参 -->
    sum(10,12)
  ## return
    - 函数里面的东西是私有作用域，外边拿不到,不用会undefined
    - return出来的是一个值，和任何变量无关 
    function num(n,m){
      let total = n + m;
      total = total/2;
      <!-- 下面的代码不再执行， -->
      return total
    }
    console.log(sum(10,12))
  ## 匿名函数
    - 自执行函数
      - (function(m){
          console.log(m)
        })(200)
        +function(){}()
        -function(){}()
        !function(){}()
        ~function(){}()
    - 函数表达式
      + function fn(){}
      <!-- 与上面一样，写法不一样而已 -->
      + let fn = function(){}
        <!-- 给box附加点击属性 -->
        - box.onclick = function(){}
    <!-- onload对应的事件会在页面代码全部加载完之后再执行 -->
    - window.onload = function(){}