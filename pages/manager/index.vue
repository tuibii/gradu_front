<template>
  <div class="home-content">
    <ul class="sui-nav nav-tabs nav-large">
      <li class="active"><a href="#one" data-toggle="tab">我的提问</a></li>
      <li><a href="#two" data-toggle="tab">我的回答</a></li>
    </ul>
    <div class="tab-content tab-wraped">
      <div id="one" class="tab-pane active">
        <ul class="question-list" v-for="(problem,index) in problemList" :key="index">
          <li> <span class="fl good"><span class="num">{{problem.reply}}</span> 回复</span> <span class="title"><nuxt-link :to="'/qa/'+problem.id">{{problem.title}}</nuxt-link></span> <span class="fr date">{{problem.createtime}}</span> <span class="clearfix"></span> </li>
        </ul>
      </div>
      <div id="two" class="tab-pane">
        <ul class="question-list">
          <li> <span class="fl good"> <span class="num">8</span> 有用</span> <span class="title"><a href="#">有关PHP初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span> </li>
          <li> <span class="fl good"> <span class="num">7</span> 有用</span> <span class="title"><a href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span> </li>
          <li> <span class="fl good"> <span class="num">6</span> 有用</span> <span class="title"><a href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span> </li>
          <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关C++初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span> </li>
          <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span> </li>
        </ul>
      </div>
    </div>
    <div class="activities" style="width: 1200px;">
      <h4 class="tit"><span>我的动态</span></h4>
      <ul class="activities-content">
        <li v-for="(dynamic,index) in dynamicList" :key="index">
          <div class="index-title">
            <span class="operate">{{dynamic.action}}</span> &middot;
            <span class="time">{{dynamic.createDate}}</span>
          </div>
          <div class="question">
            <p class="content" v-html="dynamic.content"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import qaApi from '@/api/qa'
    import userApi from '@/api/user'
    import axios from 'axios'
  export default {
      asyncData(){
          return axios.all([qaApi.list(),userApi.dynamic()]).then(
              axios.spread( function( problemList,dynamicList ){
                  return {
                      problemList: problemList.data.data,
                      dynamicList: dynamicList.data.data
                  }
              })
          )
      }
  }
</script>
