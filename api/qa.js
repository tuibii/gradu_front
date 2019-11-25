import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'
export default {
  page(page,limit) {
    return request({
      url: `/${group_name}/${api_name}/page?page=`+page+'&limit='+limit,
      method: 'get'
    })
  }
}
