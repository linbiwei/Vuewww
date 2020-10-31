<template>
  <div>
    <div class="header-Mobile-my">
      <div>个人中心<a href="JavaScript:;" @click="$router.replace('/profile/Setthe');"></a></div>
    </div>
    <div class="order_user" @click="click">
      <!-- 用户 -->
      <div class="The_user">
        <div class="user_details">
          <div class="user_img">
            <a href="JavaScript:;">
              <img
                src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_34_120x120.jpg?t=?v=2020062401"
                alt=""
              />
            </a>
          </div>
          <div class="user_text">
            <!-- 用户名 -->
            <a href="JavaScript:;">
              <p>1570****10</p>
            </a>
            <!-- 用户ID -->
            <span>ID：12346</span>
          </div>
        </div>
        <div class="user_property">
          <a href="JavaScript:;">
            <div>
              <span>￥56.55</span>
              <p>余额</p>
            </div>
          </a>
          <a href="JavaScript:;">
            <div>
              <span>1196</span>
              <p>积分</p>
            </div>
          </a>
          <a href="JavaScript:;">
            <div>
              <span>12</span>
              <p>关注</p>
            </div>
          </a>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="The-order">
        <div class="order-tit">
          <h3>我的订单</h3>
          <a href="JavaScript:;">查看全部</a>
        </div>
        <div class="order-content">
          <div>
            <a href="JavaScript:;">
              <i class="be-paid"></i>
              <span>待支付</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="The-goods"></i>
              <span>待收货</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="To-evaluate"></i>
              <span>待评价</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="Refund-Return"></i>
              <span>退款/退货</span>
            </a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="The-order">
        <div class="order-tit">
          <h3>必备工具</h3>
        </div>
        <div class="order-content">
          <div>
            <a href="JavaScript:;">
              <i class="iaddress"></i>
              <span>收货地址</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="igoods"></i>
              <span>修改密码</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="idata"></i>
              <span>修改资料</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="ihistory"></i>
              <span>我的关注</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="iemail"></i>
              <span>绑定邮箱</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="real-name"></i>
              <span>实名认证</span>
            </a>
          </div>

          <div>
            <a href="JavaScript:;">
              <i class="iCustomer"></i>
              <span>客服</span>
            </a>
          </div>
          <div>
            <a href="JavaScript:;">
              <i class="iopinion"></i>
              <span>意见反馈</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {};
  },
  methods: {
    click() {
      this.Prompt.showMessage({
        title: "功能未实现",
        backgroundColor: "red",
        duration: 1500,
      });
    },
  },
};
</script>

<style>
</style>
