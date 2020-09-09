// 产品详情页

$(function () {
    if ($(window).width() < 860) {
        // 移动轮播图
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            }
        });
        // 移动点击头部
        $('.Content_page_box .msShortcutMenu').click(function (e) {
            if ($(this).find('ul').is(':visible')) {
                $(this).find('ul').hide()
            } else {
                $(this).find('ul').show()
            }
        });
        $(window).on("scroll", function () {
            // 顶部 小导航显示
            let CpmtemtTop = $(window).scrollTop();
            let figure = 0;
            CpmtemtTop < 100 ? figure = CpmtemtTop / 100 : figure;
            CpmtemtTop > 100 ? figure = 1 : figure;
            $('.Content_page_box .seek-top').css({
                'background': 'hsla(0,0%,100%,' + figure + ')',
                'border-color': 'hsla(0,0%,90%,' + figure + ')',
                'box-shadow': '0 0 ' + Math.round(figure * 5) + 'px rgba(0, 0, 0, 0.2)'
            });
            $('.Content_page_box .msShortcutMenu,.Content_page_box .seek-top>a.return').css({
                'box-shadow': '0 0 ' + Math.round(5 - figure * 5) + 'px rgba(0, 0, 0, 0.2)'
            });
            $('.Hidden-surprise').css({
                'opacity': figure,
                'visibility': 'initial'
            });

            if (CpmtemtTop == 0) {
                $('.Hidden-surprise').css({
                    'visibility': 'hidden'
                });
            }
            // ===0 && $('#Content_pagetit').outerHeight(true)
            // if(($('#Content_pagetit').offset().top - $(document).scrollTop()-100) <0){
            //     console.log(1)  
            // }

            

        })
    } else {
        // pc端放大镜
        window.onload = function () {
            MagnifierF("MagnifierWrap2");
        }
    }

    $('#terminal').click(function (e) {
        if ($('#terminal-find').is(':visible')) {
            $('#terminal-find').removeClass('on');
        } else {
            $('#terminal-find').addClass('on')
        }
    });


    $('.goods-details-tit div').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.goods-details-nr>div').eq($(this).index()).addClass('on').siblings().removeClass('on');
    })


    // 现在套装
    $('.version li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on')
    });

    // 产品加减
    $('.counter span').click(function () {
        let _this = $(this);
        var siblings = _this.siblings('input');
        var siblingsIndex = siblings.val();
        if (_this.hasClass('gray-reduce')) {
            if (siblingsIndex != siblings.attr('min')) {
                siblingsIndex--;
                _this.addClass('on').siblings('span').removeClass('on');
            } else {
                _this.removeClass('on');
            }
        } else {
            _this.siblings('.gray-reduce').addClass('on');
            siblingsIndex++;
            if (siblingsIndex >= siblings.attr('max')) {
                _this.addClass('on');
                siblingsIndex = siblings.attr('max');
            }
        }
        siblings.val(siblingsIndex);
    });



})