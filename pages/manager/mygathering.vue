<template>
    <el-card class="box-card" style="width: 100%;">
        <div slot="header" class="clearfix">
            <span>我的活动</span>
        </div>
        <div v-for="(data, index) in dataList" :key="index" class="text item">
            <el-button type="text" class="data-name" @click="getJoin(data.id)">{{data.name}}</el-button>
            <div class="data-summary">{{data.summary}}</div>
            <el-divider></el-divider>
        </div>
        <join v-if="joinVisible" ref="join"></join>
    </el-card>
</template>
<script>
    import Join from './join'
    import gatheringApi from '@/api/gathering'
    export default {
        asyncData(){
            return gatheringApi.mygathing().then( res=> {
                return {dataList:res.data.data}
            })
        },
        data () {
            return {
                joinVisible: false
            }
        },
        methods: {
            getJoin(id) {
                this.joinVisible = true
                this.$nextTick(() => {
                    this.$refs.join.gatheringId = id
                    this.$refs.join.init()
                })
            }
        },
        components: {
            Join
        }
    }
</script>
<style>
    .data-name{
        margin-bottom: 8px;
        font-size: 17px;
    }
    .data-summary{
        margin-top: 8px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 900px;
    }
</style>
