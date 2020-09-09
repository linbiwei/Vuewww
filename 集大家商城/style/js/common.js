$(function () {

    var header_booH = $('.header-boo').outerHeight();
    var header_boow = $('.header-boo').outerWidth();
    var topp = $(window).scrollTop();
    var list_search = $('.search_wrap').outerHeight();
    var topBanner_hei;
    var topBanner_if_s = true
    var topBanner_if_x = true;

    // cookie 关闭浏览器清除
    if ($.cookie("topBanner_Data") == null) {
        $.cookie('topBanner_Data', 'true', {
            path: '/'
        });
    }

    // 顶部app下载推广
    if ($.cookie("topBanner_Data") == 'true') {
        $(window).resize(function () {
            Width()
        });
        Width()
    }

    // 广告的宽度判断
    function Width() {
        if ($(window).width() < 860) {
            // 手机广告
            if (topBanner_if_x === false){
                $('.computer-AD').remove();
                topBanner_if_x = false;
            }
            if(topBanner_if_s){
                topBanner_if_s = false;
                $('.main').prepend(
                    ' <div class="topBanner">' +
                    '   <img src="../style/img/lologo.png" alt=""> ' +
                    '    <div class="top-banner-text">' +
                    '      <p class="js-slogan">集大家书法商城</p>' +
                    '      <span class="js-description">移动客户端</span>' +
                    '    </div>' +
                    '    <a href="">下载</a> <button class="close" type="button" >×</button>' +
                    '</div>');
                topBanner_hei = $('.topBanner').outerHeight();
                setTimeout(function () {
                    $('.main').css({
                        'margin-top': topBanner_hei + 'px',
                        'transition': 'all .5s'
                    });
                    $('.topBanner').css({
                        'top': '0',
                        'transition': 'all .5s'
                    });
                    $('.header-box,.search_wrap_ban').css({
                        'top': topBanner_hei + 'px',
                        'transition': 'all .5s'
                    });
                    $('.list_box').css({
                        'top': topBanner_hei + list_search + 'px',
                        'transition': 'all .5s'
                    });
                }, 200);
            }
           

        } else {
            // pc广告
            if (topBanner_if_s === false){
                $('.topBanner').remove();
                topBanner_if_s = false;
            }
            if (topBanner_if_x){
                topBanner_if_x = false;
                $('.main').prepend(
                    '<div class="computer-AD">' +
                    '    <div class="computer-ad-box">' +
                    '       <div class="computer-ad-left">' +
                    '            <img src="../style/img/lologo.png" alt="">' +
                    '       </div>' +
                    '       <div class="computer-ad-center">' +
                    '            <ul>' +
                    '               <li><i></i><p>一天一款全球精品游戏推荐，活跃的玩家交流社区</p></li>' +
                    '               <li><i></i><p>只收录官方包，不联运，支持安卓正版游戏购买</p></li>' +
                    '               <li><i></i><p>倡导真实评分评价，排行榜单来自玩家真实反馈</p></li>' +
                    '          </ul>' +
                    '        </div>' +
                    '        <div class="computer-ad-rigth">' +
                    '            <div class="computer-ad-close"></div>' +
                    '            <div class="computer-ad-download">' +
                    '                <div class="computer-download-erwma">' +
                    '                   <span>二维码下载</span>' +
                    '                   <div class="computer-download-erwma-box box-sw">' +
                    '                       <img src="../style/img/api.png" alt="">' +
                    '                   </div>' +
                    '               </div>' +
                    '               <a href="">立即下载</a>' +
                    '            </div>' +
                    '       </div>' +
                    '    </div>' +
                    ' </div>');
                $('.computer-ad-close').click(function () {
                    $.cookie('topBanner_Data', 'false', {
                        path: '/'
                    });
                    $('.computer-AD').remove();
                })
            }
           
        }
    }

    $(window).on("scroll", function () {
        topp = $(window).scrollTop();
        // 返回顶部
        if (topp > 300) {
            $('#Top').css({
                'z-index': '50',
                'opacity': '1'
            });
        } else {
            $('#Top').css({
                'z-index': '-10',
                'opacity': '0'
            });
        }
        if (topp > 30) {
            $('.header-computer').addClass('on');
        } else {
            $('.header-computer').removeClass('on');
        }
        if ($(window).width() < 860) {
            if ($.cookie("topBanner_Data") == 'false') {
                // 没app下载的
                //搜索内容页顶部跟随
                var notopban = -topp;
                if (notopban <= -$('.seek-top').outerHeight()) {
                    notopban = -$('.seek-top').outerHeight()
                }
                $('.search_wrap_ban').css({
                    'top': notopban + 'px',
                    'transition': 'all 0s'
                });
                // 顶部导航
                toop(topp);
            } else {
                //app下载滑动效果
                var header_t_max = topBanner_hei - topp;
                var header_search_results = topBanner_hei - topp;
                if (header_t_max <= 0) {
                    header_t_max = 0;
                    topp = topp - topBanner_hei;
                    toop(topp);
                }
                if (header_search_results <= -$('.seek-top').outerHeight()) {
                    header_search_results = -$('.seek-top').outerHeight();
                }
                if (header_t_max == topBanner_hei) {
                    toop(topp);
                }
                $('.topBanner').css({
                    'top': -$(window).scrollTop() + 'px',
                    'transition': 'all 0s'
                });
                $('.header-box').css({
                    'top': header_t_max + 'px',
                    'transition': 'all 0s'
                });
                $('.search_wrap_ban').css({
                    'top': header_search_results + 'px',
                    'transition': 'all 0s'
                });
                $('.list_box').css({
                    'top': topBanner_hei - topp + list_search + 'px',
                    'transition': 'all .0s'
                });
            }
        }

    })
    if ($(window).width() < 860) {
        toop(topp)
        // 顶部跟随
        function toop(a) {
            if (a > header_booH) {
                header_mt = -header_booH;
                header_width = header_boow * 0.8;
            } else {
                header_mt = -a;
                header_width = header_boow - (header_boow * 0.2) * (topp / 50);
            }
            $('.logo').css({
                'opacity': 1 - a / 50
            });
            $('.header-boo').css({
                'margin-top': header_mt + 'px',
                'width': header_width + 'px'
            });
        }
        // 关闭移动 app 下载推广
        $('.topBanner .close').click(function () {
            $.cookie('topBanner_Data', 'false', {
                path: '/'
            });
            $('.topBanner').remove();
            $('.main').css({
                'margin-top': '0px',
                'transition': 'all .5s'
            });
            $('.header-box,.search_wrap_ban,.list_box').css({
                'top': '0px',
                'transition': 'all .5s'
            });
            $('.list_box').css({
                'top': '1.2rem',
                'transition': 'all .5s'
            });
        })
    }

    // 分类页  选择类别
    $('.list_box .list_ri li').click(function () {
        // 切换
        $(this).addClass('on').siblings().removeClass('on');
        $('.list_box .list_le .second-module').eq($(this).index()).fadeIn().siblings().fadeOut();
        // 跟随保持顶部
        var list_ri_scrollTop = $('.list_ri').scrollTop() + ($(this).offset().top - $(this).outerHeight())
        if ($.cookie("topBanner_Data") == 'true') {
            if ($(window).width() < 860) {
                list_ri_scrollTop = $('.list_ri').scrollTop() + ($(this).offset().top - $(this).outerHeight()) - topBanner_hei
            }
        }
        $('.list_ri').animate({
            scrollTop: list_ri_scrollTop
        }, 500);
    })

});