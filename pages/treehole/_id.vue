<template>
    <div class="wrapper tc-detail" style="margin-top: 110px;min-height: 450px;">
    <div class="fl left-list">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
        <el-breadcrumb-item :to="{ path: '/treehole' }">返回广场</el-breadcrumb-item>
        <el-breadcrumb-item>{{pojo.nickname}}的树洞</el-breadcrumb-item>
      </el-breadcrumb>
     <div class="tc-detail">
      <!-- 标题区 -->
      <div class="detail-tit">
       <div class="detail-author">
         <el-avatar>{{pojo.nickname}}</el-avatar>
       </div>
       <div class="detail-content" v-html="pojo.content">
        <p>{{pojo.content}}</p>

       </div>
       <div class="detail-tool">
        <ul>
         <li><span @click="toComment"><i class="fa fa-commenting" aria-hidden="true"></i> {{pojo.comment}}</span></li>
        </ul>
       </div>
      </div>

      <!-- 评论区 -->
      <div class="comment-area" v-if="commentlist.length > 0">
       <div class="comment-tit">
        <span>评论</span>
       </div>
       <ul class="comment-list">
        <li v-for="(item,index) in commentlist" :key="index">
         <div class="item-photo">
           <el-avatar >{{item.nickname}}</el-avatar>
         </div>
         <div class="item-content" v-html="item.content">
          <p class="content"></p>
         </div>
        </li>

       </ul>
      </div>
     </div>
    </div>
    <div class="fl right-tag">
      <el-card style="width: 300px;">
        <div style="display: flex;flex-direction: row;justify-content: space-around;">
          <nuxt-link to="/treehole/qa-submit"><el-button type="text"><i class="el-icon-chat-line-round" style="margin-bottom: 15px;"></i><div>提问题</div></el-button></nuxt-link>
          <nuxt-link to="/treehole/treehole-submit"><el-button type="text"><i class="el-icon-umbrella" style="margin-bottom: 15px;"></i><div>写树洞</div></el-button></nuxt-link>
        </div>
      </el-card>
    </div>
    <div class="clearfix"></div>

    <el-dialog
        title="评论" :visible.sync="dialogVisible">
        <div class="quill-editor"
            :content="content"
            @change="onEditorChange($event)"
            v-quill:myQuillEditor="editorOption">
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">提交</el-button>
        </span>
    </el-dialog>

   </div>
</template>
<script>
import '~/assets/css/page-sj-spit-detail.css'
import treeholeApi from '@/api/treehole'
import axios from 'axios'
import {getUser} from'@/utils/auth'
export default {
    asyncData({params}){
        return axios.all( [ treeholeApi.findById(params.id),treeholeApi.commentlist(params.id)  ] ).then(
            axios.spread( function( pojo,commentlist ){
                return {
                    pojo: pojo.data.data,
                    commentlist: commentlist.data.data
                }
            })
         )
    },
    data(){
        return {
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
        save(){
          treeholeApi.save({ content:this.content,parentid:this.pojo._id,nickname:getUser().name }).then(res=>{
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
                  treeholeApi.commentlist(this.pojo._id ).then( res=>{
                      this.commentlist=res.data.data
                  })
                  this.pojo.comment = this.pojo.comment+1
              }
          })
        },
        toComment(){
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
        }
    }

}
</script>

<style>
  .quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
  }
</style>
