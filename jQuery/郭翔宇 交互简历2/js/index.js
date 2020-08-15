$(function () {
    // loading 大区域
    let loadingRender = (function () {
        let $wrap = $('.wrap'),
            $loading =$wrap. find('.loading'),
            $progress =$loading. find('.progress'),
            $progressIn = $progress.children('.progressIn'),
            ary = ['phone-bg.jpg', 'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'],
            n = 0,
            imgTotal = ary.length,
            delayTimer = null;

        // 进度条加载业务逻辑
        function progressLoad() {
            ary.forEach(function (item,i) {
                var img = new Image();
                img.src = `images/${item}`;
                // 图片加载
                img.onload = (function () {
                    n++;
                    $progressIn.css('width',`${n/imgTotal*100}%`)
                
                    // 图片加载完
                    if(n >= imgTotal){
                        clearInterval(delayTimer);
                        delayTimer = null;
                        $progressIn.css('width','100%');
                        done();
                    }
                });

            });
            delayTimer = setTimeout(function () {
                if(n/imgTotal<1){
                    alert('当前网速太差，继续等候或稍后重试')
                }
            },10000);
  
        }
        function done() {
            $loading.fadeOut();
            $loading.remove();
        }


        return {
            // 初始函数
            innit: function () {
                $loading.show();
                progressLoad();
            }
        }

    })();
    // loadingRender.innit();

    // phone 大区域
    let phoneRender = (function () {
        let $phone = $('.phone'),
            $listenWrap = $phone .find('.listenWrap'),
            $answerWrap = $phone .find('.answerWrap'),
            $telMark = $listenWrap .find('.telMark'),
            $redMark = $answerWrap .find('.redMark'),
            $bellAudio = $phone.find('#bellAudio'),
            $sayAudio = $phone.find('#sayAudio'),
            $time = $phone .find('.time'),
            timer = null ;
        
        // 点击绿色接听图标
        function greenTelFn(){
            // 来电区域消失,铃声消失
            $listenWrap.hide();
            $bellAudio[0].pause();
            // 接听区域出现，自我介绍出现
            $answerWrap.css('transform',' translateX(-50%) translateY(0)');
            $sayAudio[0].play();
            // 时间显示
            initTime ();
            // 不断更新显示时间
            timer = setInterval(function(){
                initTime ()
            },1000);

        }
        // 处理时间
        function handleTime(val){
            var minutes = Math.floor(val/60);
            var seconds = Math.floor(val-minutes*60);
            minutes= minutes<10? '0'+minutes:minutes;
            seconds= seconds<10? '0'+seconds:seconds;
            return minutes+':'+seconds;
        }
        // 播放自我介绍、获取时间
        function initTime (){
            var currentTime = $sayAudio[0].currentTime;
            var duration = $sayAudio[0].duration;
            $time.html(handleTime(currentTime));
            // 如果已播放时长和总时长相等，音频结束
            if(currentTime == duration){
                // 执行成功函数
                done();
            }
        }
        // 成功函数
        function done(){
            // 清楚定时器
            clearInterval(timer);
            timer = null ;
            // 介绍停止
            $sayAudio[0].pause();
            // phone 区域消失
            $phone.fadeOut();
            $phone.remove();

        }
        
        return {
            // 初始代码
            innit:function(){
                // phone 区域显示
                $phone.show();
                // 铃声响起
                $bellAudio[0].play();
                $bellAudio[0].volume = 0.1;
                // 点击绿色接听图标
                $telMark.click(function(){
                    greenTelFn();
                });
                $redMark.click(function(){
                    done();
                });
            
            }
        }
    })();
    phoneRender.innit();

})

