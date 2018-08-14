<template>


<div class="my-box">

    <v-header :isLogin="islogin"></v-header>

    <div class="my">
        <div class="top">
            <h4> <img src="./img/company.svg">企业授信资料</h4>
            <p class="img"><img src="./img/messagebg.png"></p>
            <p class="text"> 暂无上传企业资料</p>
            <button ui-sref="myonline" @click="goRuzhu">上传资料</button>
        </div>

        <div class="bottom">
            <h4><img src="./img/financeinfo.svg">融资资料</h4>
            <p class="img"><img src="./img/financebg.png"></p>
            <p class="text"> 暂未有融资资料</p>
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
        }
    },
    methods: {

        goRuzhu(){
            this.$router.push({path:'/home/data'})
        }
    },
    mounted() {

    }
};
</script>

<style scoped type="text/css" lang="less">
    .top{
        p.img{
            text-align: center;
            padding: 100px 0 30px 0;
        }
        p.text{
            text-align: center;
            font-size: 14px;
            color:#bbbbbb;
        }
    }
    .bottom{
        p.img{
            text-align: center;
            padding-top: 100px;
        }
        p.text{
            text-align: center;
            padding: 30px 0 100px 0;
            font-size: 14px;
            color:#bbbbbb;
        }
    }
</style>
