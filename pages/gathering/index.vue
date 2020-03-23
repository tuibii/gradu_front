<template>
  <div class="wrapper activities" style="margin-top: 110px;">
    <div class="activity-card-list">
      <div class="top-title">
        <h4 class="latest">最新活动</h4>
        <div class="clearfix"></div>
      </div>
      <div class="activity-list" >
        <ul class="activity">
          <li class="activity-item" v-for="(data,index) in dataList" :key="index">
            <div class="activity-inner">
              <div class="img">
                <nuxt-link :to="'/gathering/'+data.id"><img src="~/assets/img/w3.jpg" alt="" /></nuxt-link>
              </div>
              <div class="text">
                <p class="title">{{data.name}}</p>
                <div class="fl goin">
                  <p>时间：{{data.starttime}}</p>
                  <p>地点：{{data.address}}</p>
                </div>
                <div class="fr btn">
                  <span class="sui-btn btn-bao">立即报名</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </div> </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-activity-index.css'
    import gatheringApi from '@/api/gathering'

    export default {
        data(){
            return {
                pageNo: 1
            }
        },
        asyncData(){
            return  gatheringApi.page(1,8).then( res => {
                return {dataList: res.data.data.rows }
            })
        },
        methods: {

        }
    }
</script>

