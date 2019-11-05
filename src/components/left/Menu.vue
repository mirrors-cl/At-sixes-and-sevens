<template>
<div>
  <el-tabs tab-position="left" style="max-height: 1200px;">
    <el-tab-pane v-for="item in menudata">
      <span slot="label"><i class="el-icon-s-promotion"></i> {{item.name}}</span>
        <el-card shadow="always">
            <el-row :gutter="12" align="middle">
              <el-col :span="24" style="padding-bottom:20px">
                  <i class="el-icon-s-custom"><span>{{item.data.top}}</span></i>
              </el-col>
              <el-col :span="6" v-for="content in item.data.card">
                <el-card shadow="hover">
                    <el-row>
                      <a  href="https://wwww.baidu.com">
                        <el-col :span="3">
                            <icon name="chameleon" scale="3"></icon>
                        </el-col>
                        <el-col :span="21">
                            <span class='titlestyle'>{{content.title}}</span>
                        </el-col>
                        <el-col :span="24">
                            <span style="font-size: 12px">{{content.context}}</span>
                        </el-col>
                        </a>
                    </el-row>
                </el-card>
              </el-col>
            </el-row>
        </el-card>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue{
  public isCollapse:boolean = true
  public handleOpen(key:number, keyPath:string[]){
    console.log("123",key, keyPath);
  }
  public handleClose(key:number, keyPath:string[]){
    console.log("321",key, keyPath);
  }
  public Jumpfun(){
      debugger
      alert('测试卡片触发跳转')
  }
  // 菜单数据
  public menudata:Array<object> = [
    {
      name:'前端导航',
      data:{
        top:'团队管理',
        card:[
        {
          title:'腾讯',
          context:'腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究'
        },
        {
          title:'ISUX',
          context:'腾讯社区用户体验设计，简称ISUX，腾讯设计团队网站'
        },
        {
          title:'FEX',
          context:'百度web前端研发部出品'
        },
        {
          title:'淘宝前端团队(FED)',
          context:'用技术为体验提供无限可能'
        }
      ]
      }
    },
    {
      name:'后端导航',
      data:{
        top:'业务发展',
        card:[
         {
          title:'后腾讯',
          context:'腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究'
        },
        {
          title:'ISUX',
          context:'腾讯社区用户体验设计，简称ISUX，腾讯设计团队网站'
        },
        {
          title:'FEX',
          context:'百度web前端研发部出品'
        },
        {
          title:'淘宝前端团队(FED)',
          context:'用技术为体验提供无限可能'
        }
      ]
      }
    }
  ]

}
</script>
<style lang="scss" scoped>
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  };
  .menubody{
    background-color: black
  };
  .titlestyle{
      color: transparent;
      font-size: 20px;
      font-weight: bold;
      background: linear-gradient(45deg, rgba(0,173,181,1) 0%, rgba(0,173,181,.4)  100%);
      -webkit-background-clip: text;
  }
  a{
    text-decoration:none;
    color:#333;
  }
</style>
