<template>
  <div style="margin-top: 110px;min-height: 550px;display: flex;flex-direction: column;align-items: center;">
    <el-card :body-style="{display:'flex',padding:'15px',justifyContent:'center'}" style="width: 80%;margin: 10px;">
      <div style="width: 700px;">
        <h1 style="margin: 4px;font-size: 22px;font-weight: 600;font-synthesis: style;line-height: 32px;color:#1a1a1a;">青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪？</h1>
        <div style="margin: 4px;font-size: 15px;line-height: 25px;">
          青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪
        </div>
        <div>
          <el-button type="primary">关注问题</el-button>
          <el-button>写回答</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{padding:'15px'}" style="width: 80%;margin: 10px;">
      <div slot="header" class="clearfix">
        <span>197 个回答</span>
      </div>
      <div>
        <div>
          青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪
        </div>
        <el-divider></el-divider>
      </div>

    </el-card>
  </div>
</template>
<script>
  import qaApi from '@/api/qa'
  import axios from 'axios'
  export default {
      // asyncData({params}){
      //     return axios.all([qaApi.findById(params.id), qaApi.replylist(params.id)]).then(
      //         axios.spread( function( pojo,replylist ){
      //             return {
      //                 pojo: pojo.data.data,
      //                 replylist: replylist.data.data
      //             }
      //         })
      //     )
      // }
  }
</script>
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
