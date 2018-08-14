<template>


<div class="supply">
    <v-header></v-header>
    <div class="main">
        <div class="container">


                <div class="top">
                    <ul class="clearfix">
                        <li class="img"><p><img src="./img/login10.png"></p><p class="p2 unactive">账号信息</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img src="./img/login02.png"></p><p class="p2 unactive">企业信息</p></li>
                        <li class="img"><p class="p1"><img src="./img/login07.png"></p></li>
                        <li class="img"><p><img src="./img/login05.png"></p><p class="p2 active">注册成功</p></li>
                    </ul>
                </div>
                <form class="form-edit form-last">
                    <div class="phone">
                        <div class="success"><img src="./img/login09.png"></div>
                        <p class="p1"><b id="second">{{seconds}}</b>秒后跳转到首页</p>
                        <p class="p2">恭喜您注册成功</p>
                    </div>

                    <div class="phone">
                        <div class="submit-last" @click="goHome()">申请授信</div>
                    </div>
                </form>


        </div>
    </div>
</div>



</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";

import { hostUrl, getResult } from "api/common"; //导入api

import axios from "axios";

export default {
  components: {
    "v-header": header
  },
  data() {
    return {
      phoneNum: "",
      seconds: 20,
      timer:''
    };
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        this.seconds--;
        //console.log(this.seconds);
        if (this.seconds == 0) {
          this.$router.push({name: "myHome" });
          window.clearInterval(this.timer);
        }
      }, 1000);
    },
    goHome(){
        window.clearInterval(this.timer);
        this.$router.push({path:'/home/data'})
    }
  },
  mounted() {
      this.countDown();
  }
};
</script>

<style scoped type="text/css" lang="less">
.top .active {
  color: #54b4fe;
}
.submit a {
  width: 100%;
  height: 100%;
  display: block;
}
#second{
    font-size: 16px;
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
  .form-last{
    margin-right: 204px;
  }
  .submit-last{
    height: 44px;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    background: #54b4fe;
    cursor: pointer;
    width: 300px;
    margin-top: 110px;
  }
}
</style>
