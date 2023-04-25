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
import Menu from '@/components/left/Menu.vue'

@Component({
  components: {
    Menu
  },
})
export default class Home extends Vue {}

</script>
<style lang="scss" scoped>
</style>