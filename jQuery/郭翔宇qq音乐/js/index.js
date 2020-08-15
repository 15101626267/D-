$(function () {
    let musicRender = (function () {
        let lyricStr = null;
        // 存放歌词的数组
        let lyricAry = [];
        $lyricWrap = $('.lyricWrap');
        $audio = $('#audio');
        $musicIcon = $('.musicIcon');
        $currentTime = $('.currentTime');
        $duration = $('.duration');
        $progress = $('.progress');
        let timer = null;
        

        // 获取歌词
        function getSyric() {
            $.ajax({
                url: 'js/lyric.json',
                type: 'get',
                success: function (data) {
                    lyricStr = data.lyric;
                    // console.log(lyricStr);
                    lyricStr = lyricStr.replace(/&#(\d+);/g,function(){
                        let res = arguments[0];
                        let a= arguments[1];
                        switch(a){
                            case '32':
                                return ' ';
                                break;
                            case "40" :
                                return "(" ;
                                break;
                            case "41":
                                return ")" ;
                                break;   
                            case "45":
                                return "-" ;
                                break;   
                        }
                    return res;    
                    })
                    /* 
                    [00&#58;02&#46;11]词：王海涛/张靓颖&#10;
                    /\[(\d+)&#58;(\d+)&#46;(\d+)\]([^&#])&#10;/g*/

                    lyricStr.replace(/\[(\d+)&#58;(\d+)&#46;\d+\]([^&#]+)(&#10)/g, function () {
                        /* 
                         minutes 代表的是当句歌词的分钟数
                         seconds 代表的是秒
                         content 代表的是内容
                        
                        */
                       console.log(arguments);
                        lyricAry.push({"minutes":arguments[1],"seconds":arguments[2],"content":arguments[3]});
                    });
                    console.log(lyricAry);
                    bindHtml();
                }

            })
        }
        // 绑定歌词
        function bindHtml(){
            var str = '';
            lyricAry.forEach(function(item,i){
                str += `<p data-minutes='${item.minutes}' data-seconds='${item.seconds}'>${item.content}</p>`
            });
            console.log(str);
            $lyricWrap.html(str);
        }
        function formatTime(value) {
            var minutes = Math.floor(value/60);
            var seconds = Math.floor(value-minutes*60);
            minutes= minutes<10? '0'+minutes:minutes;
            seconds= seconds<10? '0'+seconds:seconds;
            return minutes+':'+seconds;
        }
        function initTime() {
            // 0 219.614331
            // 已播放的时长
            var currentNum = $audio[0].currentTime;
            // 总时长
            var durationNum = $audio[0].duration;
            var currentTime = formatTime(currentNum);
            var duration = formatTime(durationNum);
            $currentTime.html(currentTime);
            $duration.html(duration);
            //进度条，已播放时长/总时长，转成百分比，就是进度条宽度
            $progress.css('width',`${currentNum/durationNum*100}%`);
            // 如果已播放的时间和总时长相等了，说明已播放完毕
            if(currentNum == durationNum){
                // 让音乐暂停
                $audio[0].pause();
                $musicIcon.removeClass('current');
            }
            // 对应歌词：找到当前播放的那个段落p，给它加一个选中的样式current
            // 通过当前播放的时长来找到对应的那个p
            // 经过处理，p上面的时间格式：00:02
            var timeValue = currentTime.split(':');
            var $cur = $lyricWrap.find('p').filter(`[data-minutes = "${timeValue[0]}"]`).filter(`[data-seconds = "${timeValue[1]}"]`);
            $cur.addClass('current').siblings().removeClass('current');
            // 如果当前播放的段落索引已经大于3，就让整个容器往上走top；
            // 获取第一个段落的高度
            var itemH = $lyricWrap.find('p').eq(0).outerHeight();
            if($cur.index()>3){
                h = Number.parseFloat($lyricWrap.css('top'))-itemH;
                $lyricWrap.css('top',h);
            }
        }
        return {
            // 初始化的一些功能代码
            init: function () {
                // 获取歌词
                getSyric();

                // 给音乐符绑定点击事件
                $musicIcon.click(function(){
                    // 如果音乐已经播放完，让整个容器top再回到初始的高度
                    if($audio[0].paused){
                        $lyricWrap.css('top',0);
                    }
                    // 如果它是暂停就播放,并让音乐符旋转
                    if($audio[0].paused){
                        $audio[0].play();
                        $(this).addClass('current');
                    }
                    // 如果它是播放就暂停，并让音乐符停止旋转
                    else{
                        $audio[0].pause();
                        $(this).removeClass('current');
                    }
                })
                // 监听canplay这个事件，能播放的时候，再获取已经播放时长和总时长
                $audio[0].addEventListener('canplay',function(){
                    initTime();
                });
                // 开启定时器，每隔一段时间就动态获取一次时间，进行处理
                timer = setInterval(function () {
                    initTime();
                },1000);
            }
        }
    })();
    musicRender.init();

})
