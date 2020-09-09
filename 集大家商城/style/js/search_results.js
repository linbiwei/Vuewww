/*****  搜索内容页 *****/
$(function () {
    var n = 0;
    var isbool = true;
    var situation = true;
    var container = $('#waterfull ul');
    // 初始化砌砖体
    brickwork();

    function brickwork() {
        container.imagesLoaded(function () {
            container.masonry({
                itemSelector: '.item'
            });
        });
    }

    // 选择一列，还是砌砖
    $('.pro_view').click(function () {
        if ($(this).is('.on')) {
            situation = true;
            $(this).removeClass('on');
            $('.waterfull').removeClass('Up_and_down');
            brickwork();
            container.masonry().masonry('reload');
        } else {
            situation = false;
            $(this).addClass('on');
            $('.waterfull').addClass('Up_and_down');
            container.masonry('destroy');
        }
        console.log(situation)
    })

    // 下滑加载
    $(window).scroll(function () {
        var itemNum = $('#waterfull').find('.item').length;
        var itemArr = [];
        itemArr[0] = $('#waterfull').find('.item').eq(itemNum - 1).offset().top + $('#waterfull').find('.item').eq(itemNum - 1)[0].offsetHeight;
        var lis = $(".load_more")
        var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop() + 1000);
        $.each(lis, function (i, item) {
            mTop = item.getBoundingClientRect().top;
            if ($(document).height() <= totalheight && isbool == true) {

                isbool = false;
                n++;
                $('.load_more').css('opacity', '1');
                biwei(n, 2)
            }
        });
    });

    // ajax
    // 
    biwei(0, 2)

    function biwei(n, l) {
        $.ajax({
            // url: 'http://app.6z6z.com/post/index/index.php',
            url: '../style/json/search_results.json',
            type: "GET",
            data: {
                ziti: "楷书",
                // title: "天",
                // author: "",
                type: l,
                start: n
            },
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (n == 0) {
                    $('.logo_bak').removeClass('of on');
                }
                if (data) {
                    var html = '';
                    for (var i = 0; i < data.length; i++) {
                        html = html +
                            '<li class="item">' +
                            '    <a href="'+ data[i].url +'">' +
                            '       <div class="product-img">' +
                            '           <img src="'+ data[i].img+'">' +
                            '       </div>' +
                            '       <div class="product-tit">' +
                            '           <p class="product-p">'+ data[i].title+'</p>' +

                            // 标签
                            // '           <div class="product-label">' +
                            // '               <span>'+ data[i].label+'</span>' +
                            // '               <span>'+ data[i].label+'</span>' +
                            // '           </div>' +
                            '           <span class="product-price">¥ <em>'+ data[i].money+'</em></span> ' +
                            '           <div class="product-condition">' +
                            '               <span class="product-sell">已售<em>'+ data[i].number+'</em></span> ' +
                            '               <span class="product-good-reputation">好评率<em>'+ data[i].evaluate+'%</em></span> ' +
                            '           </div>' +
                            '       </div>' +
                            '   </a>' +
                            '</li> '

                    }
                    if (n == 0) {
                        $('.logo_bak').removeClass('of');
                        hintImgTime = setInterval($('.logo_bak').addClass('on'), 1000);
                    }
                    $(html).find('img').each(function (index) {
                        loadImage($(this).attr('src'));
                    })
                    if (situation == true) {
                        var $newElems = $(html).css({
                            opacity: 0
                        }).appendTo(container);
                        $newElems.imagesLoaded(function () {
                            clearInterval(hintImgTime);
                            $newElems.animate({
                                opacity: 1,
                            }, 100);
                            brickwork()
                            container.masonry('appended', $newElems, true);
                            $('.logo_bak').addClass('of').removeClass('on');
                        });
                    } else {
                        container.append(html);
                    }
                    $('.logo_bak').removeClass('on');
                    isbool = true;
                } else {
                    if (n != 0) {
                        $('.load_more').css('opacity', '0');
                        $('.logo_bak').removeClass('on');
                        $('.footer').show();
                    } else {
                        $('.load_more').css({
                            'opacity': '1',
                            'padding-top': '60vh'
                        });
                        $('.load_more').html('<p>没有更多了</p>');
                    }
                    $('.footer').show();
                }
            }
        });
    }

    function loadImage(url) {
        var img = new Image();
        img.src = url;
        if (img.complete) {
            return img.src;
        }
        img.onload = function () {
            return img.src;
        };
    };

    $(window).on("scroll", function () {
        // 返回顶部
        if ($(window).scrollTop() > 300) {
            $('#Top').css('z-index', '50');
        } else {
            $('#Top').css('z-index', '-10');
        }
    })
})