<template>
  <div class="wrapper release-tc" style="margin-top: 110px;min-height: 450px;">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;padding-right: 800px;">
      <el-breadcrumb-item :to="{ path: '/treehole' }">返回树洞</el-breadcrumb-item>
      <el-breadcrumb-item>写树洞</el-breadcrumb-item>
    </el-breadcrumb>
   <el-card>
     <h3>树洞</h3>
     <div class="quill-editor"
          :content="content"
          @change="onEditorChange($event)"
          v-quill:myQuillEditor="editorOption">
     </div>
     <el-button @click="save" style="margin-top: 15px;">发布</el-button>
   </el-card>
  </div>

</template>
<script>
import treeholeApi from '@/api/treehole'
import {getUser} from'@/utils/auth'
export default {
    data () {
      return {
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
    methods: {
      save(){
          treeholeApi.save({ content:this.content,nickname:getUser().name }).then(res=>{
              this.$message({
                  message: res.data.message,
                  type: (res.data.flag?'success':'error'),
                  offset: 100
              })
              if(res.data.flag){
                  this.$router.push('/treehole')
              }
          })
      },
        onEditorChange({ editor, html, text }) {
            this.content = html
        },
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
