<template>
  <div class="wrapper activities" style="margin-top: 110px;">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
      <el-breadcrumb-item :to="{ path: '/gathering' }">返回活动</el-breadcrumb-item>
      <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
   <div class="img-text">
    <div class="left-img">
    </div>
    <div class="right-txt">
     <p>开始时间： {{item.starttime}}</p>
     <p>结束时间： {{item.endtime}}</p>
     <p>举办地点： {{item.address}}</p>
     <p>主办方：{{item.sponsor}}</p>
     <p>报名截止：{{item.enrolltime}}
     <div class="join">
      <button class="sui-btn btn-danger">立即报名</button>
      <span class="will">报名即将开始</span>
     </div>
    </div>
   </div>
   <div class="simple-text">
    <div class="left-content">
     <div class="content-item">
      <div class="tit">
       <span>活动简介</span>
      </div>
      <div class="text">
       <h4></h4>
       <p>{{item.summary}}</p>
      </div>
     </div>
     <div class="content-item">
      <div class="tit">
       <span>活动介绍</span>
      </div>
      <div class="text">
       <h4></h4>
       <p>{{item.detail}}</p>
      </div>
     </div>
    </div>
    <div class="right-intro">
     <div class="content-item">
      <div class="tit">
       <span>主办方</span>
      </div>
      <div class="text">
       <p> {{item.sponsor}}</p>
      </div>
     </div>
     <div class="content-item">
      <div class="tit">
       <span>联系方式</span>
      </div>
      <div class="text">
       <p>QQ群： 771134166</p>
      </div>
     </div>
     <div class="content-item">
      <div class="tit">
       <span>分享</span>
      </div>
      <div class="social-share" data-sites="weibo,wechat" :data-title="item.name" data-url="https://github.com/tuibii">

      </div>
     </div>
    </div>
   </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-activity-detail.css"
import gatheringApi from '@/api/gathering'
export default {
    asyncData( {params} ){
        return gatheringApi.findById(params.id).then(res=>{
            return {item: res.data.data}
        })
    },
    head: {
        script:[
            {src: 'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js'}
        ],
        link: [
            {rel:'stylesheet' ,href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
        ]
    }
}
</script>
