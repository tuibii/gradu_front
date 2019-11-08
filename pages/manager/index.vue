<template>
  <el-container style="margin-top: 100px;flex-direction:column;align-items: center;">
    <el-header style="width: 800px;height: 180px;background-color: #B3C0D1;display: flex;flex-direction:column;justify-content: space-around;align-items: center;">
      <el-avatar style="width: 80px;height: 80px;"> admin </el-avatar>
      <div>admin</div>
      <div>159关注  100粉丝</div>
    </el-header>
    <el-container style="display: flex;flex-direction:row;justify-content: left;width: 100%;height: 800px;">
      <el-aside>
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="background-color: #1ba157;"></el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {

  }
</script>
