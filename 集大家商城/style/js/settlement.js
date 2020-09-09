// 账单结算
$(function () {

    // 移动端点击 展示产品
    $('.overview .Begin_see').click(function () {
        $('#settlement').show();
        $('.shopping_cart_inStock.listing_inStock').addClass('mobile');
    })

    // 关闭
    $('#settlement .settlement_h span,#settlement .mask_layer').click(function () {
        $('#settlement').hide();
        $('.shopping_cart_inStock.listing_inStock').removeClass('mobile')
    })

















    // function onLogonResult(result, msg) {
    //     if (result == 'success') {
    //         if (msg != null && msg != undefined && msg != "") {
    //             window.AndroidWebView.onRequestLogonResult(result, msg);
    //             $.ajax({
    //                 type: "get",
    //                 url: "?ct=app&ac=userlogin&" + msg,
    //                 dataType: "json",
    //                 success: function (data) {
    //                     if (data.code == '200') {
    //                         alert('登录成功');
    //                         var jsonstr = JSON.stringify(data)
    //                         window.AndroidWebView.onRequestLogonResult('success', jsonstr);
    //                         window.location.href = '/sfzd/';
    //                     } else {
    //                         alert('登录失败');
    //                         window.AndroidWebView.onRequestLogonResult('error', data);
    //                     }
    //                 }
    //             })
    //         } else {
    //             window.AndroidWebView.onRequestLogonResult("error", "msg为空");
    //         }
    //     } else {
    //         window.AndroidWebView.onRequestLogonResult("error", "");
    //     }
    // }


   


    function aasd() {
        var txt = '';
        var json = {
            "title": "北欧表情NORHOR/N.U.新都市实木复古墨尔本布艺软包双人床1.8米K",
            "img": "//gw.alicdn.com/bao/uploaded/i3/TB11vFubKEJL1J&j\|/SZFGYXG6OXXa_M2.SS2_500x500q90.jpg_.webp",
            "money": 150,
            "number": " 1.2w",
            "evaluate": "93",
            "url": ""
        }
        for (var key in json) {
            txt += key + '=' + escape(json[key]) + '&';
        }
        console.log(txt)
    }
    aasd()

})