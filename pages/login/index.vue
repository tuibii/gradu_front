<template>
  <div class="wrapper loginsign" style="margin-top: 110px;">
    <div class="item signup">
      <div class="form">
        <h3 class="loginsign-title">注册新账号</h3>
        <form class="sui-form">
          <div class="control-group">
            <label for="inputname" class="control-label">名字</label>
            <div class="controls">
              <input type="text" id="inputname" placeholder="真实姓名或常用昵称" class="input-xlarge" />
            </div>
          </div>
          <div class="different">
            <div class="radio-content">
              <div id="a1" class="phone">
                <div class="control-group number">
                  <input type="text" placeholder="仅支持大陆手机号" class="input-xlarge" />
                </div>
                <div class="control-group code">
                  <div class="input-append">
                    <input id="appendedInputButton" type="text" placeholder="短信验证" class="span2 input-large msg-input" />
                    <button type="button" class="sui-btn msg-btn">获取验证码</button>
                  </div>
                </div>
                <div class="control-group">
                  <label for="inputpassword" class="control-label">密码</label>
                  <div class="controls">
                    <input type="text" id="inputpassword" placeholder="请输入6-16位密码" class="input-xlarge" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group btn-signup">
            <label class="control-label"></label>
            <div class="controls">
              <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label>
              <button type="button" class="sui-btn btn-danger btn-yes">注 册</button>
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
              <input type="text" id="inputname" placeholder="11位手机号" class="input-xlarge" data-rules="required" />
            </div>
          </div>
          <div class="control-group">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls">
              <input type="text" id="inputpassword" placeholder="输入登录密码" class="input-xlarge" />
            </div>
          </div>
          <div class="controls">
            <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label>
            <button type="button" class="sui-btn btn-danger btn-yes">登 录</button>
          </div>
          <div class="other-methods">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-person-loginsign.css'
    export default {

    }
</script>
