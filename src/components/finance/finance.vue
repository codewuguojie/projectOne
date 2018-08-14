<template>

       
<div class="financeDetial-box">
    <div class="my">
        <h3>我的融资</h3>
        <div class="bottom">
            <h4 class="zhuangtai">审核中</h4>
            <div class="leixing">
                <span>融资类型：</span><span class="type">应收账款融资</span>
            </div>
            <div class="jine">
                <ul>
                    <li class="left"><span>借款金额：</span><span>100,000.00</span></li>
                    <li class="left"><span>融资到期日：</span><span>2018-06-01</span></li>
                    <li class="left"><span>年化利率：</span><span>8%</span></li>
                    <li class="left"><span>滞纳金率：</span><span>0.05%</span></li>
                </ul>
            </div>
            <table cellspacing="0">
                <tr>
                    <th>放款日期</th>
                    <th>还款日期</th>
                    <th>融资天数（天）</th>
                    <th>已还本金（元）</th>
                    <th>已还利息（元）</th>
                    <th>已还滞纳金（元）</th>
                    <th>本次还款金额（元）</th>
                </tr>
                <tr>
                    <td>2018-06-01</td>
                    <td>2017-06-01</td>
                    <td>2017-06-01</td>
                    <td>1000,000.00</td>
                    <td>800.00</td>
                    <td>0</td>
                    <td>160,000.00</td>
                </tr>
                <tr>
                    <td>2018-06-01</td>
                    <td>2017-06-01</td>
                    <td>2017-06-01</td>
                    <td>1000,000.00</td>
                    <td>800.00</td>
                    <td>0</td>
                    <td>160,000.00</td>
                </tr>
            </table>
        </div>

    </div>
</div>


</template>

<script>

import Vue from "vue";
import header from "@/components/base/header/header";
import { Swipe, SwipeItem, Toast, MessageBox } from "mint-ui"; // mint-ui的swipe
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { hostUrl,getResult } from "api/common"; //导入api
import "swiper/dist/css/swiper.css";
import { getCookie } from "assets/js/merge";
import axios from "axios";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    components: {
        "v-header": header
    },
    data() {
        return {
        phoneNum: "",
        // imgUrls: "http://scfapi.online.com/basics/v1/open/basics/imgcode",
        imgUrl: `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`
        }
    },
    methods: {
        getImgCode() {
            this.imgUrl = `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`;
        }
    },
    mounted() {
        (function() {
            
        })();
    }
};
</script>

<style scoped type="text/css" lang="less">
   
</style>
