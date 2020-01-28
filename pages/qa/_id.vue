<template>
  <div style="margin-top: 110px;min-height: 550px;display: flex;flex-direction: column;align-items: center;">
    <el-card :body-style="{display:'flex',padding:'15px',justifyContent:'center'}" style="width: 80%;margin: 10px;">
      <div style="width: 700px;">
        <h1 style="margin: 4px;font-size: 22px;font-weight: 600;font-synthesis: style;line-height: 32px;color:#1a1a1a;">{{problem.title}}</h1>
        <div style="margin: 4px;font-size: 15px;line-height: 25px;">{{problem.content}}</div>
        <div>
          <el-button type="primary" v-if="!problem.focus" @click="focusProblem">关注问题</el-button>
          <el-button type="primary" v-if="problem.focus" disabled>已关注</el-button>
          <el-button @click="toReply">写回答</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{padding:'15px'}" style="width: 80%;margin: 10px;">
      <div slot="header" class="clearfix">
        <span>{{replyList.length}} 个回答</span>
      </div>
      <div class="reply-item" v-for="(item,index) in replyList" :key="index">
        <div class="reply-item-info">
          <el-avatar style="margin: 10px;">{{item.nickname}}</el-avatar>
          <span>{{item.nickname}}</span>
        </div>
        <div class="reply-item-content" v-html="item.content"></div>
        <div class="reply-item-rate">
          <el-rate v-if="item.canRate" v-model="item.rate" show-score text-color="#ff9900" @change="rateReply(index)"></el-rate>
          <el-rate v-else disabled show-score text-color="#ff9900" v-model="item.rate"></el-rate>
        </div>
        <el-divider content-position="left">于 {{item.createtime}} 回答</el-divider>
      </div>
    </el-card>
    <el-dialog
      title="回答问题" :visible.sync="dialogVisible">
      <div class="quill-editor"
           :content="content"
           @change="onEditorChange($event)"
           v-quill:myQuillEditor="editorOption">
      </div>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="reply">提交</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
  import qaApi from '@/api/qa'
  import axios from 'axios'
  import {getUser} from'@/utils/auth'
  import qa from "../../api/qa";
  export default {
      asyncData({params}){
          return axios.all([qaApi.findById(params.id), qaApi.replylist(params.id)]).then(
              axios.spread( function( problem,replyList ){
                  return {
                      problem: problem.data.data,
                      replyList: replyList.data.data
                  }
              })
          )
      },
      data(){
          return {
              rateValue: [],
              dialogVisible: false,
              content: '',
              editorOption: {
                  // some quill options
                  placeholder: ' ',
                  modules: {
                      toolbar: [
                          [{ 'size': ['small', false, 'large'] }],
                          ['bold', 'italic'],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                          ['link', 'image']
                      ]
                  }
              }
          }
      },
      methods:{
          onEditorChange({ editor, html, text }) {
              this.content = html
          },
          toReply(){
              if (getUser().name === undefined){
                  this.$message({
                      message: "请先登录",
                      type: "error",
                      offset: 100,
                      duration: 2000,
                      onClose: function () {
                          location.href='/login'
                      }
                  })

              }else {
                  this.dialogVisible=true
                  this.content=''
              }
          },
          reply(){
              qaApi.reply({
                  problemid: this.problem.id,
                  content: this.content
              }).then(res => {
                  let _this = this
                  this.$message({
                      message: res.data.message,
                      type: (res.data.flag?'success':'error'),
                      offset: 100,
                      duration: 500,
                      onClose: function () {
                          if (res.data.flag){
                              _this.dialogVisible=false
                          }
                      }
                  })
                  if(res.data.flag){
                      //刷新数据
                      qaApi.replylist(this.problem.id).then( res=>{
                          this.replyList=res.data.data
                      })
                  }
              })
          },
          focusProblem(){
              if (getUser().name === undefined){
                  this.$message({
                      message: "请先登录",
                      type: "error",
                      offset: 100,
                      duration: 2000,
                      onClose: function () {
                          location.href='/login'
                      }
                  })
              }else {
                  // qaApi
                  qaApi.focusProblem(this.problem.id).then(res => {
                      this.$message({
                          message:res.data.message,
                          offset:100,
                          duration: 2000,
                          type:res.data.flag?'success':'error'
                      })
                      qaApi.findById(this.problem.id).then( res=>{
                          this.problem=res.data.data
                      })
                  })
              }
          },
          rateReply(index){
              if (getUser().name === undefined){
                  this.$message({
                      message: "请先登录",
                      type: "error",
                      offset: 100,
                      duration: 2000,
                      onClose: function () {
                          location.href='/login'
                      }
                  })
              }else {
                  // qaApi
                  qaApi.rateReply(this.replyList[index].id,this.replyList[index].rate).then(res => {
                      if (res.data.flag){
                          this.replyList[index].canRate = false
                      }
                      this.$message({
                          message:res.data.message,
                          offset:100,
                          type:res.data.flag?'success':'error'
                      })
                      qaApi.replylist(this.problem.id).then( res=>{
                          this.replyList=res.data.data
                      })
                  })
              }
          }
      }
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
  .reply-item{
    margin-bottom: 30px;
  }
  .reply-item-info{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .reply-item-content{
    margin: 4px;
    font-size: 15px;
    line-height: 25px;
  }
  .reply-item-rate{
    margin-top: 8px;
  }
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
