import request from '@/utils/request'
const group_name = 'user'
const api_name = 'user'
export default {
    sendSms(mobile){
        return request({
            url:`/${group_name}/${api_name}/send/${mobile}`,
            method: 'post'
        })
    },
    register(user,code){
        return request({
            url:`/${group_name}/${api_name}/regist/${code}`,
            method: 'post',
            data: user
        })
    },
    login(mobile,password){
        return request({
            url:`/${group_name}/${api_name}/login`,
            method: 'post',
            data: {
                mobile,
                password
            }
        })
    },
    info(){
       return request({
           url: `/${group_name}/${api_name}/info`,
           method: 'get'
       })
    },
  dynamic() {
    return request({
      url: `/${group_name}/dynamic/list`,
      method: 'get'
    })
  }
  ,
    saveInfo(user){
        return request({
            url: `/${group_name}/${api_name}/saveinfo`,
            method: 'put',
            data: user
        })
    }
}
