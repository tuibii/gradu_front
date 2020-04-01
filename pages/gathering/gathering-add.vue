<template>
  <el-dialog :visible.sync="visible" title="发布活动" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="dataForm.name" placeholder="活动名称"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="summary">
        <el-input v-model="dataForm.summary" placeholder="简介" type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item label="封面图" prop="image">
        <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="dataForm.image" :src="dataForm.image" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="详细说明" prop="detail">
        <el-input v-model="dataForm.detail" placeholder="详细说明" type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item label="主办方" prop="sponsor">
        <el-input v-model="dataForm.sponsor" placeholder="主办方"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="address">
        <el-input v-model="dataForm.address" placeholder="活动地点"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="city">
        <el-input v-model="dataForm.city" placeholder="联系方式"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="starttime">
        <el-date-picker v-model="dataForm.starttime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="开始时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="endtime">
        <el-date-picker v-model="dataForm.endtime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="结束时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="截至报名时间" prop="enrolltime">
        <el-date-picker v-model="dataForm.enrolltime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="截至报名时间"></el-date-picker>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmitHandle()">确认</el-button>
    </template>
  </el-dialog>
</template>
<script>
  import gatheringApi from '@/api/gathering'
  export default {
      data () {
          return {
              visible: false,
              uploadUrl: 'http://localhost:9011/gathering/oss/upload',
              dataForm: {
                  name: '',
                  summary: '',
                  image: '',
                  detail: '',
                  sponsor: '',
                  starttime: '',
                  endtime: '',
                  address: '',
                  enrolltime: '',
                  city: ''
              }
          }
      },
      methods: {
          init () {
              this.visible = true
              this.$nextTick(() => {
                  this.$refs['dataForm'].resetFields()
              })
          },
          dataFormSubmitHandle () {
              gatheringApi.save(this.dataForm).then(res => {
                  this.$message({
                      message: res.data.message,
                      type: (res.data.flag?'success':'error')
                  })
                  if (res.data.flag) {
                      this.visible = false
                  }
              })
          },
          handleAvatarSuccess(res, file) {
              this.dataForm.image = res.data
          },
          beforeAvatarUpload(file) {
              const isJPG = file.type === 'image/jpeg'
              const isLt2M = file.size / 1024 / 1024 < 2

              if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG 格式!')
              }
              if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 2MB!')
              }
              return isJPG && isLt2M
          }
      }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
