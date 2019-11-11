<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manager/myqa' }">我的问答</el-breadcrumb-item>
      <el-breadcrumb-item>所有回答</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="answers">
      <h4><span>所有回答</span></h4>
      <ul class="answer-list">
        <li> <span class="fl good"> <span class="num">8</span> 有用</span> <span class="title"><a href="#">有关PHP初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"> <span class="num">7</span> 有用</span> <span class="title"><a href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"> <span class="num">6</span> 有用</span> <span class="title"><a href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关C++初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
        <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>
      </ul>
    </div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-myanswer.css'
export default {


}
</script>

