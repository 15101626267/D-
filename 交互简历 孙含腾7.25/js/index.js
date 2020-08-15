$(function () {
    // loading 区域
    let loadingRender = (function () {
        let $wrap = $('.wrap'),
            $loading = $wrap.find('.loading'),
            $progressWrap = $loading.find('.progressWrap'),
            $progressIn = $progressWrap.children('.progressIn'),
            ary = ['phone-bg.jpg', 'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'],
            // 记录已经加载图片的张数
            n = 0,
            imgTotal = ary.length,
            delayTimer = null;

        // 进度条加载的业务逻辑
        function progressLoad() {
            ary.forEach(function (item, i) {
                // 创建img标签元素,获得全部图片
                var img = new Image();
                img.src = `images/${item}`;
                // 当图片加载成功之后,n有几，就加载几次,进度条宽度也随之不断改变
                img.onload = function () {
                    n++;
                    $progressIn.css('width', `${n / imgTotal * 100}%`);
                    // 说明已经加载完毕
                    if (n >= imgTotal) {
                        clearTimeout(delayTimer);
                        delayTimer = null;
                        $progressIn.css('width', '100%');
                        // 加载成功后做的事
                        done();
                    }
                }
            });
            // 如果已经加载10秒还没加载完，弹出温馨提示
            delayTimer = setTimeout(function () {
                if (n / imgTotal < 1) {
                    alert('当前网速太差，继续等候或稍后重试')
                }
            }, 10000);
        }
        // 成功后要做的事情
        function done() {
            $loading.fadeOut();
            $loading.remove();
            phoneRender.init();
        }
        return {
            // 初始化函数
            init: function () {
                // 让当前区域显示
                $loading.show();
                // 进度条的逻辑
                progressLoad();
            }
        }

    })();
    loadingRender.init();

    // phone 区域
    let phoneRender = (function () {
        let $phone = $('.phone'),
            $listenWrap = $phone.find('.listenWrap'),
            $answerWrap = $phone.find('.answerWrap'),
            $redMark = $answerWrap.find('.redMark'),
            $bellAudio = $phone.find('#bellAudio'),
            $sayAudio = $phone.find('#sayAudio'),
            $telMark = $listenWrap.find('.telMark'),
            $time = $phone.find('.time'),
            timer = null,
            currentTime = null,
            duration = null;

        // 点击绿色电话的操作
        function greenTelFn() {
            // 电话铃声停止
            $bellAudio[0].pause();
            // 打电话区域消失
            $listenWrap.hide();
            // 让键盘区域从下往上出现
            $answerWrap.css('transform', 'translateX(-50%) translateY(0)');
            //让自我介绍的铃声响起
            $sayAudio[0].play();
            // 初始化时间
            initTime();
            timer = setInterval(function () {
                initTime();
            }, 1000);
        }
        // 处理时间格式
        function forMatTime(value) {
            var minutes = Math.floor(value / 60);
            var seconds = Math.floor(value - minutes * 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            return minutes + ':' + seconds;
        }
        // 初始化自我介绍的说话时间
        function initTime() {
            var currentTime = $sayAudio[0].currentTime;
            var duration = $sayAudio[0].duration;
            $time.html(forMatTime(currentTime));
            // 已播放时长和总时长相等，说明播放完毕
            if (currentTime == duration) {
                // 执行成功函数
                done();
            }
        }
        // 成功函数
        function done() {
            // 清楚定时器
            clearInterval(timer);
            timer = null;
            // 介绍停止
            $sayAudio[0].pause();
            // 此区域清除
            $phone.fadeOut();
            $phone.remove();
            messageRender.init();
        }

        return {
            init: function () {
                // phone 区域 显示
                $phone.show();
                // 电话铃声响起
                $bellAudio[0].play();
                // 控制声音
                $bellAudio[0].volume = 0.1;
                // 点击绿色电话的逻辑
                $telMark.click(function () {
                    greenTelFn();
                })
                // 给红色电话绑定点击时间
                $redMark.click(function () {
                    done();
                })
            }
        }
    })();
    // phoneRender.init();

    // message 区域
    let messageRender = (function () {
        let $message = $('.message'),
            $talkWrap = $message.find('.talkWrap'),
            $lis = $talkWrap.find('li'),
            $keybordWrap = $message.find('.keybordWrap'),
            $btn = $keybordWrap.find('.btn'),
            $keybords = $keybordWrap.find('.keybords'),
            $audio = $message.find('audio'),
            n = -1,
            interval = 1000,
            timer = null,
            str = "本小姐考虑考虑~",
            h = 0;

        // 让对话li部分展示
        function liShow() {
            timer = setInterval(function () {
                n++;
                if (n == 2) {
                    //说明前两条li已播放完毕，停止播放，让键盘从下往上出来
                    clearInterval(timer);
                    timer = null;
                    $keybordWrap.css('transform', 'translateY(0)');
                    // 打字效果
                    writeFn();
                    return;
                }
                if (n > 3) {
                    // 当li的索引值大于3的时候，让整个 $talkWrap向上移动
                    h+=$talkWrap.find('li').eq(n).outerHeight();
                    $talkWrap.css('transform',`translateY(${-h}px)`);
                }
                if(n>$talkWrap.find('li').length-1){
                    // 说明已经结束
                    done();
                    return;
                }
                $talkWrap.find('li').eq(n).addClass('current');
            }, interval)
        }
        // 打字处理函数部分
        function writeFn() {
            let n = -1;
            var timer2 = setInterval(function () {
                n++;
                $keybords.focus();
                // 说明"本小姐考虑考虑~"这句话已写完
                if (n > str.length - 1) {
                    clearInterval(timer2);
                    timer2 = null;
                    // 让发送按钮出现
                    $btn.show();
                    return;
                }
                var value = $keybords.val() + str[n];
                $keybords.val(value);
            }, 100)
        }
        // 发送按钮的函数
        function sendbtn() {
            // 让input框里面的文字变成空的
            $keybords.val('');
            // 让键盘从上往下落入底层
            $keybordWrap.css('transform', 'translateY(4.2rem)');
            // 把input框中的文字手动生成li插入&talkWrap中
            $talkWrap.find('li').eq(1).after(`<li class="self me">
            <img class="photo" src="images/message-head1.png" alt="">
             <p>${str}</p></li>`);
            //  手动给第三个li添加"current"动态效果
            $talkWrap.find('.me').addClass('current');
            // 让对话li部分，继续播放
            liShow();
        }
        // 成功函数
        function done() {
            clearInterval(timer);
            timer = null;
            $audio[0].pause();
            $message.fadeOut;
            $message.remove();
            cubeRender.init();
        }

        return {
            init: function () {
                // message 区域显示
                $message.show();
                // 让音乐响起
                $audio[0].play();
                $audio[0].volume = 0.1;
                // 让对话li部分展示
                liShow();
                // 给发送按钮绑定点击事件
                $btn.click(function () {
                    sendbtn();
                })

            }
        }
    })();
    // messageRender.init();

    // cube 魔方区域
    let cubeRender = (function () {
        let $cube = $('.cube'),
            $links = $cube.find('.links'),
            $a= $links.children('a');

        return{
            // 初始化代码
            init:function(){
                $cube.show();
                $a.click(function (){
                    // 获取每个a的索引
                    var index = $(this).index();
                    // 让魔方消失
                    $cube.hide();
                    // 让详情页出现
                    detailRender.init(index);
                })
            }
        }
    })();
    // cubeRender.init();

    // detail 区域
    let detailRender = (function () {
        let $detail = $('.detail'),
            $dl = $('.outline'),
            $arrow = $detail.find('.arrow');

        // 初始化swiper
        function initSwiper(index) {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                effect:'coverflow',  

                // Swiper初始化完毕之后的回调函数   
                onInit: function(swiper){
                    // alert('Swiper初始化完毕'); //测试效果
                    $dl.makisu({
                        selector: 'dd',
                        overlap: 0.6,
                        speed: 0.85
                    });
                    $dl.makisu('open');
                    // 从魔方快速切换到相应的页面
                    swiper.slideTo(index,0);
                  },

                // 过渡动画结束之后的回调函数
                onTransitionEnd: function(swiper){
                    // alert('过渡结束'); //测试效果
                    /*
                        如果当前没在大纲页面，让dl折起来，在大纲页面，让折纸dl打开
                    */
                    // 获取每页的索引值
                    var index = swiper.activeIndex;
                    var slides = swiper.slides;
                    if(index == 0){
                        $dl.makisu({
                            selector: 'dd',
                            overlap: 0.6,
                            speed: 0.85
                        });
                        $dl.makisu('open');
                    }
                    else{
                        $dl.makisu({
                            selector: 'dd',
                            overlap: 0.6,
                            speed: 0
                        });
                        $dl.makisu('close');
                    }
                    slides.each(function(i,item){
                        if(index==i){
                            item.id = `page${i}`;
                        }
                        else{
                            item.id = ``;
                        }
                    })
                },  
            })
        }

        return{
            // 初始化代码
            init:function(index){
                $detail.show();
                // 初始化Swiper插件
                initSwiper(index);
                // 给返回按钮绑点击事件
                $arrow.click(function(){
                    // 让详情页区域消失
                    $detail.hide();
                    // 让魔方区域出现
                    cubeRender.init();
                })
            }
        }
    })();
    // detailRender.init();
})