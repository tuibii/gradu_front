import request from '@/utils/request'
const group_name = 'treehole'
const api_name = 'treehole'
export default {
    search() {
        return request({
          url: `/${group_name}/${api_name}`,
          method: 'get'
        })
    },
    findById(id) {
        return request({
          url: `/${group_name}/${api_name}/${id}`,
          method: 'get'
        })
    },
    commentlist(id) {
        return request({
          url: `/${group_name}/${api_name}/commentlist/${id}`,
          method: 'get'
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
