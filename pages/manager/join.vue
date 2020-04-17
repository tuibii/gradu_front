<template>
    <el-dialog :visible.sync="visible" title="发布活动" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-table>

        </el-table>
    </el-dialog>
</template>
<script>
    export default {
        data () {
            return {
                visible: false,
                gatheringId: ''
            }
        },
        methods: {
            init () {
                this.visible = true
            }
        }
    }
</script>
