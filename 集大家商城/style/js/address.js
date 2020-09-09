$(function () {
    var user_id = $('#user-id').attr('content');
    var Ealt = new Eject(); // 弹窗插件

    /* 新增 */
    $('.com-address-edit input').on(" input propertychange", function () {
        $(this).siblings('i').show();
        if ($(this).attr('type') != 'tel') {
            let _thisval = $(this).val().replace(/\s+/g, "");
            $(this).val(_thisval)
        }
    })

    $('.com-address-edit .com-edit-item i').click(function () {
        $(this).hide().siblings('input').val('');
    });

    $('.com-edit-item .label span').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.default .center').click(function (e) {
        e.preventDefault();
        if ($(this).find('label').hasClass('on')) {
            $(this).find('label').removeClass('on');
        } else {
            $(this).find('label').addClass('on');
        }
    })
    // 保存提交
    $('.Hold_button button').click(function () {
        let defaultoff = false;
        let name = $('#name').val();
        let phone = $('#contact').val();
        let area = $('#area').val();
        let address = $('#address').val();
        let edit = $('.com-edit-item .label span.on').text();
        var addressJson = {
            addressiD: user_id,
            addressArr: {}
        }
        if (name != '' && phone != '' && area != '' && address != '') {
            if (phone.length != 11) {
                Ealt.Ealert({
                    message: '手机号码不是11位数字'
                });
                return
            }
            let phoneOne = phone.split("");
            if (phoneOne[0] != 1) {
                Ealt.Ealert({
                    message: '手机号码必须是1开头'
                });
                return
            }

            if ($('.default .center label').hasClass('on')) {
                defaultoff = true;
            }

            addressJson.addressArr.name = name;
            addressJson.addressArr.phone = phone;
            addressJson.addressArr.area = area;
            addressJson.addressArr.address = address;
            addressJson.addressArr.edit = edit;
            addressJson.addressArr.defaultoff = defaultoff;
            console.log(addressJson)
            $.ajax({
                type: "get",
                url: "../style/json/shopping_cart.json",
                data: {
                    addressJson: addressJson
                },
                dataType: "json",
                success: function (data) {
                    // 跳转 
                    window.location.href = ""
                }
            })
        } else {
            Ealt.Ealert({
                message: '请填写完整'
            });
            return
        }
    })

    /* 选择地址 */
    // 获取用户保存的地址
    const address_choose = $('#address_choose')
    if (address_choose.length != 0) {
        $.ajax({
            type: "get",
            url: "../style/json/choose_address.json",
            data: user_id,
            dataType: "json",
            success: function (data) {
                for (i of data.data) {
                    address_choose.append(
                        '   <div class="address_list"   data="{\'addressId\':' + user_id + i.addressId + '}"> ' +
                        '       <a href="index.html" class="a_listis">' +
                        '           <div class="information">' +
                        '               <div class="information-top">' +
                        '                   <span class="name">' + i.name + '</span>' +
                        '                   <span class="phone">' + divHTML(i.phone) + '</span>' + [i.defaultoff != false ? '<i class="default"> 默认</i>' : ''] + [i.edit != '' ? '<i class="ification"> ' + i.edit + '</i>' : ''] +
                        '                </div>' +
                        '               <div class="information-bot">' +
                        '                   <p>' + i.area + i.address + ' </p> ' +
                        '               </div>' +
                        '           </div>' +
                        '         </a>' +
                        '        <a href="new_address.html"> <div class="arror"></div></a>' +
                        '    </div>')
                };

                function divHTML(a) {
                    // 电话中间加密
                    a = a + '';
                    return divhtml = a.substr(0, 3) + "****" + a.substr(7);
                }
            }
        });
    }

})


(function () {
    var Advertising = function (options) {
        var ADdiv = document.getElementById("AD_" + options);
        switch (options) {
            //  算命-付费算命
            case "01":
                ADdiv.innerHTML =
                    ' <div class="widget suxingme_social">' +
                    '    <a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=pc\')"> ' +
                    '        <img style="width:100%;" src="https://www.kaiyun9.com/m/tu/mip/cbz.jpg" alt="付费问答">' +
                    '    </a> ' +
                    '</div>';
                break;

                //  算命-各种小项目
            case "02":
                ADdiv.innerHTML =
                    ' <section class="boxs new-game">' +
                    '    <div class="box-content">' +
                    '        <div class="game-list play-now-game-list">' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=bazijp\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/bazi.png" alt="八字终身运"></div><div class="game-info">八字精批</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=bazi\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/caiyun.png" alt="八字财运"></div><div class="game-info">八字财运</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=ffqm\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/ming.png" alt="姓名详批"></div><div class="game-info">宝宝起名</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=jinnian\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/2018.png" alt="2019流年运程"></div><div class="game-info">2019运程</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=yinyuancs\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/yinyuan.png" alt="姻缘测算"></div><div class="game-info">姻缘测算</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=ziwei\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/ziwei.png" alt="紫微斗数"></div><div class="game-info">紫微斗数</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=hehun\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/hehun.png" alt="八字合婚"></div><div class="game-info">八字合婚</div></a></div></div>' +
                    '            <div class="game-item"><div class="game-item-inner"><a rel="nofollow" href="javascript:void(0);" onclick="atj(\'https://sm.kaiyun9.com/?ac=xmpd\')"><div class="game-pic"><img src="https://www.kaiyun9.com/m/tu/mip/peidui.png" alt="姓名配对"></div><div class="game-info">姓名配对</div></a></div></div>' +
                    '        </div>' +
                    '    </div>' +
                    '</section>';
                break;

        }
    }
    window.Advertising = Advertising;
}())