<template>
    <div class="boxSetthe">
        <div class="seek-top on">
            <a href="JavaScript:;" class="return"@click="$router.replace('/profile');"></a>
            <span>设置中心</span>
            <div class="msShortcutMenu"><span></span></div>
        </div>

        <div class="Set_center">
            <ul  @click="click">
                <li>
                    <a href="JavaScript:;">我的信息 <span>头像/用户名</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">地址管理 <span>新增/修改地址</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">修改邮箱 <span>绑定/修改邮箱</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">修改手机号 <span>绑定/修改手机号</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">修改密码 <span>修改密码</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">忘记密码 <span>找回密码</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">实名验证 <span>身份证号码/真实姓名</span></a>
                </li>
                <li>
                    <a href="JavaScript:;">申请注销 <span>删除注销账号</span></a>
                </li>
            </ul>

            <button @click="exit">退出登录</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Setthe",
  data() {
    return {};
  },
  methods: {
    exit() {
      localStorage.removeItem("Flag");
      this.$router.replace("/home");
      this.Prompt.showToast({
        title: "退出登录",
        mask: false,
        duration: 1500,
      });
    },
    click() {
      this.Prompt.showMessage({
        title: "功能未实现",
        backgroundColor: "red",
        duration: 500,
      });
    },
  },
};
</script>

<style>
.boxSetthe{
        min-height: 100vh;
    background-color: #f6f6f6;
    position: relative;
    z-index: 999999999;
}
</style>
