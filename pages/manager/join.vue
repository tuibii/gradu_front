<template>
    <el-dialog :visible.sync="visible" title="参与者" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-button @click="exportTable">导出</el-button>
        <el-table  :data="dataList" style="width: 100%">
            <el-table-column prop="mobile" label="手机号"></el-table-column>
            <el-table-column prop="nickname" label="用户"></el-table-column>
        </el-table>
    </el-dialog>
</template>
<script>
    import gatheringApi from '@/api/gathering'
    export default {
        data () {
            return {
                visible: false,
                gatheringId: '',
                dataList: []
            }
        },
        methods: {
            init () {
                this.visible = true
                gatheringApi.joinList(this.gatheringId).then(res => {
                    this.dataList = res.data.data
                })
            },
            exportTable() {
                window.location.href = 'http://127.0.0.1:9011/gathering/gathering/export/' + this.gatheringId
            }
        }
    }
</script>
