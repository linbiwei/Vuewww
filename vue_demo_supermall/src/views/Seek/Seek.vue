<template>
   <div class="seek" @click="click">
     <navBarr></navBarr>
      <div class="seek_record seek_hot" id="seek_hot">
            <div class="seek_record_tit">
                <p>热门搜索</p> 
                <!-- <span>隐藏</span>  -->
            </div>
            <ul>
                <li key="mis ">mis </li>
                <li key="R5 3600x">R5 3600x</li>
                <li key="mis 微星b450m max">mis 微星b450m max</li>
                <li key="机械硬盘 固态硬盘">机械硬盘 固态硬盘</li>
                <li key="温奶器">温奶器</li>
                <li key="显卡支架">显卡支架</li>
                <li key="2060s显卡">2060s显卡</li>
                <li key="三星mr2.0 970">三星mr2.0 970</li>
                <li key="144hz ips 显示器">144hz ips 显示器</li>
            </ul>
        </div>
   </div>
</template> 

<script>
import navBarr from './nav-seek'
export default {
  name: 'seek',
  components: {
    navBarr
  },
  methods: {
     click(){
       this.Prompt.showMessage({
          title: '功能未实现',
          backgroundColor: 'red',
         duration: 1500
      });
     }
  }
 
}
</script>

<style>
  
</style>
