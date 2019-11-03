<template>
  <div class="wrapper loginsign" style="margin-top: 110px;">
    <div class="item signup">
      <div class="form">
        <h3 class="loginsign-title">注册新账号</h3>
        <form class="sui-form">
          <div class="control-group">
            <label for="inputname" class="control-label">昵称</label>
            <div class="controls">
              <input type="text" id="inputname" v-model="pojo.nickname" placeholder="昵称" class="input-xlarge" />
            </div>
          </div>
          <div class="different">
            <div class="radio-content">
              <div id="a1" class="phone">
                <label class="control-label">手机号</label>
                <div class="control-group number">
                  <input type="text" v-model="pojo.mobile" placeholder="手机号" class="input-xlarge" />
                </div>
                <div class="control-group code">
                  <label class="control-label">验证码</label>
                  <div class="input-append">
                    <input id="appendedInputButton" v-model="code" type="text" placeholder="短信验证" class="span2 input-large msg-input" />
                    <button type="button" @click="sendSms" class="sui-btn msg-btn">获取验证码</button>
                  </div>
                </div>
                <div class="control-group">
                  <label for="inputpassword" class="control-label">密码</label>
                  <div class="controls">
                    <input type="text" id="inputpassword"  v-model="pojo.password" placeholder="请输入6-16位密码" class="input-xlarge" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group btn-signup">
            <label class="control-label"></label>
            <div class="controls">
              <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label>
              <button type="button" class="sui-btn btn-danger btn-yes" @click="register">注 册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="item">
      <div class="form">
        <h3 class="loginsign-title">用户登录</h3>
        <form class="sui-form login-form">
          <div class="control-group">
            <label for="inputname" class="control-label">手机号：</label>
            <div class="controls">
              <input type="text" id="inputname" v-model="mobile" placeholder="11位手机号" class="input-xlarge" data-rules="required" />
            </div>
          </div>
          <div class="control-group">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls">
              <input type="text" id="inputpassword" v-model="password" placeholder="输入登录密码" class="input-xlarge" />
            </div>
          </div>
          <div class="controls">
            <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label>
            <button type="button" class="sui-btn btn-danger btn-yes"  >登 录</button>
          </div>
          <div id="weixin"></div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-person-loginsign.css'
    import userApi from '@/api/user'
    export default {
        data(){
            return{
                pojo:{},
                code: '',
                mobile: '',
                password: ''
            }
        },
        methods:{
            sendSms(){
                userApi.sendSms(this.pojo.mobile).then(res => {
                    this.$message({
                        message: res.data.message,
                        type: (res.data.flag?'success':'error'),
                        offset: 100
                    })
                })
            },
            register(){
                userApi.register( this.pojo, this.code ).then( res=> {
                    this.$message({
                        message: res.data.message,
                        type: (res.data.flag?'success':'error'),
                        offset: 100
                    })
                })
            },
            login(){
                userApi.login(this.mobile,this.password ).then( res=> {
                    if(res.data.flag){
                        //保存用户信息
                        setUser(res.data.data)

                        location.href='/manager' //用户中心

                    }else{
                        this.$message( {
                            message: res.data.message,
                            type: "error",
                            offset: 100
                        })
                        this.mobile=''
                        this.password=''
                    }
                })
            }
        }
    }
</script>
