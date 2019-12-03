<template>
  <el-container style="margin-top: 110px;">
    <el-header>
      <el-card :body-style="{display:'flex',width:'100%'}">
        <div>

        </div>
      </el-card>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>
<script>
  export default {
      asyncData({params}){
          return params
      }
  }
</script>
