<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manager/myqa' }">我的问答</el-breadcrumb-item>
      <el-breadcrumb-item>所有问题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="questions">
      <h4><span>所有问题</span></h4>
      <ul class="question-list">
        <li> <span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关PHP初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关C++初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
      </ul>
    </div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-myquestion.css'
export default {

}
</script>

