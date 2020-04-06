<template>
<div style="display: flex;flex-direction: row;justify-content: space-around;">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的问题</span>
    </div>
    <div class="text item" v-for="(problem,index) in problemList" :key="index">
      <span class="title"><nuxt-link :to="'/qa/'+problem.id">{{problem.title}}</nuxt-link></span>
    </div>
    <nuxt-link to="/manager/myquestion" style="float: right; padding: 3px 0;color: #409eff;">更多</nuxt-link>
  </el-card>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>我的回答</span>
    </div>
    <div class="text item" v-for="(problem,index) in problemList" :key="index">
      <span class="title"><nuxt-link :to="'/qa/'+problem.id">{{problem.title}}</nuxt-link></span>
    </div>
    <nuxt-link to="/manager/myquestion" style="float: right; padding: 3px 0;color: #409eff;">更多</nuxt-link>
  </el-card>
</div>
</template>
<script>
    import qaApi from '@/api/qa'
    import axios from 'axios'
export default {
    asyncData(){
        return axios.all([qaApi.list()]).then(
            axios.spread( function( problemList ){
                return {
                    problemList: problemList.data.data
                }
            })
        )
    },
    methods:{

    }
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
    width: 480px;
  }
</style>
