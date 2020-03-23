<template>
  <div style="margin-top: 110px;">
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="tc-data-list">
          <div class="tc-list">
            <ul class="detail-list">

              <li class="qa-item" v-for="(item,index) in items" :key="index">
                <div class="fl record">
                  <div class="number">
                    <div class="border answer">
                      <p class="usenum"><i class="fa fa-thumbs-up " aria-hidden="true"></i></p>
                      <p class="zannum"> {{item.thumbup}} </p>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <nuxt-link :to="'/treehole/'+item._id">
                  <p class="text" v-html="item.content">
                    {{item.content}}
                  </p>
                  </nuxt-link>
                  <div class="other">
                    <div class="fl date">
                      <span>{{item.publishtime}}</span>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div> </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="fl right-tag">
        <el-card style="width: 300px;">
          <div style="display: flex;flex-direction: row;justify-content: space-around;">
            <nuxt-link to="/treehole/qa-submit"><el-button type="text"><i class="el-icon-chat-line-round" style="margin-bottom: 15px;"></i><div>提问题</div></el-button></nuxt-link>
            <nuxt-link to="/treehole/treehole-submit"><el-button type="text"><i class="el-icon-umbrella" style="margin-bottom: 15px;"></i><div>写树洞</div></el-button></nuxt-link>
            <nuxt-link to="/treehole/treehole-submit"><el-button type="text"><i class="el-icon-basketball" style="margin-bottom: 15px;"></i><div>办活动</div></el-button></nuxt-link>
          </div>
        </el-card>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-spit-index.css'
    import treeholeApi from '@/api/treehole'
    export default {
        asyncData(){
            return treeholeApi.search().then( res=> {
                return {items:res.data.data}
            })
        },
        data(){
            return{

            }
        }
    }
</script>
