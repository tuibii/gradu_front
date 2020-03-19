<template>
  <div>
      <header class="trasparent_nav" style="margin: 0px;">
          <div class="wrapper">
            <div class="logo">
              <nuxt-link to="/"><img src="../assets/img/博砚.png" style="width: 180px;height: 68px;"/></nuxt-link>
            </div>
            <nav>
              <ul >
                <li><nuxt-link to="/">首页</nuxt-link></li>
                <li><nuxt-link to="/treehole">树洞广场</nuxt-link></li>
                <li><nuxt-link to="/qa">问答</nuxt-link></li>
                <li><nuxt-link to="/club">社团</nuxt-link></li>
                <li><nuxt-link to="/gathering">活动</nuxt-link></li>
                <li v-if="user.name !== undefined"><nuxt-link to="/manager"> <el-avatar >{{user.name}}</el-avatar></nuxt-link></li>
                <li v-if="user.name===undefined"><nuxt-link to="/login">登录</nuxt-link>/<nuxt-link to="/regist">注册</nuxt-link></li>
              </ul>
            </nav>
          </div>
      </header>
      <header class="fixed_nav" v-if="!isTop" style="margin: 0px">
        <div class="wrapper">
          <div class="logo">
            <a href="/"><img src="../assets/img/博砚.png" style="width: 180px;height: 68px;"/></a>
          </div>
          <nav>
            <ul>
              <li><nuxt-link to="/">首页</nuxt-link></li>
              <li><nuxt-link to="/treehole">树洞广场</nuxt-link></li>
              <li><nuxt-link to="/qa">问答</nuxt-link></li>
              <li><nuxt-link to="/club">社团</nuxt-link></li>
              <li><nuxt-link to="/gathering">活动</nuxt-link></li>
              <li v-if="user.name !== undefined"><nuxt-link to="/manager"> <el-avatar >{{user.name}}</el-avatar></nuxt-link></li>
              <li v-if="user.name===undefined"><nuxt-link to="/login">登录</nuxt-link>/<nuxt-link to="/regist">注册</nuxt-link></li>
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
    import {getUser} from "../utils/auth";

    export default {
    data(){
      return{
          isTop: true,
          user: {}
      }
    },
    created(){
        this.user = getUser()
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
