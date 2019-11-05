<template>
  <div class="code" @click="refreshCode">
 <!-- ：fresh：父组件向子组件传送刷新验证码的信号；
    @makedCode：子组件向父组件传送验证码的值-->
    <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
  </div>
</template>
 
<script>
  import SIdentify from '@/components/identify.vue'
  export default {
    name: "codetest",
    data() {
      return {
        flag:true,  //该值变化，就会触发刷新
        code:'',  //刷新后的验证码
      };
    },
  components : {
    SIdentify,
  },
  // 验证码初始化
  mounted() {
    this.flag = !this.flag;
  },
  methods: {
    // 切换验证码
    refreshCode() {
      this.flag = !this.flag;
    },
    getMakedCode(code){
      this.code = code
      console.log("getMakedCode:",this.code);
    }
  }
  };
</script>
