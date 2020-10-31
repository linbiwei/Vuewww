<template>
  <div class="shopping_cart">
        <!-- 头部 -->
        <div class="seek-top on">
            <a href="JavaScript:;" onclick="window.history.go(-1)" class="return"></a>
            <span>账号登录</span>
            <div class="msShortcutMenu"> <span><a href="JavaScript:;">注册</a></span></div>
        </div>

        <!-- 账号登录 -->
        <div class="account_box">
            <div class="denglu">
                <label for="username">
                    <i class="close"></i>
                    <input type="text" placeholder="请输入手机号/用户名/邮箱" id="username" name="username" v-model="name">
                </label>
                <label for="password" class="password">
                    <i class="close passwor_close" ></i>
                    <i class="ico-eye" @click="type == 'password' ? type = 'text' : type = 'password'"></i>
                    <input :type="type" placeholder="请输入密码" id="password" maxlength="20" v-model="password" >
                    <a href="JavaScript:;">忘记密码</a>
                </label>
                <div class="submit_butt">
                    <button @click="Thelogin">登录</button>
                    <a href="JavaScript:;">短信验证码登录</a>
                </div>
            </div>
        </div>

        <!-- 快捷登录 -->
        <div class="quick_login">
            <h3> <span>其他登录方式</span> </h3>
            <div class="quick_ico">
                <a href="" class="qq_ico">QQ</a>
                <a href="" class="wx_ico">微信</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "login",
  data () {
      return {
          name:"Administrator",
          password:123456,
          type:'password'
      }
  },
  methods: {
      Thelogin(){
         if( this.name == 'Administrator' && this.password == 123456){
              this.Prompt.showToast({
                title: '登录成功',
                mask: false,
                duration: 1500
            });
            localStorage.setItem('Flag', 'isLogin');
            if(JSON.parse(localStorage.getItem('shoppingCartList')) !=null){
                this.$store.state.shoppingCartList  = JSON.parse(localStorage.getItem('shoppingCartList'))
            }
            if(this.$route.fullPath == '/Login'){
                //  跳转到我的
                this.$router.replace('/profile');
            }else{
                //  跳转进来的页面/profile
                this.$router.replace(this.$route.query.redirect);
                document.body.style.overflow = "";
            }
            
         }else{
             this.Prompt.showToast({
                title: '账号/密码错误',
                mask: false,
                duration: 1500
            });
         }
      }
  },
};
</script>

<style scoped>
</style>
