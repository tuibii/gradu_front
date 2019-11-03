<srript src="../assets/js/jquery.js"></srript>
<srript src="../assets/js/main.js"></srript>
<template>
  <div>
      <header class="trasparent_nav">
          <div class="wrapper">
            <div class="logo">
              <a href="/"><img src="../assets/img/博砚.png" style="width: 180px;height: 68px;"/></a>
            </div>
            <nav>
              <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/treehole">树洞广场</a></li>
                <li><a href="#">文章</a></li>
                <li><a href="#">问答</a></li>
                <li><a href="#">社团</a></li>
                <li><a href="/gathering">活动</a></li>
              </ul>
            </nav>
          </div>
      </header>
      <header class="fixed_nav" v-if="!isTop">
        <div class="wrapper">
          <div class="logo">
            <a href="/"><img src="../assets/img/博砚.png" style="width: 180px;height: 68px;"/></a>
          </div>
          <nav>
            <ul>
              <li><a href="/">首页</a></li>
              <li><a href="/treehole">树洞广场</a></li>
              <li><a href="#">文章</a></li>
              <li><a href="#">问答</a></li>
              <li><a href="#">社团</a></li>
              <li><a href="/gathering">活动</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <nuxt />
      <footer>
        <div class="wrapper">
          <section class="cta cta_footer" >
            <p>有更好的建议?  欢迎联系我们!</p>
            <a href="https://github.com/tuibii/gradu/issues">联系我们！</a>
          </section>

          <div class="footer_widget">

          </div>

          <p class="rights">© 2019 Gradu 博砚  -  All Rights Reserved  - https://github.com/tuibii </p>

        </div>
      </footer>
  </div>
</template>
<script>
    import '~/assets/plugins/normalize-css/normalize.css'
    import '~/assets/plugins/yui/cssgrids-min.css'
    import '~/assets/plugins/sui/sui.min.css'
    import '~/assets/plugins/sui/sui-append.min.css'
    import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
    import '~/assets/css/widget-base.css'
    import '~/assets/css/widget-head-foot.css'
    import '~/assets/css/reset.css';
    import '~/assets/css/main.css';
export default {
    data(){
      return{
          isTop:true
      }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 105){
                this.isTop = false;
            }else {
                this.isTop = true;
            }
        }
    }

}
</script>
