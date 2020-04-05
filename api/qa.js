import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'
export default {
  list () {
    return request({
      url: `/${group_name}/${api_name}/list`,
      method: 'get'
    })
  },
  page(page,limit) {
    return request({
      url: `/${group_name}/${api_name}/page?page=`+page+'&limit='+limit,
      method: 'get'
    })
  },
  thumbup(id){
    return request({
      url: `/${group_name}/${api_name}/thumbup/${id}`,
      method: 'get'
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  replylist(id) {
    return request({
      url: `/${group_name}/reply/problem/${id}`,
      method: 'get'
    })
  },
  reply(data){
    return request({
      url: `/${group_name}/reply`,
      method: 'post',
      data: data
    })
  },
  focusProblem(id){
    return request({
      url: `/${group_name}/${api_name}/focus/${id}`,
      method: 'get'
    })
  },
  rateReply(id,rateValue){
    return request({
      url: `/${group_name}/reply/rate/${id}`,
      method: 'put',
      data:{
        rate: rateValue
      }
    })
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  }
}
