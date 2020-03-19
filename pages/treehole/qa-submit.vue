<template>
  <div class="wrapper release-tc" style="margin-top: 110px;min-height: 450px;">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;padding-right: 800px;">
      <el-breadcrumb-item :to="{ path: '/treehole' }">返回树洞</el-breadcrumb-item>
      <el-breadcrumb-item>提问题</el-breadcrumb-item>
    </el-breadcrumb>
   <el-card>
     <h3>标题</h3>
     <el-input v-model="title"></el-input>
     <el-divider></el-divider>
     <h3>内容</h3>
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
import qaApi from '@/api/qa'
export default {
    data () {
      return {
          content: '',
          title: '',
          editorOption: {
              // some quill options
              placeholder: ' ',
              modules: {
                  toolbar: [
                      [{ 'size': ['small', false, 'large'] }],
                      ['bold', 'italic'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }]
                  ]
              }
          }
      }
    },
    methods: {
      save(){
          qaApi.save({ content:this.content ,title:this.title}).then(res=>{
              this.$message({
                  message: res.data.message,
                  type: (res.data.flag?'success':'error')
              })
              if(res.data.flag){
                  this.$router.push('/qa')
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
