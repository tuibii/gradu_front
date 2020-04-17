<template>
  <el-card class="box-card" style="width: 100%;">
    <div slot="header" class="clearfix">
      <span>我的树洞</span>
    </div>
    <div v-for="(data, index) in dataList" :key="index" class="text item">
        <div v-html="data.content"></div>
        <el-divider></el-divider>
    </div>
  </el-card>
</template>
<script>
    import treeholeApi from '@/api/treehole'
    import {getUser} from '@/utils/auth'
    export default {
      asyncData(){
          let name = getUser().name
          return treeholeApi.mytreehole(name).then( res=> {
              return {dataList:res.data.data}
          })
      },
    }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 900px;
  }
</style>
