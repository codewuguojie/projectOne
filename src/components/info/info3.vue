<template>


<div class="myinfo">

    <v-header :isLogin="islogin"></v-header>

    <div class="title">
        <h3>-&nbsp;基本信息&nbsp;-</h3>
    </div>
    <div class="main">
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info0.svg">手机号码</div>
            <div class="text">{{phone}}</div>
        </div>
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info2.svg">公司名称</div>
            <div class="text">{{infos.enterpriseName}}</div>
        </div>
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info3.svg">公司代码</div>
            <div class="text">{{infos.enterpriseCode}}</div>
        </div>
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info4.svg">企业联系人</div>
            <div class="text">{{infos.contactName}}</div>
        </div>
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info1.svg">公司电话</div>
            <div class="text">{{infos.telephone}}</div>
        </div>
        <div class="input-line clearfix">
            <div class="title-text"><img src="./img/info7.svg">企业邮箱</div>
            <div class="text">{{infos.email}}</div>
        </div>
    </div>
    <v-footer></v-footer>

</div>



</template>

<script>

import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import { hostUrl,getResult } from "api/common"; //导入api
export default {
    components: {
        "v-header": header,
        "v-footer":footer
    },
    data() {
        return {
            phoneNum: "",
            islogin:true,
            phone:'',
            infos:{
                contactName:'',
                enterpriseCode:'',
                email:'',
                enterpriseName:'',
                status:"",
                telephone:'',
            }
        }
    },
    methods: {


    },
    mounted() {
        getResult('get','/enterprise/v1/basic').then(res=>{
            if(res.result == 0){
                this.infos = res.data;
            }
        })
        getResult('get','/user/v1/curruser').then(res=>{
            if(res.result == 0){
                this.phone = res.data.username;

            }
        })
    }
};
</script>

<style scoped type="text/css" lang="less">
    .myinfo{
        width: 100%;
        background: #fbfdff;
        .title{
            text-align: center;
            padding: 30px 0;
        }
        .main{
            margin:0 auto;
            width: 1050px;
            height: 700px;
            background: #ffffff;
            padding:40px 30px;
            box-shadow: 0 0 20px #d4e6f5;
            .input-line {
                width: 100%;
                border-bottom:1px solid #dddddd;
                font-size: 14px;
                line-height: 60px;
                margin-top: -38px;
                .title-text{
                    float: left;
                    width: 210px;
                    img{
                        width: 20px;
                        vertical-align: middle;
                        margin-right: 20px;
                    }
                }
                .text{
                    float: left;
                }
            }
        }
    }


</style>
