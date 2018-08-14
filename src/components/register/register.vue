
<template>
    <div class="supply">
        <v-header :title="titleName" :isLogin="islogin"></v-header>
        <div class="main">
            <div class="container">


                      <div class="top">
                        <ul class="clearfix">
                          <li class="img"><p><img src="./img/login01.png"></p><p class="p2 active">账号信息</p></li>
                          <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                          <li class="img"><p><img src="./img/login02.png"></p><p class="p2 unactive">企业信息</p></li>
                          <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                          <li class="img"><p><img src="./img/login03.png"></p><p class="p2 unactive">注册成功</p></li>
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
                        <div class="phone">
                            <div class="input-box">
                                <span>设置密码</span>
                                <input type="password" placeholder="密码为8-16个字符，由字母、数字或符号组成" v-model="password" minlength="8" maxlength="16">
                            </div>
                            <div class="error" v-if="isPassword">
                                <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
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
                            <!-- <input type="checkbox" name="typebox" class="agree" v-model="isAgree" @click="isAgreeBtn(isAgree)"> -->
                            <b :class="{'check icon-new4':isAgree,'check':!isAgree}" @click="isAgreeBtn(isAgree)"></b>
                            <b>我已阅读并同意</b>
                            <b class="rules"> <a href="#/agreement" target="view_blank">《米筹用户注册协议》</a> </b>
                        </div>
                        <div class="phone">
                            <div class="error" v-if="result">
                                <div  ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                            </div>
                        </div>
                        <div class="phone">
                            <div class="submit" @click="submitRegister()">下一步</div>
                        </div>
                    </form>

            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";

import { hostUrl, getResult } from "api/common";

export default {
  components: {
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      titleName: "企业用户注册",
      islogin: false,
      phone: "",
      password: "",
      imgCode: "",
      verifyCode: "",
      isPhone: false,
      isPassword: false,
      isVerify: false,
      isImgCode: false,
      isVerClick: false,
      errorMessage: "",
      result: false,
      btnText: "获取验证码",
      isLogin: true,
      isAgree:false,
      imgUrl: `${hostUrl}/basics/v1/open/imgcode?${new Date()}`
    };
  },
  methods: {

    getImgCode() {
      this.imgUrl = `${hostUrl}/basics/v1/open/imgcode?${new Date()}`;
    },
    keyup(event){
      this.phone=this.phone.replace(/[^\d]/g,'')
    },
    settime() {
      this.isVerClick = true;
      let times = 60;
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
        this.errorMessage = "手机号格式不对，请重新输入";
        return false;
      }
      this.isPhone = false;
      return true;
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
      this.isPassword = false;
      this.isImgCode = false;
      this.isVerify = false;
      this.result = false;
    },
    isAgreeBtn(isAgree){
      this.isAgree = !isAgree;
      //console.log(this.isAgree);
    },
    //获取验证码
    getVerifyCode() {
      this.initError();
      if (!this.checkPhone()) return;
      if (!this.checkImgcode()) return;

      getResult("post", "/user/v1/open/reg/sendcode", {
        imgCode: this.imgCode,
        mobile: this.phone
      }).then(result => {
        if (result.result != 0) {
          this.getImgCode();
          this.result = true;
          this.errorMessage = result.msg;
        }else{
          this.settime();
        }
      });

    },
    submitRegister() {
      // this.$router.push({name:'next',params:{参数名:参数值,参数名:参数值}})
      this.initError();
      if (!this.checkPhone()) return;
      if (!this.checkPassword()) return;
      if (!this.checkImgcode()) return;
      if (!this.checkPhonecode()) return;
      if (!this.isAgree) {
        this.result = true;
        this.errorMessage = '请先同意米筹用户注册协议';
        return;
      }
      getResult("post", "/user/v1/open/reg", {
        password: this.password,
        regType: 0,
        smsCode: this.verifyCode,
        source: "pc",
        username: this.phone
      }).then(res => {
        if (res.result === 0) {
          this.$router.push({ name: "next" });
        } else {
          this.result = true;
          this.errorMessage = res.msg;
        }
      });
    }
  },
  mounted() {
    (function() {})();
  }
};
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
    
    .phone b.check{
        vertical-align: middle;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #ffffff;
        border: 1px solid #eeeeee;
    }
    .icon-new4:before{
        font-size: 12px;
    }
  }
}
</style>
