<template>
    <div class="supply">

        <v-header></v-header>

        <div class="main">
            <div class="container">


                <div class="top">
                    <ul class="clearfix">
                        <li class="img"><p><img src="./img/login01.png"></p><p class="p2 active">验证手机号</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img src="./img/login02.png"></p><p class="p2 unactive">设置新密码</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img src="./img/login03.png"></p><p class="p2 unactive">修改成功</p></li>
                    </ul>
                </div>



                <form class="form-edit">
                    <div class="phone">
                        <div class="input-box">
                            <span>手机号码</span>
                            <input type="tel"  maxlength="11" v-model="phone" placeholder="请输入手机号" @keyup="keyup($event)">
                        </div>
                        <div class="error" v-if="isPhone">
                            <div ><img src="./img/login08.png" >&nbsp;&nbsp;{{errorMessage}} </div>
                        </div>
                    </div>

                    <div class="phone verify-code">
                        <div class="input-box">
                            <span class="code">图形验证码</span>
                            <input type="text" placeholder="请输入验证码" v-model="imgCode" maxlength="4">
                            <img :src="imgUrl" class="code">
                            <b class="change" @click="getImgCode()">换一张</b>
                        </div>
                        <div class="error" v-if="isImgCode">
                            <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                        </div>
                    </div>
                    <div class="phone last">
                        <div class="input-box">
                            <span>手机验证码</span>
                            <input type="text" placeholder="请输入验证码" v-model="verifyCode" maxlength="6">
                            <button class="get" @click="getVerifyCode()" :disabled="isVerClick" type="button" >{{btnText}}</button>
                        </div>
                        <div class="error" v-if="isVerify">
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
                phone: "",
                imgCode: "",
                verifyCode: "",
                isPhone: false,
                isVerify: false,
                isImgCode: false,
                isVerClick: false,
                errorMessage: "",
                result: false,
                btnText: "获取验证码",
                imgUrl: `${hostUrl}/basics/v1/open/imgcode?${new Date()}`
            }
        },
        methods:{
            getImgCode() {
                this.imgUrl = `${hostUrl}/basics/v1/open/imgcode?${new Date()}`;
            },
            keyup(event){
                this.phone=this.phone.replace(/[^\d]/g,'')
            },
            settime() {
                this.isVerClick = true;
                let times = 120;
                let timer = setInterval(() => {

                    this.btnText = times + "秒";
                    times--;
                    if (times == 0) {
                        //console.log(this.btnText);
                        this.btnText = "获取验证码";
                        this.isVerClick = false;
                        window.clearInterval(timer);
                    }
                }, 1000);
            },
            checkPhone() {
                let reg_phone = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!this.phone) {
                    this.isPhone = true;
                    this.errorMessage = "请输入手机号";
                    return false;
                }
                if (!reg_phone.test(this.phone)) {
                    this.isPhone = true;
                    this.errorMessage = "请输入正确的手机号";
                    return false;
                }
                this.isPhone = false;
                return true;
            },
            checkImgcode() {
                if (!this.imgCode) {
                    this.isImgCode = true;
                    this.errorMessage = "请输入图片验证码";
                    return false;
                }
                this.isImgCode = false;
                return true;
            },
            checkPhonecode() {
                if (!this.verifyCode) {
                    this.isVerify = true;
                    this.errorMessage = "请输入手机验证码";
                    return false;
                }
                if(this.verifyCode.length<6){
                    this.isVerify = true;
                    this.errorMessage = "请输入正确的手机验证码";
                    return false;
                }
                this.isVerify = false;
                return true;
            },
            initError(){
                this.isPhone = false;
                this.isImgCode = false;
                this.isVerify = false;
                this.result = false;
            },
            //获取验证码
            getVerifyCode() {
                this.initError();
                if (!this.checkPhone()) return;
                if (!this.checkImgcode()) return;
                /*用户点击获取验证码时，先确认用户是否注册，已注册正常走程序，如未注册提示先去注册，并跳转注册*/

                getResult("post", "/user/v1/open/reset/sendcode", {
                    imgCode: this.imgCode,
                    mobile: this.phone
                }).then(result => {
                    //console.log(result.msg)
                    /*根据返回结果进行对应的操作*/
                    if (result.result != 0) {
                        this.getImgCode();
                        this.result = true;
                        this.errorMessage = result.msg;
                    }else{
                        this.settime();
                    }
                });

            },
            submitReset() {
                // this.$router.push({name:'next',params:{参数名:参数值,参数名:参数值}})
                this.initError();
                if (!this.checkPhone()) return;
                if (!this.checkImgcode()) return;
                if (!this.checkPhonecode()) return;
                getResult("post", "/user/v1/open/reset/smscodeverify", {
                    smsCode: this.verifyCode,
                    username: this.phone
                }).then(res => {
                    if (res.result === 0) {
                        this.$router.push({ name: "reset2" });
                    } else {
                        this.result = true;
                        this.errorMessage = res.msg;
                    }
                });
            }
        }
    }
</script>

<style type="text/css" lang="less">
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
