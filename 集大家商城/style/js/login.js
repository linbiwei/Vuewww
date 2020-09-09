$(function () {
    var Ealt = new Eject(); // 弹窗插件
    var VerificationCode; //  返回的验证码
    var Determine = true; // 判定

    //监听输入 清除按钮
    $('.account_box input').on(" input propertychange", function () {
        $(this).siblings('.close').show();
        if ($(this).attr('type') != 'tel') {
            let _thisval = $(this).val().replace(/\s+/g, "");
            $(this).val(_thisval)
        }
    })

    // 清除输入框内容
    $('.close').click(function () {
        $(this).hide().siblings('input').val('');
        if ($(this).siblings('input').attr('type') === 'tel') {
            $('.getYzm').removeClass('color-o');
        }
    });

    // 查看密码
    $('.ico-eye').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').siblings('input').attr('type', 'password');
        } else {
            $(this).addClass('on').siblings('input').attr('type', 'text');
        }
    });

    // 提交登录 
    $('.denglu .submit_butt button').click(function () {
        let username = $('#username').val();
        let password = $('#password').val();
        // 账号为空
        if (username === '') {
            Ealt.Ealert({
                message: '请输入账号'
            });
            return
        }
        // 密码为空
        if (password === '') {
            Ealt.Ealert({
                message: '请输入密码'
            });
            return
        }
        // 密码小于6位数
        if (password.length < 6) {
            Ealt.Ealert({
                message: '请确认密码'
            });
            return
        }

        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: {
                username: username,
                password: password
            },
            dataType: "json",
            success: function (data) {
                // 账号不存在

                Ealt.Econfirm({
                    message: '账号不存在',
                    confirm: '前往注册',
                    define: function () {
                        // 前往注册页面
                        window.location.href = "注册-短信验证.html"
                    },
                    cancel: function () {
                        // 取消清空输入
                        username = password = '';
                    }
                })

                // 密码错误

                // Ealt.Econfirm({
                //     message: '密码错误，请检查',
                //     confirm: '忘记密码',
                //     define: function () {
                //         // 前往找回密码
                //         window.location.href = "http://www.baidu.com"
                //     },
                //     cancel: function () {
                //         // 取消清空密码
                //         password = '';
                //     }
                // })
            }
        })
    });

    // 账号忘记密码 找回账号核对账号下一步
    $('.Retrieve_password .submit_butt').click(function () {
        let username = $('#username').val();
        // 账号为空
        if (username === '') {
            Ealt.Ealert({
                message: '请输入账号'
            });
            return
        }
        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: {
                username: username
            },
            dataType: "json",
            success: function (data) {
                // 账号不存在
                // Ealt.Econfirm({
                //     message: '账号不存在',
                //     confirm: '前往注册',
                //     define: function () {
                //         window.location.href = "registered.html"
                //     },
                //     cancel: function () {
                //         username = '';
                //     }
                // })

                // 存在跳转 单一验证方式 直接跳过这一页
                window.location.href = "账号找回密码方式.html"
            }
        })
    });

    // 找回密码邮箱验证
    $('.validation .submit_butt').click(function () {
        let text = $('#text').val();
        // 账号为空
        if (text === '') {
            Ealt.Ealert({
                message: '请输入验证码'
            });
            return
        }
        if (text.length != 4) {
            Ealt.Ealert({
                message: '请核对验证码'
            });
            return
        }
        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: {
                text: text
            },
            dataType: "json",
            success: function (data) {
                if (text != 1234) { //验证码不是1234
                    // 验证码错误
                    Ealt.Ealert({
                        message: '验证码错误',
                        define: function () {
                            text = '';
                        }
                    });
                    return
                }
                // 正确下一步 修改密码
                window.location.href = "账号验证修改密码.html"
            }
        })
    });

    // 确认修改密码
    $('.new_password .submit_butt').click(function () {
        let password_1 = $('#password_1').val();
        let password_2 = $('#password_2').val();
        // 账号为空
        if (password_2 === '' && password_1 === '') {
            Ealt.Ealert({
                message: '请填写密码'
            });
            return
        }
        if (password_1.length < 6) {
            Ealt.Ealert({
                message: '长度为6到24位'
            });
            return
        }
        if (password_2 != password_1) {
            Ealt.Ealert({
                message: '两次输入密码不一致'
            });
            return
        }

        $.ajax({
            type: "get",
            url: "../style/json/shopping_cart.json",
            data: {
                password_1: password_1
            },
            dataType: "json",
            success: function (data) {
                Ealt.Ealert({
                    message: '密码修改成功',
                    qrqrqr: '前往登录',
                    define: function () {
                        // 返回登录
                        window.location.href = "账号登录.html"
                    },
                });

            }
        })
    });

    // 手机号码 短信验证码登录 输入隔开 157 1068 0950
    $(".SMSvalidation #phonNumber").on(" input propertychange", function () {
        let _this = $(this);
        let mobile = _this.val();
        let mobile_ = "";
        //  去掉空格
        for (var i = 0; i < mobile.length; i++) {
            if (i == 2 || i == 6) {
                mobile_ = mobile_ + mobile.charAt(i) + " ";
            } else {
                mobile_ = mobile_ + mobile.charAt(i);
            }
        }
        if (mobile_.length == 13) {
            $('.getYzm').addClass('color-o');
        } else {
            $('.getYzm').removeClass('color-o');
        }
        _this.val(mobile_);

    });

    // 获取验证码 一分钟发一次
    $('.getYzm').click(function () {
        if ($(this).hasClass('color-o')) {
            $(this).removeClass('color-o');
            $.ajax({
                type: "get",
                url: "../style/json/shopping_cart.json",
                data: {
                    text: $('#phonNumber').val()
                },
                dataType: "json",
                success: function (data) {
                    // 返回的验证码
                    VerificationCode = 1234;
                    let time = 60;
                    let timest;
                    timest = setInterval(function () {
                        time--;
                        $('.getYzm').html(time + 's');
                        if (time === 0) {
                            clearInterval(timest);
                            $('.getYzm').html('获取验证码').addClass('color-o');
                        }
                    }, 1000);
                }
            })
        }
    })

    // 号码清除
    $(".SMSvalidation #phonNumber").keyup(function (e) {
        let mobile_ = $(this).val();
        let mo_length = mobile_.length;
        if (e.keyCode === 8) {
            if (mo_length === 13) {
                $('.getYzm').addClass('color-o');
            } else {
                $('.getYzm').removeClass('color-o');
            }
            if (mo_length === 9 || mo_length === 4) {
                let arr = mobile_.split("");
                arr.splice(mo_length - 1, 1);
                mobile_ = arr.join("");
                $(this).val(mobile_)
            }
        }
    })

    // 短信验证码 获取光标
    $('.yzm_inputBox .yzm').click(function () {
        let _span = $(this).find('span')
        $('#yzminput').focus()
        _span.each(function () {
            let _this = $(this);
            if (_this.html() === '') {
                _this.addClass('label');
                return false;
            }
        })
    })

    // 验证码的输入
    $('#yzminput').on(" input propertychange", function () {
        let _this = $(this);
        let _thisvla = _this.val()
        let _span = $('.yzm_inputBox .yzm span');
        let _Arr = new Array();
        if (_thisvla.length > 4) {
            _this.val(_thisvla.substring(0, 4));
        }
        for (i = 0; i < _thisvla.length; i++) {
            _Arr[i] = _thisvla.charAt(i);
            _span.removeClass("label");
            _span.eq(i + 1).addClass("label")
        }
        _span.html('');
        $.each(_span, function (e, d) {
            _span.eq(e).html(_Arr[e])
        });
        if (_this.val().length === 4) {
            _span.removeClass('label');
        }
        if (_this.val() === '') {
            _span.html('').removeClass("label");
            _span.eq(0).addClass('label')
        }
    })

    // 点击空白隐藏 光标跳动
    $(document).mouseup(function (e) {
        var _con = $('.yzm_inputBox .yzm span');
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            _con.removeClass('label');
        }
    });

    // 短信验证登录
    $('.SMSvalidation .submit_butt button').click(function () {
        // 确认是登录触发
        if ($(this).parents('.SMSvalidation').attr('class') === 'SMSvalidation') {
            Determine = true;
            validation()
            if (Determine === true) {
                $.ajax({
                    type: "get",
                    url: "../style/json/shopping_cart.json",
                    data: {
                        text: $('#username').val()
                    },
                    dataType: "json",
                    success: function (data) {
                        //  登录成功跳转到对应页面
                        console.log('登录成功')
                    }
                })
            }
        }
    })

    // 短信验证提示
    function validation() {
        let Yzminput = $('#yzminput').val();
        if (VerificationCode === undefined) {
            Ealt.Ealert({
                message: '请先获取手机验证码'
            });
            Determine = false;
            return
        }
        if (Yzminput === '') {
            Ealt.Ealert({
                message: '请输入手机验证码'
            });
            Determine = false;
            return
        }
        if (VerificationCode != Yzminput) {
            Ealt.Ealert({
                message: '手机验证码错误或已生失效，请重新输入'
            });

            Determine = false;
            return
        }
    }

    // 注册
    $('.zhuc .submit_butt button').click(function () {
        let _name = $('#name').val();
        let _email = $('#email').val();
        let _phonNumber = $('phonNumber').val();
        // 用户名
        if (_name == '') {
            Ealt.Ealert({
                message: ("用户名不能为空")
            });
            return
        } else if (_name.length > 8) {
            Ealt.Ealert({
                message: ("8")
            });
            return
        }
        // 邮箱
        if (_email == '') {
            Ealt.Ealert({
                message: ("邮箱不能为空")
            });
            return
        } else {
            if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(_email) == false) {
                Ealt.Ealert({
                    message: ("邮箱格式不正确，请重新填写")
                });
                _email = ''
                return
            }
        }
        Determine = true
        validation();
        if (Determine === true) {
            // 注册账号
            $.ajax({
                type: "get",
                url: "../style/json/shopping_cart.json",
                data: {
                    name: _name,
                    email: _email,
                    phonNumber: _phonNumber
                },
                dataType: "json",
                success: function (data) {
                    console.log('注册成功')
                }
            })
        }

    })

})