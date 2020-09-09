$(function () {
    // 结账分别在 pc、移动的位置
    $(window).on("scroll", function () {
        if ($(window).width() > 860) {
            if (($('.search_keywordlist').offset().top - $(document).scrollTop()) - $(window).height() < 0) {
                $('.settlement').css({
                    'position': 'relative'
                })
            } else {
                $('.settlement').css({
                    'position': 'fixed'
                })
            }
        }
    })

    // 用户id 获取用户购物车信息
    var user_id = $('#user-id').attr('content');
    var TotalData = [];
    var Ealt = new Eject();
    if (user_id != '') {
        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: user_id,
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.data.length === 0) {
                    ThereIsNo();
                } else {
                    $('.shopping_cart_inStock').show();
                    for (Ahtml of data.data) {
                        let listData = {};
                        listData.ProductId = Ahtml.ProductId;
                        listData.State = Ahtml.State;
                        listData.arrivalQty = Ahtml.arrivalQty;
                        Ahtml.State != true ? off = '' : off = 'on';
                        Ahtml.arrivalQty > Ahtml.min ? Qtyon = 'on' : Qtyon = '';
                        for (html of Ahtml.ProductInformation) {
                            listData.SalesPrice = html.SalesPrice;
                            TotalData.push(listData);
                            $('#order-list').append(
                                '   <div class="list-item" id="' + Ahtml.ProductId + '" >       ' +
                                '        <div class="icon_select ' + off + '"><i></i></div>             ' +
                                '        <div class="cmmdty">                                           ' +
                                '            <div class="cmmdty-img">                                   ' +
                                '                <img src="' + html.cmmdtyImg + '" alt="">              ' +
                                '            </div>                                                     ' +
                                '            <div class="cmmdty-info">                                  ' +
                                '                <a href=" ' + html.cmmdtyUrl + ' ">                    ' +
                                '                    <p>' + html.cmmdtyName + '</p>                     ' +
                                '                </a>                                                   ' +
                                '                <div class="info-middle">                              ' +
                                slogan(html.parameter) +
                                minimum(Ahtml.MostPrompt, Ahtml.max) +
                                '                </div>                                                 ' +
                                '                <div class="info-bottom ">                             ' +
                                '                    <div class="market-price">                         ' +
                                '                         ¥ <span class="market-price-span">' + moneyFormat(html.SalesPrice) + '</span>' +
                                '                    </div>                                             ' +
                                '                    <div class="counter">                              ' +
                                '                        <span  class="gray-reduce ' + Qtyon + '"></span>' +
                                '                        <input  max="' + Ahtml.max + '"  min="' + Ahtml.min + '" type="text" value="' + Ahtml.arrivalQty + '">' +
                                '                        <span class="black-add"></span>                ' +
                                '                    </div>                                             ' +
                                '                </div>                                                 ' +
                                '            </div>                                                     ' +
                                '        </div>                                                         ' +
                                '    </div>'
                            );
                        }
                    }
                    judge();

                    // 勾选
                    $('.icon_select').click(function (e) {
                        let _this = $(this);
                        let StateOff;
                        if (_this.is('.on')) {
                            _this.removeClass('on');
                            StateOff = false;
                        } else {
                            _this.addClass('on');
                            StateOff = true;
                        }
                        if (_this.parents('div').hasClass('list-item')) {
                            TotalData[_this.parents('.list-item').index()].State = StateOff;
                        } else {
                            if (_this.is('.on')) {
                                for (let index in TotalData) {
                                    TotalData[index].State = true;
                                }
                            } else {
                                for (let index in TotalData) {
                                    TotalData[index].State = false;
                                }
                            }
                        }
                        judge();
                    });

                    // 产品加减
                    $('.list-item .counter span').click(function () {
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
                        TotalData[_this.parents('.list-item').index()].arrivalQty = siblingsIndex;
                        TotalPrice();
                        change();
                    });

                    // 输入的产品数量
                    $('.list-item .counter input').on(" input propertychange", function () {
                        let _this = $(this);
                        if (parseInt(_this.val()) >= parseInt(_this.attr('max'))) {
                            _this.val(_this.attr('max'));
                            _this.siblings('.black-add').addClass('on').siblings('.gray-reduce').addClass('on');
                            Ealt.Etoast('最多可购买' + _this.attr('max') + '件！')
                        }
                        if (parseInt(_this.val()) <= parseInt(_this.attr('min'))) {
                            _this.val(_this.attr('min'));
                            _this.siblings('.gray-reduce').removeClass('on').siblings('.black-add').removeClass('on');
                            Ealt.Etoast('最少' + _this.attr('min') + '件起购！')
                        }
                        if (_this.val() > 0) {
                            TotalData[_this.parents('.list-item').index()].arrivalQty = _this.val();
                            TotalPrice();
                        }
                        change();
                    })
                }
            }
        });
    };

    // 结算
    $('#shopping_cart_list .settlement .buy').click(function () {
        $('#order-list .list-item .counter').find('input').each(function () {
            console.log($(this).val())
        });
    })

    // 总价格
    function TotalPrice() {
        const TotalPrice = TotalData.map(e => {
            if (e.State === true) {
                return e.SalesPrice * e.arrivalQty;
            } else {
                return 0;
            }
        }).reduce((a, b) => {
            return a + b
        })
        $('.settlement .total .t_price').text(TotalPrice.toFixed(2));
    }

    // 商品参数
    function slogan(a) {
        let Ptext = '';
        for (text of a) {
            Ptext += '<span>' + text + '</span>';
        }
        return '<p>' + Ptext + '</p>';
    }

    // 提示最多可买
    function minimum(a, b) {
        let Ptext = '';
        if (a) {
            Ptext = '<p class="errMsg"> 最多可买' + b + '件</p> ';
        }
        return Ptext;
    }

    // 金额两位小数
    function moneyFormat(val) {
        if (val == "" || val == null) {
            return "0.00";
        }
        var value = Math.round(parseFloat(val) * 100) / 100;
        var xsd = value.toString().split(".");
        if (xsd.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    }

    // 判断全选
    function judge() {
        let judgeindex = 0;
        for (i of TotalData) {
            i.State === true ? judgeindex++ : '';
        }
        if (judgeindex == TotalData.length) {
            $('.icon_select').addClass('on');
        } else if (judgeindex >= 1) {
            $('.settlement .icon_select').removeClass('on');
        } else if (judgeindex == 0) {
            $('.icon_select').removeClass('on');
        }
        TotalPrice();
        change();
    }

    // 编辑购物车
    var Menuspab = 2;
    $('.msShortcutMenu span').click(function () {
        Menuspab++;
        if (Menuspab > 2) {
            Menuspab = 1;
            $(this).text('完成')
        }
        if (Menuspab === 2) {
            $(this).text('编辑')
        }
        $('.settlement .settlement_' + Menuspab + '').hide().siblings('div').show();
    })

    // 删除是否
    $('.delete-box .delete').click(function () {
        Ealt.Econfirm({
            // title: '提示',
            message: '是否确认删除',
            confirm:'确认',
            define: function () {
                // 确定
                for (var i = 0, flag = true; i < TotalData.length; flag ? i++ : i) {
                    if (TotalData[i].State === true) {
                        $('#' + TotalData[i].ProductId + '').remove();
                        TotalData.splice(i, 1);
                        flag = false;
                    } else {
                        flag = true;
                    }
                    console.log(TotalData.length)
                    if (TotalData.length === 0) {
                        ThereIsNo();
                    }
                }
                change();
            },
            cancel: function () {
                // 取消
            }
        })
    })

    // 没有数据
    function ThereIsNo() {
        $('#shopping_cart_list').append(
            '    <div class="shopping_cart_empty">' +
            '        <p>购物车还是空的，快来挑选好货吧</p>' +
            '        <div class="lead"><a href="../list/index.html"> 去逛逛 </a> </div>' +
            '    </div>');
        $('.shopping_cart_inStock').hide();
        $('.msShortcutMenu span').text('');
    }

    // 产品变动 提交后台
    function change() {
        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: {
                user_id: user_id,
                data: TotalData
            },
            dataType: "json",
            success: function (data) {
                console.log('数据更改')
            }
        })
    }
})
















//  shopping_cart.json 
// {
//     "ProductId":123,     --产品id
//     "State":true,        --产品选中状态
//     "arrivalQty": 99,    --数量
//     "MostPrompt":false,      --提示最多购买 三件
//     "max":99,                --数量最大值 库存
//     "min":1,                 --最少几件起
//     "ProductInformation":[{      --产品详情
//         "cmmdtyUrl": "",         --链接
//         "cmmdtyName": "进口80支埃及长绒棉贡缎四件套 纯白绣花五星级床上用品包邮",      --标题
//         "cmmdtyImg": "//img.alicdn.com/imgextra/i2/2091511816/O1CN01NFpTNV1PHlqOwpdns_!!2091511816.jpg_2200x2200Q50s50.jpg_.webp",   --图片
//         "SalesPrice": 992,     --价格
//         "parameter":[]         --规格
//     }]
// }