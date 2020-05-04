<template>
  <div style="margin-top: 110px;width: 400px;" class="wrapper">
    <h3 style="margin-bottom: 20px;font-weight: normal;font-size: 20px;color:#676666;text-align: center;">用户注册</h3>
    <el-form :model="pojo" label-width="80px" :rules="dataRule" ref="pojo">
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="pojo.nickname" placeholder="昵称" maxlength="20" show-word-limit></el-input>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号" ref="pojo.mobile">
        <el-input v-model="pojo.mobile" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <el-input v-model="pojo.code" placeholder="验证码">
          <el-button slot="append" @click="sendSms" :disabled="isDisabled" >{{sendMsg}}</el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="pojo.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox v-model="pojo.checked">阅读并接受用户协议</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-person-loginsign.css'
    import userApi from '@/api/user'
    export default {
        data(){
            let telValidator = (rule,value,callback) => {
                if(/^1[34578]\d{9}$/.test(value) === false){
                    callback(new Error("请输入正确的手机号"));
                }else{
                    callback();
                }
            };
            let checkedValidator = (rule,value,callback) => {
                if(!value){
                    callback(new Error("请勾选‘阅读并接受用户协议’"));
                }else{
                    callback();
                }
            };
            return{
                pojo:{},
                isDisabled: false,
                sendMsg: "获取验证码",
                time: 120,
                dataRule: {
                    code: [
                        {required: true, message: "请输入验证码", trigger: 'blur'}
                    ],
                    nickname: [
                        {required: true, message: "请输入昵称", trigger: 'blur'},
                        { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: 'blur'},
                        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
                    ],
                    checked: [
                        {validator:checkedValidator, trigger: 'blur'}
                    ],
                    mobile:[
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {validator:telValidator, trigger: 'blur'}
                    ],
                }
            };
        },
        methods:{
            sendSms(){
                this.$refs['pojo'].validateField('mobile',(callback) => {
                    if (callback === ''){
                        userApi.sendSms(this.pojo.mobile).then(res => {
                            let me = this
                            this.$message({
                                message: res.data.message,
                                type: (res.data.flag?'success':'error'),
                                offset: 100
                            })
                            if (res.data.flag){
                                me.isDisabled = true
                                let interval = window.setInterval(function() {
                                    me.sendMsg = me.time + 's后重新发送'
                                    --me.time
                                    if(me.time < 0) {
                                        me.sendMsg = "重新发送"
                                        me.time = 120
                                        me.isDisabled = false
                                        window.clearInterval(interval)
                                    }
                                }, 1000)
                            }
                        })
                    }
                })
            },
            register(){
                this.$refs['pojo'].validate((valid) => {
                    if (!valid) {
                        return false
                    }

                    userApi.register( this.pojo, this.pojo.code ).then( res=> {
                        this.$message({
                            message: res.data.message,
                            type: (res.data.flag?'success':'error'),
                            offset: 100,
                            onClose: function () {
                                if (res.data.flag) {
                                    location.href='/login'
                                }
                            }
                        })
                    })
                })
            }
        }
    }
</script>
