<template>
<div style="display: flex;flex-direction: row;justify-content: space-around;">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的问题</span>
    </div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题
      <nuxt-link to="/manager/myquestion" style="float: right; padding: 3px 0;color: #409eff;">更多</nuxt-link>
    </div>
  </el-card>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的回答</span>
    </div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题</div>
    <div class="text item">有关PHP初级进阶的问题
      <nuxt-link to="/manager/myanswer" style="float: right; padding: 3px 0;color: #409eff;">更多</nuxt-link>
    </div>
  </el-card>
</div>
</template>
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
    width: 480px;
  }
</style>
<script>
export default {
    methods:{

    }
}
</script>

