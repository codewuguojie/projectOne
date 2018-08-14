<template>


<div class="footer_w">
    <div class="content">
        &copy;&nbsp;2018&nbsp;上海米筹互联网金融服务股份有限公司|沪ICP备16033707 |&nbsp;<img src="./img/indexicon_5.png">&nbsp;沪公网安备 31010102002622号 市场有风险 投资需谨慎
    </div>
</div>



</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import { hostUrl, getResult } from "api/common";
import "swiper/dist/css/swiper.css";
import { getCookie } from "assets/js/merge";
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
    (function() {})();
  }
};
</script>

<style scoped type="text/css" lang="less">
    .footer_w{
        width: 100%;
        background: #333;
        .content{
            width: 1200px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 12px;
            margin:0 auto;
            img{
                vertical-align: middle;
            }
        }
    }
</style>
