<template>
    <div class="supply">

        <v-header></v-header>

        <div class="main">
            <div class="container">


                <div class="top">
                    <ul class="clearfix">
                        <li class="img"><p><img src="./img/login10.png"></p><p class="p2 unactive">验证手机号</p></li>
                        <li class="img"><p class="p1"><img src="./img/login07.png"></p></li>
                        <li class="img"><p><img src="./img/login04.png"></p><p class="p2 active">设置新密码</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img  src="./img/login03.png"></p><p class="p2 unactive">修改成功</p></li>
                    </ul>
                </div>



                <form class="form-edit">
                    <div class="phone">
                        <div class="input-box">
                            <span>输入新密码</span>
                            <input :type="this.type" placeholder="密码为8-16个字符，由字母、数字或符号组成" v-model="password" minlength="8" maxlength="16">
                            <img :src="this.imgSrc" @click="toggle($event)" style="display: inline-block; width: 24px; height: 17px; position: absolute; top: 14px; right: 60px;"/>
                        </div>
                        <div class="error" v-if="isPassword">
                            <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                        </div>
                    </div>

                    <div class="phone">
                        <div class="input-box">
                            <span>确认新密码</span>
                            <input type="password" placeholder="密码上下请保持一致" v-model="newPassword" minlength="8" maxlength="16">
                        </div>
                        <div class="error" v-if="isCode">
                            <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                        </div>
                    </div>




                    <div class="phone">
                        <div class="error" v-if="result">
                            <div  ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                        </div>
                    </div>
                    <div class="phone">
                        <div class="submit" @click="submitReset()">下一步</div>
                    </div>
                </form>

            </div>
        </div>

        <v-footer></v-footer>

    </div>
</template>

<script>

    import Vue from "vue";
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";

    import { hostUrl, getResult } from "api/common";
    export default {
        components:{
            "v-header":header,
            "v-footer":footer
        },
        data(){
            return{
                islogin:false,
                password: "",
                oldPassword:"",
                newPassword: "",
                isPassword: false,
                isCode: false,
                errorMessage: "",
                result: false,
                type:"password",
                imgSrc:require("./img/hidden.svg")
            }
        },
        methods:{
            toggle(e){
                //console.log(111)
                if(this.type === "password"){
                    this.type = "text"
                    this.imgSrc = require("./img/show.svg")
                }else {
                    this.type = "password"
                    this.imgSrc = require("./img/hidden.svg")
                }
            },
            keyup(event){
                this.phone=this.phone.replace(/[^\d]/g,'')
            },

            checkPassword() {
                let reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![!@#$%^&*]+$)/;
                if (!this.password) {
                    this.isPassword = true;
                    this.errorMessage = "请输入密码";
                    return false;
                }
                if (this.password.length < 8) {
                    this.isPassword = true;
                    this.errorMessage = "密码长度小于8位";
                    return false;
                }
                if (!reg_password.test(this.password)) {
                    this.isPassword = true;
                    this.errorMessage = "密码格式不对请重新输入";
                    return false;
                }
                this.isPassword = false;
                return true;
            },

            checkCode(){
                if(!this.newPassword){
                    this.isCode = true;
                    this.errorMessage = "请再次输入新密码"
                    return false;
                }
                if(this.password !== this.newPassword){
                    this.isCode = true;
                    this.errorMessage = "两次输入的密码不一致";
                    return false;
                }
                this.isCode = false;
                return true;
            },

            initError(){
                this.isPassword = false;
                this.isCode = false;
                this.result = false;
            },

            submitReset() {
                // this.$router.push({name:'next',params:{参数名:参数值,参数名:参数值}})
                //console.log(typeof this.password)
                //console.log(typeof this.newPassword)
                //console.log(`这个是${this.password}`)
                //console.log(`这个是${this.newPassword}`)
                this.initError();
                if (!this.checkPassword()) return;
                if (!this.checkCode()) return;
                getResult("put", "/user/v1/open/reset_password", {
                    newPassword: this.newPassword,
                }).then(res => {
                    if (res.result === 0) {
                        //console.log(res.msg)
                        this.$router.push({ name: "reset3" });
                    } else {
                        this.result = true;
                        this.errorMessage = res.msg;
                    }
                });
            }
        }
    }
</script>

<style scoped type="text/css" lang="less">
    .phone input.agree {
        margin-left: 4px;
    }
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
