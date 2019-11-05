<template>
  <div class="home">
    <el-container>
      <!-- leftText -->
      <!-- <el-aside width="210px"></el-aside> -->
      <!-- main <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
      <el-main><Menu></Menu></el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Menu from '@/components/left/Menu.vue'

@Component({
  components: {
    HelloWorld,
    Menu
  },
})
export default class Home extends Vue {}

</script>
<style lang="scss" scoped>
  // .el-aside {
  //   background-color: rgb(255, 255, 255);
  //   // color: #333;
  //   // text-align: center;
  //   // line-height: 200px;
  // }
  
  // .el-main {
  //   background-color: #E9EEF3;
  //   color: #333;
  //   text-align: center;
  //   line-height: 160px;
  // }
</style>