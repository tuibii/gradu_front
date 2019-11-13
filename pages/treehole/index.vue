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
        <div class="block-btn">
          <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
          <a class="sui-btn btn-block btn-share" href="./spit-submit.html" target="_blank">发吐槽</a>
        </div>
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
