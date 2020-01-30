<template>
  <el-container style="margin-top: 100px;">
    <el-aside width="200px">
      <el-menu :default-openeds="['1','2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>我的主页</template>
          <el-menu-item-group>
            <nuxt-link to="/manager"><el-menu-item index="1-1">我的主页</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/myqa"><el-menu-item index="1-2">我的问答</el-menu-item></nuxt-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>我的动态</template>
          <el-menu-item-group>
            <nuxt-link to="/manager/dynamic"><el-menu-item index="2-1">个人动态</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/myfocus"><el-menu-item index="2-2">我的关注</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/myfocus"><el-menu-item index="2-3">我的粉丝</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/mycollect"><el-menu-item index="2-4">我的收藏</el-menu-item></nuxt-link>
            <nuxt-link to="/manager/account"><el-menu-item index="2-5">账户设置</el-menu-item></nuxt-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 180px;background-color: #B3C0D1;display: flex;flex-direction:column;justify-content: space-around;align-items: center;">
        <el-avatar style="width: 80px;height: 80px;"> admin </el-avatar>
        <div>admin</div>
        <div>159关注  100粉丝</div>
      </el-header>
      <el-main>
        <nuxt-child />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import '~/assets/css/page-sj-person-homepage.css'
  export default {

  }
</script>
