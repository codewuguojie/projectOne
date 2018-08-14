<template>
<div class="data-box">

    <v-header :isLogin="islogin"></v-header>
    <div class="data-title">
      <span class="icon-address">&nbsp;当前位置：申请授信</span>
    </div>
    <div class="infos-data">
        <div class="container">
          <div class="infos-title clearfix">
            <img src="./img/apply-finance.svg">
            <span>&nbsp;申请授信</span>
          </div>
          <div class="infos-img">
            <ul class="clearfix">
                <li class="first">
                    <p class="p1"><img src="./img/icon1.png"></p>
                    <p class="p2">意向函</p>
                </li>
                <li>
                    <p><img src="./img/line.png"></p>
                    <p ></p>
                </li>
                <li>
                    <p class="p1"><img src="./img/icon2.png"></p>
                    <p class="p2 light">提交企业资料</p>
                </li>
                <li>
                    <p><img src="./img/dotted.png"></p>
                    <p></p>
                </li>
                <li class="last">
                    <p class="p1"><img src="./img/icon3.png"></p>
                    <p class="p2 light">审核</p>
                </li>
            </ul>
          </div>
          <div class="infos-upload clearfix">
            <div class="wenzhang">
                <p>尊敬的：
                    <a>{{conpany}}</a></p><br>
                <p >为了便于米筹更好的了解贵司的需求，米筹会向贵司收集部分信息与资料，以期尽快完成对贵司的授信。授信完成后，贵司可根据自身的需求随时发起提款申请，米筹将快速响应并放款，助力贵司的生意顺利开展。</p><br>
                <p >目前米筹主要支持小米生态链企业在小米商城和米家有品平台的应收账款融资和订单融资，如贵司另有需求，可不吝与我司的专职业=务人员进行交流探讨，米筹将竭诚为贵司服务。</p><br>
                <p >本合作意向函为米筹的合作意愿，对贵司的具体授信规模将通过《授信确认函》发送给贵司。</p>
            </div>
          </div>
          <div class="info-last">
                <div><router-link to="/myHome/data2">下一步</router-link></div>
            </div>
        </div>
        
        
        


    </div>

    <v-footer></v-footer>

</div>
</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import { Swipe, SwipeItem, Toast, MessageBox } from "mint-ui"; // mint-ui的swipe
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { hostUrl, getResult } from "api/common"; //导入api
import "swiper/dist/css/swiper.css";
import { getCookie } from "assets/js/merge";
import axios from "axios";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  components: {
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      phoneNum: "",
      islogin: true,
      conpany: "",
      phone: "",

      imgUrl: `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`
    };
  },
  methods: {
    getImgCode() {
      this.imgUrl = `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`;
    },
    goData2() {
      this.$router.push({ path: "/myHome/data2" });
    }
  },
  mounted() {
    let _this = this;
    _this.conpany = "";

    getResult("get", "/enterprise/v1/basic").then(msg => {
      //console.log(1);
      //console.log(msg);
      _this.conpany = msg.data.enterpriseName;
    });
  }
};
</script>

<style scoped type="text/css" lang="scss">
.data-box {
  background: #f9f9f9;
  height: 1000px;
  .data-title {
    width: 1200px;
    margin: 0 auto;
    span {
      font-size: 12px;
      color: #bbbbbb;
      line-height: 42px;
    }
    .icon-address:before {
      line-height: 42px;
      vertical-align: middle;
    }
  }
  .infos-data {
    background: #f9f9f9;
    width: 100%;
    height: 1140px;
    .container {
      width: 1200px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding-bottom: 40px;
      .infos-title {
        width: 100%;
        border-bottom: 1px solid #eeeeee;
        img {
          margin-left: 40px;
          margin-top: 25px;
          width: 20px;
          float: left;
        }
        span {
          float: left;
          line-height: 70px;
          font-size: 20px;
        }
      }
      .infos-img {
        text-align: center;
        padding: 20px 0 10px 0;
        ul {
          display: inline-block;
          li {
            float: left;

            p.p2 {
              font-size: 14px;
              line-height: 45px;
            }
            p.light {
              color: #bbbbbb;
            }
            p.p1 {
              img {
                width: 24px;
              }
            }
          }
          li.first {
            margin-right: 20px;
            p {
              color: #54b4fe;
            }
          }
          li.last {
            margin-left: 20px;
          }
        }
      }
      .infos-upload {
        // box-shadow: 0 0 20px #d4e6f5;
        border: 1px solid #eeeeee;
        width: 1060px;
        margin-left: 40px;
        background: #fff;
        padding: 30px;

        .wenzhang p {
          font-size: 13px;
          color: #999999;
          text-indent: 40px;
          line-height: 30px;
          a {
            color: #54b4fe;
          }
        }
        
      }
      .info-last {
        text-align: center;
        padding-top: 40px;
        div {
          display: inline-block;
          width: 220px;
          height: 40px;
          text-align: center;
          background: #54b4fe;
          line-height: 40px;
          color: #fff;
        }
        a {
          color: #fff;
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
