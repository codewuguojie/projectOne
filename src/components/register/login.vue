<template>


<div class="supply">
    <v-header :title="titleName" :showRegister="true" :showLog="false"></v-header>
    <div class="main">
        <div class="container">
          <p class="title">企业登录</p>
          <form class="form-edit">
          		<!--手机号输入-->
              <div class="phone">
                  <div class="input-box">
                      <span>手机号码</span>
                      <input type="text" placeholder="请输入已验证手机号" v-model="phone">
                  </div>
                  <div class="error" v-if="isPhone">
                      <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                  </div>
              </div>
              <!--密码输入-->
              <div class="phone">
                  <div class="input-box">
                      <span>密码</span>
                      <input type="password" placeholder="请输入密码" v-model="password" @keyup.13="submitLogin($event)">
                  </div>
                  <div class="error" v-if="result">
                      <div ><img src="./img/login08.png">&nbsp;&nbsp;{{errorMessage}}</div>
                  </div>
              </div>

              <div class=" goreset">
                  <router-link :to="{name:'reset'}">忘记密码</router-link>
              </div>

              <div class="phone">
                  <div class="submit" @click="submitLogin()">登录</div>
              </div>
              <!-- <div class="phone info">
                  <div class="register">忘记密码</div>
              </div> -->
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
      titleName: "企业用户登录",
      phone: "",
      password: "",
      isPhone: false,
      isPassword: false,
      result: false
    };
  },
  methods: {

  	/*检验手机号码 不能为空以及格式正确*/

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

    /*检验密码   密码不能为空以及密码格式、长度正确*/

    checkPassword() {
      let reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![!@#$%^&*]+$)/;
      if (!this.password) {
        this.result = true;
        this.errorMessage = "请输入密码";
        return false;
      }
      if (this.password.length < 6) {
        this.result = true;
        this.errorMessage = "密码不对，请重新输入";
        return false;
      }
      if (!reg_password.test(this.password)) {
        this.result = true;
        this.errorMessage = "密码不对，请重新输入";
        return false;
      }
      this.result = false;
      return true;
    },

    submitLogin() {
      this.isPhone = false;
      this.result = false;
      if (!this.checkPhone()) return;
      if (!this.checkPassword()) return;
      getResult("post", "/user/v1/open/login", {
        password: this.password,
        username: this.phone
      }).then(res => {
        if (res.result === 0) {
          this.$router.push({ name: "myHome" });
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
.supply .main .container {
  height: 850px;
  background-image: url("./img/register0.jpg");
  .title{
    margin: 243px 0 60px 490px;
    text-align: center;
    font-size: 22px;
    color: #54b4fe;
  }
  .form-edit{
    float: right;
    margin-right: 60px;
    .goreset{
        margin-left: 440px;
        a{
            color: #54b4fe;
            font-size: 14px;
        }
    }
  }
}

</style>
