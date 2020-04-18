<template>
    <el-card class="box-card" style="width: 100%;">
        <div slot="header" class="clearfix">
            <span>我的活动</span>
        </div>
        <div v-for="(data, index) in dataList" :key="index" class="text item">
            <nuxt-link :to='/gathering/+data.id'><el-button type="text" class="data-name">{{data.name}}</el-button></nuxt-link>
            <div class="data-summary">{{data.summary}}</div>
            <el-divider></el-divider>
        </div>
    </el-card>
</template>
<script>
    import gatheringApi from '@/api/gathering'
    export default {
        asyncData(){
            return gatheringApi.myjoin().then( res=> {
                return {dataList:res.data.data}
            })
        },
        data () {
            return {

            }
        },
        methods: {

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
