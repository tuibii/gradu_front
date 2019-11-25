<template>
  <el-row :gutter="20" style="margin-top: 110px;">
    <el-col :span="18">
      <div style="display: flex;flex-direction: column;align-items: center;">
        <el-card style="width: 800px; margin: 5px;" body-style="{ padding: '20px' }" v-for="(data,index) in dataList" :key="index">
          <div style="margin: 8px;">来自话题：计算机学院</div>
          <div style="margin: 8px;display: flex;flex-direction: row;align-items: center;">
            <el-avatar shape="square" style="width: 24px;height: 24px;margin-right: 15px;">A</el-avatar>{{data.id}}
          </div>
          <div style="margin: 8px;">
            <a class="ContentItem-title" href="#" style="color: inherit;text-decoration: none;font-size: 18px;font-weight: 600;font-synthesis: style;line-height: 1.6;">{{data.title}}</a>
          </div>
          <div style="margin: 8px;">
            <span style="word-break: break-word;line-height: 1.6;">
              {{data.content}}
            </span>
          </div>
          <div style="margin: 8px;">
            <el-button type="primary" plain style="padding: 9px;"><i class="el-icon-caret-top"></i>赞同 {{data.thumbup}}</el-button>
            <el-button type="primary" plain style="padding: 9px; margin-right: 35px;"><i class="el-icon-caret-bottom"></i></el-button>
            <i class="el-icon-chat-dot-round"></i> {{data.reply}}条评论
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div style="display: flex;flex-direction: column;align-items: flex-start;">
        <el-card style="width: 300px;">
          <div style="display: flex;flex-direction: row;justify-content: space-around;">
            <el-button type="text"><i class="el-icon-chat-line-round" style="margin-bottom: 15px;"></i><div>提问题</div></el-button>
            <el-button type="text"><i class="el-icon-edit" style="margin-bottom: 15px;"></i><div>写文章</div></el-button>
            <el-button type="text"><i class="el-icon-umbrella" style="margin-bottom: 15px;"></i><div>写树洞</div></el-button>
          </div>
          <el-divider></el-divider>
          <el-button type="text"><i class="el-icon-receiving" style="margin-right: 10px;"></i>我的草稿</el-button>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import qaApi from '@/api/qa'
  export default {
      data(){
          return{
              pageNo: 1,
              busy: false
          }
      },
      asyncData(){
          return qaApi.page(1,5).then(res => {
              return { dataList: res.data.data.rows }
          })
      },
      methods:{

      }
  }
</script>
<style>
  .ContentItem-title:hover {
    color: #175199 !important;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
</style>
