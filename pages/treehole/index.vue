<template>
  <div style="margin-top: 110px;">
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="tc-data-list">
          <div class="tc-list">
            <ul class="detail-list">

              <li class="qa-item">
                <div class="fl record">
                  <div class="number">
                    <div class="border answer">
                      <p class="usenum"><a href="#" class="zan"><i class="fa fa-thumbs-up " aria-hidden="true"></i></a></p>
                      <p class="zannum"> 11 </p>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <p class="text">
                    <a href="./spit-detail.html" target="_blank"> 面试说通过了要回去等offer，现在都两周了，还说在ceo审批，两天联系hr一次，都说还在等审批什么情况？工资什么的都谈好了，也要了工资证明。面试说通过了，要回去等offer，现在都两周了还说在ceo审批，两天联系hr一次，都说还在等审批，什么情况？？工资什么的都谈好了，也要了工资证明。也工资证明。 </a>
                  </p>
                  <div>
                    <el-image :src="url" style="width: 100px; height: 100px">
                      <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                      </div>
                    </el-image>
                  </div>
                  <div class="other">
                    <div class="fl date">
                      <span>2017-7-23 12:02</span>
                    </div>
                    <div class="fr remark">
                      <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i> 分享</a>
                      <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> 回复</a>
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
    export default {
        data(){
            return{
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList:[
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
                ]
            }
        }
    }
</script>
