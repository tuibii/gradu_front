<template>
  <div style="margin-top: 110px;width: 400px;min-height: 550px;" class="wrapper">
    <h3 style="margin-bottom: 20px;font-weight: normal;font-size: 20px;color:#676666;text-align: center;">用户登录</h3>
    <el-form :model="pojo" label-width="80px" :rules="dataRule" ref="pojo">
      <el-form-item prop="mobile" label="手机号">
        <el-input v-model="pojo.mobile" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="pojo.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    import '~/assets/css/page-sj-person-loginsign.css'
    import userApi from '@/api/user'
    import {setUser} from '@/utils/auth'
    export default {
        data(){
            return{
                pojo:{},
                dataRule: {
                    password: [
                        {required: true, message: "请输入密码", trigger: 'blur'},
                        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
                    ],
                    mobile:[{
                        required: true,
                        message: '请输入手机号码',
                        trigger: 'blur'
                    },
                        {validator:function(rule,value,callback){
                                if(/^1[34578]\d{9}$/.test(value) == false){
                                    callback(new Error("请输入正确的手机号"));
                                }else{
                                    callback();
                                }
                            }, trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
            login(){
                this.$refs['pojo'].validate((valid) => {
                    if (!valid) {
                        return false
                    }
                    userApi.login(this.pojo.mobile,this.pojo.password ).then( res=> {
                        if(res.data.flag){
                            //保存用户信息
                            setUser(res.data.data.token, res.data.data.nickname, res.data.data.avatar)
                            location.href='/' //用户中心

                        }else{
                            this.$message({
                                message: res.data.message,
                                type: "error",
                                offset: 100
                            })
                            this.pojo.mobile=''
                            this.pojo.password=''
                        }
                    })
                })
            }
        }
    }
</script>
