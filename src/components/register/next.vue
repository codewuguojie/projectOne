<template>


<div class="supply">
    <v-header></v-header>
    <div class="main">
        <div class="container">
           
            
                <div class="top">
                    <ul class="clearfix">
                        <li class="img"><p><img src="./img/login10.png"></p><p class="p2 unactive">账号信息</p></li>
                        <li class="img"><p class="p1"><img src="./img/login07.png"></p></li>
                        <li class="img"><p><img src="./img/login04.png"></p><p class="p2 active">企业信息</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img src="./img/login03.png"></p><p class="p2 unactive">注册成功</p></li>
                    </ul>
                </div>
                <form class="form-edit">
                    <div class="phone">
                        <div class="input-box">
                            <span><b>*</b>公司名称</span>
                            <input type="text" v-model="nextObj.enterpriseName" placeholder="发票抬头／营业执照名称（必填项）">
                        </div>
                      
                    </div>
                    <div class="phone">
                        <div class="input-box">
                            <span><b>&nbsp;</b>企业联系人</span>
                            <input type="text" v-model="nextObj.contactName" placeholder="请输入企业联系人">
                        </div>
                   
                    </div>
                    <div class="phone">
                        <div class="input-box">
                            <span><b>&nbsp;</b>公司电话</span>
                            <input type="text" v-model="nextObj.telephone" placeholder="请输入区号-号码">
                        </div>
                        
                    </div>
                    <div class="phone">
                        <div class="input-box">
                            <span><b>&nbsp;</b>公司代码</span>
                            <input type="text" v-model="nextObj.enterpriseCode" placeholder="统一社会信用代码／工商注册号／组织机构代码">
                        </div>
                        
                    </div>
                    <div class="phone">
                        <div class="input-box">
                            <span><b>&nbsp;</b>企业邮箱</span>
                            <input type="text" v-model="nextObj.email" placeholder="请输入企业邮箱">
                        </div>
                        <div class="error" v-if="errorMessage">
                            <div ><img src="./img/login08.png" >&nbsp;&nbsp;{{errorMessage}} </div>
                        </div>
                    </div>
                    <div class="phone">
                        <div class="submit" @click="submitNext()">下一步</div>
                    </div>
                </form>


        </div>
    </div>

</div>



</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import { hostUrl,getResult } from "api/common";
import "swiper/dist/css/swiper.css";
import axios from "axios";

export default {
    components: {
        "v-header": header
    },
    data() {
        return {
            errorMessage:'',
            nextObj:{
                contactName:'',
                email:'',
                enterpriseCode:'',
                enterpriseName:"",
                telephone:""
            }
        }
    },
    methods: {
        checkEmail(){
            let emailExg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if(this.nextObj.email && !emailExg.test(this.nextObj.email)){
                this.errorMessage = '邮箱格式不对';
                return false;
            }
            return true;
        },
        submitNext(){
            if(!this.nextObj.enterpriseName){
                this.errorMessage = '公司名称不能为空';
                return;
            }
            if(!this.checkEmail()) return;
            getResult('post','/enterprise/v1/add_enter',this.nextObj)
            .then((res)=>{
                if(res.result == 0){
                    this.$router.push({name:'last'})
                }else{
                    this.errorMessage = res.msg;
                }
            })
        }
    },
    mounted() {
        (function() {

        })();
    }
};
</script>

<style scoped type="text/css" lang="less">
    .top .active{
        color:#54b4fe;
        }
    .supply .main .container {
    height: 850px;
    background-image: url("./img/login0.jpg");
        .title{
            margin: 243px 0 60px 490px;
            text-align: center;
            font-size: 22px;
            color: #54b4fe;
        }
        .form-edit{
            float: right;
            margin-right: 60px;
        }
    }
</style>
