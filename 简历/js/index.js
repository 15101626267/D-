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
      imgTotal = ary.length;

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
            // done();
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
})