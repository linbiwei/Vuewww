<template>
  <div id="app">
    <h2>----------APP组件---------</h2>
    <!-- 使用 store 里定义的数据-->
    <p>app 组件的 {{$store.state.msg}}</p>

    <p>----mutations 定义的方法----</p>
    <button @click="msgjia"> + + </button>
    <button @click="msgjian"> — — </button>
    <button @click="msgmmm(5)"> +5 </button>
    <button @click="msgmmm(10)"> +10 </button>
    <p>----getters 计算属性----</p>
    <h3>{{$store.getters.square}}</h3>
    <h3>{{$store.getters.more}}</h3>
    <h3>{{$store.getters.moerlen}}</h3>
    <h3>{{$store.getters.moeragestu(22)}}</h3>

    <!--  -->
     <h2>----------HelloWorld组件---------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>

import helloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
    return {
        // msg : 0
    }
  },
  components: {
    helloWorld
  },
  methods: {
    msgjia(){
      // 调用store  里的'statejia方法
      // 必须这样写  this.$store.commit
      this.$store.commit('statejia');
      console.log(this.$store)
    },
    msgjian(){
      this.$store.commit('statejian')
    },
    msgmmm(a){
      this.$store.commit('statennnn',a)
    }
  }
}
</script>

<style>

</style>
