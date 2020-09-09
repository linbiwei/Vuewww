$(function () {

    // 产品列表超过三个就隐藏剩下的
    $('.order .order-list-box').each(function () {
        let order_list = $(this).find('.order-list .list-item');
        let order_box = $(this).find('.shopping_cart_inStock');
        if (order_list.length > 3) {
            let order_list_hei = 0;
            for (let i = 0; i <= 2; i++) {
                order_list_hei += order_list.eq(i).outerHeight();
            }
            order_box.find('.order-list').height(order_list_hei - 3);
            let order_span = '<span> 剩余 ' + (order_list.length - 3) + ' 件商品</span><i></i>'
            order_box.append('<div class="showMore"> ' + order_span + ' </div>');
            order_box.on('click', '.showMore', function () {
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on').html(order_span);
                    order_box.find('.order-list').height(order_list_hei);
                } else {
                    $(this).addClass('on').html('<span>收起</span> <i class="on"></i>');
                    order_box.find('.order-list').css('height', 'auto');
                }
            });
        }
    })

    // 取消订单 选择
    $('.cancel .list-item').click(function () {
        $(this).find('.icon_select').addClass('on').parent('.list-item').siblings().find('.icon_select').removeClass('on')
    })

    // 评价 选择多张图片 并显示
    $("#uploadImgBtn").click(function () {
        var $input = $("#file");
        $input.on("change", function () {
            var files = this.files;
            var length = files.length;
            $.each(files, function (key, value) {
                var div = document.createElement("div"),
                    img = document.createElement("img");
                div.className = "pic";
                var fr = new FileReader();
                fr.onload = function () {
                    img.src = this.result;
                    div.appendChild(img);
                    $(".uploadImg-box").css('opacity', 1)
                    $(".uploadImg-box").append(div);
                }
                fr.readAsDataURL(value);
            })
        })
        $input.removeAttr("id");
        var newInput = '<input class="uploadImg test" type="file" name="file" multiple id="file">';
        $(this).append($(newInput));

    })
    $('.uploadImg-box').on('click', '.pic', function () {
        $(this).remove()
    });
})