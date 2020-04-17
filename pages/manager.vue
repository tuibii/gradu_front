<template>
  <el-container style="margin-top: 100px;">
    <el-aside width="200px">
      <el-menu :default-openeds="['1','2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>我的主页</template>
          <el-menu-item-group>
            <nuxt-link to="/manager"><el-menu-item index="1-1">我的主页</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/myqa"><el-menu-item index="1-2">我的问答</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/mytreehole"><el-menu-item index="1-3">我的树洞</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/mygathering"><el-menu-item index="1-4">我的活动</el-menu-item></nuxt-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>其他</template>
          <el-menu-item-group>
            <nuxt-link to="/manager/mycollect"><el-menu-item index="2-1">我的收藏</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/account"><el-menu-item index="2-2">账户设置</el-menu-item></nuxt-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 180px;background-color: #B3C0D1;display: flex;flex-direction:column;justify-content: space-around;align-items: center;">
        <el-upload class="avatar-uploader" :headers="ossHeader" :action="uploadUrl" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <el-avatar style="width: 80px;height: 80px;" v-if="user.avatar === '' || user.avatar === null"> {{user.nickname}} </el-avatar>
          <el-avatar style="width: 80px;height: 80px;" v-else>
            <img :src="user.avatar"/>
          </el-avatar>
        </el-upload>
        <div>{{user.nickname}}</div>
      </el-header>
      <el-main>
        <nuxt-child />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import '~/assets/css/page-sj-person-homepage.css'
import {getUser,setUser} from '@/utils/auth'
import userApi from '@/api/user'
  export default {
      asyncData () {
          return userApi.info().then(res => {
              if (!res.data.flag) {
                  this.$message({
                      message: res.data.message,
                      type: "error",
                      offset: 100,
                      duration: 2000,
                      onClose: function () {
                          location.href='/login'
                      }
                  })
              } else {
                  return { user: res.data.data }
              }
          })
      },
      data () {
          return {
              ossHeader: {'token':getUser().token+''},
              uploadUrl: 'http://localhost:9011/user/oss/avatar'
          }
      },
      methods: {
          handleAvatarSuccess(res, file) {
              this.user.avatar = res.data
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
