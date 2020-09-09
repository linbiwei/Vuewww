/*****  搜索页 提示cookie*****/
$(function () {
    // 搜索历史
    if ($.cookie("Search_Data") == null) {
        var data = [];
        Cookie();
    } else {
        //读取cookie
        var cookie = JSON.parse($.cookie("Search_Data"));
        if (cookie != null) {
            data = cookie;
        }
    }

    // 加载cookie 搜索历史
    if (data.length != 0) {
        $('#seek_record').show();
        $('#seek_record ul li').remove()
        for (var i = 0; i < data.length; i++) {
            $('#seek_record ul').prepend(
                '<li key="' + data[i] + '">' + data[i] + '</li>'
            );
        }
    }

    // 提交搜索
    $('#submit').click(function () {
        search();
    })

    // 清空搜索
    $('.seek_record_tit i').click(function () {
        $('#seek_record ul li').remove();
        $('#seek_record').hide();
        data = [];
        Cookie();
    })

    // 历史、热门搜索
    $('#seek_record ul li,#seek_hot ul li ').click(function () {
        $(this).attr('key');
        $('.searchInput').val($(this).attr('key'));
        search();
    })

    // 搜索跳转
    function search() {
        var searchInput = $('.searchInput').val();
        if (searchInput == null || searchInput == '') {
            return false;
        }
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).val(),
            dataType: "json",
            success: function (url) {
                if (url != '') {
                    if (data.length >= 15) {
                        data.splice(0, 1);
                    }
                    if ($.inArray(searchInput, data) != -1) {
                        data.splice($.inArray(searchInput, data), 1);
                    }
                    data.push(searchInput);
                    Cookie();
                    location.href = url;
                }
            }
        });
    }

    // ajax 保存
    function Cookie() {
        $.cookie('Search_Data', JSON.stringify(data), {
            expires: 365
        });
    }

    // 搜索提示 
    $('.searchInput').bind('input propertychange', function () {
        if ($(this).val() != '') {
            $.ajax({
                type: "GET",
                url: "../style/json/search.json",
                data: $(this).val(),
                dataType: "json",
                success: function (data_1) {
                    if (!data_1) {
                        $('#hint').hide();
                        $('.seek_record').show();
                    } else {
                        $('#hint').show();
                        $('.seek_record').hide();
                        $('#hint ul li').remove();
                        for (var i = 0; i < data_1.length; i++) {
                            $('#hint ul').prepend(
                                '<li key="' + data_1[i].word + '">' + data_1[i].word + '</li>'
                            );
                        }
                        $('#hint ul li').click(function () {
                            $(this).attr('key');
                            if (data.length != 0) {
                                $('#seek_record').show();
                            }else{
                                $('.seek_hot').show();
                            }
                            $('.searchInput').val($(this).attr('key'));
                            search();
                        })
                    }
                }
            });
        } else {
            $('#hint').hide();
            $('.seek_record').show();
        }
    });
  
    // 点击空白隐藏
    $(document).click(function (event) {
        $('#hint').hide();
    });

    // 点×清除输入
    $('.search-shut').click(function(){
        $('.searchInput').val('');
        if (data.length != 0) {
            $('#seek_record').show();
        }else{
            $('.seek_hot').show();
        }
    })
})