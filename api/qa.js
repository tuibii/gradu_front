import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'
export default {
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
  }
}
