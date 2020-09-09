$(function () {

    var scroll_list = 0;
    $(window).on("scroll", function () {
        if ($(window).width() > 860) {
            if ($("#container .col").length == 2) {
                $("#container").append('<ul class="col"></ul><ul class="col"></ul>')
            }
        }
        
        // 猜你喜欢 瀑布流  
        // 加载物品
        $minUl = getMinUl();
        if ($minUl.height() <= $(window).scrollTop() + $(window).height()) {
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            scroll_list++;
            $.ajax({
                type: "GET",
                url: "../style/json/index.json",
                data: {
                    start: 1
                },
                dataType: 'json',
                success: function (data) {
                    // 模拟加载五次
                    if (scroll_list <= 5) {
                        for (var i = 0; i < data.length; i++) {
                            $minUl = getMinUl();
                            $minUl.append(
                                '<li>' +
                                '    <a href="' + data[i].url + '">' +
                                '        <img src="' + data[i].img + '" alt="">' +
                                '        <div class="recommend-title">' +
                                '            <span class="recommend-title-p">' + data[i].title + '</span>' +
                                '        </div>' +
                                '        <div class="recommend-price-box">' +
                                '            <span class="recommend-sign ">￥</span>' +
                                '            <span class="recommend-price">' + data[i].money + '</span>' +
                                '            <span class="recommend-payed">' + data[i].number + '人已购买</span>' +
                                '        </div>' +
                                '    </a>' +
                                '</li>'
                            );
                        }
                    }
                }
            });
        }
        // 获取最短u
        function getMinUl() {
            var $arrUl = $("#container .col");
            var $minUl = $arrUl.eq(0);
            $arrUl.each(function (index, elem) {
                if ($(elem).height() < $minUl.height()) {
                    $minUl = $(elem);
                }
            });
            return $minUl;
        }
    })

    //  swiper 轮播
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});