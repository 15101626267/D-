$(function () {
    let musicRender = (function () {
        let lyricStr = null,
            //存放歌词的数组
            lyricAry = [];

        // 获取歌词
        function getSyric() {
            $.ajax({
                url: "js/lyric.json",
                type: "get",
                success: function (data) {
                    lyricStr = data.lyric;
                    // 处理歌词
                    /* 
                    &#10; 换行
                    &#32; 空格
                    &#40;（
                    &#41;）
                    &#45; -   
                    */
                    lyricStr = lyricStr.replace(/&#(\d+);/g, function () {
                        let res = arguments[0];
                        let a = arguments[1];
                        switch (a) {
                            case "32":
                                return " ";
                                break;
                            case "40":
                                return "(";
                                break;
                            case "41":
                                return ")";
                                break;
                            case "45":
                                return "-";
                                break;
                        }
                        return res;
                    });

                    /* 
                    [00&#58;02&#46;11]词：王海涛/张靓颖&#10;
                    /\[(\d+)&#58;(\d+)&#46;(\d+)\]([^&#])&#10;/g*/

                    lyricStr.replace(/\[(\d+)&#58;(\d+)&#46;\d+\]([^&#]+)(&#10)/g, function () {
                        /* 
                         minutes 代表的是当句歌词的分钟数
                         seconds 代表的是秒
                         content 代表的是内容
                        
                        */
                        lyricAry.push({"minutes":arguments[1],"seconds":arguments[2],"content":arguments[3]});
                    });
                    console.log(lyricAry);
                }
            })
        }

        return {
            //初始化的一些功能代码  
            init: function () {
                // 获取歌词
                getSyric()
            }
        }

    })();
    musicRender.init();











})