<template>


<div class="index-box" ref="box">

    <v-header :isLogin="islogin"></v-header>

    <div class="banner">
        <div class="banner_mid">
            <img class="banner_img" src="./img/banner.png" alt="供应链金融" title="供应链金融">
            <p>小米生态链金融开拓者</p>
            <p>致力于向生态链企业提供专业金融解决方案</p>
            <p>实时申请、在线提交、快速融资</p>
            <div class="shenqing" v-if="isshow">
                <p>小米供应链金融开拓者</p>
                <ul>
                    <li><img src="./img/banner_1.png"><span>实时申请</span></li>
                    <li><img src="./img/banner_1.png"><span>在线提交</span></li>
                    <li><img src="./img/banner_1.png"><span>快速融资</span></li>
                </ul>
                <button class="ruzhu" @click="goRuzhu">申请入驻</button>
            </div>
        </div>
    </div>

    <div class="artical">

        <div class="news">

            <div class="one left">
                <div class="top"><img src="./img/indexicon_1.svg"></div>
                <div class="bottom">
                    <h3>应收账款融资</h3>
                    <p>应收账款融资是指企业在正常经营中，将向核心企业销售商品、提供劳务等服务产生的应收账款转让给金融机构进行融资的业务。
                    </p>
                    <button class="money" @click="goRongziOne">立即申请</button>
                </div>
            </div>

            <div class="two left">
                <div class="top"><img src="./img/indexicon_2.svg"></div>
                <div class="bottom">
                    <h3>订单融资</h3>
                    <p>订单融资是指企业收到核心企业有效订单、购销合同或服务协议后，金融机构为其提供资金融通，用于订单项下原材料或商品采购、加工、生产、储运（或提供服务）及劳务支出，并以订单项下销售回笼款作为主要还款来源的融资业务。
                    </p>
                    <button class="money" @click="goRongziTwo">立即申请</button>
                </div>
            </div>

        </div>

    </div>

    <div class="articalo" ref="mgb">
        <div class="problem">
            <h2>常见问题</h2>
            <div class="answer">
                <div class="help-one">
                    <div class="title msg">
                        <img src="./img/indexicon_3.svg">
                        <h4>融资的具体流程是什么？</h4>
                        <p><span style="margin-left: -50px">答：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>1.融资企业发起融资申请；<br>2.融资企业提交授信资料并完成授信；<br>3.融资企业签署相关融资协议；<br>4.融资企业提交贸易资料，提用授信额度；<br>5.融资到期后归还本息；
                        </p>
                    </div>
                </div>
                <div class="help-two msg">
                    <div class="top">
                        <img src="./img/indexicon_3.svg">
                        <h4>审核的时间多长？</h4>
                        <p><span style="margin-left: -50px">答：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>提交融资申请的一个工作日内，业务经理即会与融资企业进行对接。</p>
                    </div>
                    <div class="bottom">
                        <img src="./img/indexicon_3.svg">
                        <h4>融资企业有没有地域的限制？</h4>
                        <p><span style="margin-left: -50px">答：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>融资企业需是在中国大陆工商注册的合法公司。</p>
                    </div>
                </div>
                <div class="help-three msg">
                    <div class="title">
                        <img src="./img/indexicon_3.svg">
                        <h4>融资的具体流程是什么？</h4>
                        <p><span style="margin-left: -50px">答：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>根据企业的资质及项目风险评定。米筹金服有完善的风险模型、多元的风险管控方式，可以通过其他增信措施控制风险，达成合作。
                        </p>
                    </div>
                </div>
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
      isshow:false,
    };
  },
  methods: {
    goRuzhu() {
        getResult('get','/user/v1/curruser')
            .then((res)=>{
                //console.log(111)
                if(res.result != '0'){
                   // console.log(222)
                    this.$router.push({path:'/register'})
                }
            })

    },
    goRongziOne() {

        getResult('get','/user/v1/curruser')
            .then((res)=>{
                if(res.result != 0){
                    this.$router.push({path:'/login'})
                }else {

                    getResult('get','/enterprise/v1/particular')
                        .then((msg)=>{
                            if(msg.result != 0){
                               // console.log("跳转申请授信")
                                this.$router.push({path:'/home/data'})
                            }else {
                                this.$router.push({ path: "/myfinance/finance2?id=0" });
                                window.location.reload()
                            }
                        })
                }
            })


    },
      goRongziTwo() {

          getResult('get','/user/v1/curruser')
              .then((res)=>{
                  if(res.result != 0){
                      this.$router.push({path:'/login'})
                  }else {
                      getResult('get','/enterprise/v1/particular')
                          .then((msg)=>{
                              if(msg.result != 0){
                                  this.$router.push({path:'/home/data'})
                              }else {
                                  this.$router.push({ path: "/myfinance/finance2?id=1" });
                                  window.location.reload()
                              }
                          })
                  }
              })


      },
  },
  mounted() {
      //console.log(this.isshow)

      /*let cur = document.querySelectorAll("div[class='box']");
      console.log(cur);
      let curHeight = cur[0].clientHeight;
      console.log(curHeight);
      let ht = document.documentElement.clientHeight;
      console.log(ht)
    if(curHeight<=ht){
      this.$refs.mgb.style.marginBottom = (ht - 30) - (curHeight + 30)+ 'px'
    }*/

        getResult('get','/user/v1/curruser')
            .then((res)=>{
                //console.log(_this.result)
                if(res.result == '0'){
                    this.isshow = false;
                }else {
                    this.isshow = true;
                }
            })
      getResult('get','/enterprise/v1/particular')
          .then((res)=>{
              this.data = res.result;
          })
  }
};
</script>

<style scoped type="text/css" lang="less">

</style>
