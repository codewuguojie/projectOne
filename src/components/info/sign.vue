<template>


<div class="my-box">

    <v-header :isLogin="islogin"></v-header>
    <div class="data-title">
      <span class="icon-address">&nbsp;当前位置：首页>我的协议>签署协议

      </span>
    </div>
    <div class="main">
        <div class="btn"><span @click="showModal=true">点击签署</span></div>
        
    </div>
    <v-modal title="模态框" :isShow="showModal" :width="680" @close="showModal=false">
        <div class="modal-body">
            <div class="title">签署协议</div>
            <div class="text">为了保证您的账户安全，需要对 <b>183****9988</b> 的手机进行验证</div>
            <div class="number clearfix">
                <input type="text">
                <span>获取验证码</span>
            </div>
            <div class="btns">
                <span class="first" @click="showModal=false;">确定</span>
            </div>
        </div>
    </v-modal>
    
    <v-footer></v-footer>

</div>



</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import modal from "@/components/base/modal/modal";
import { hostUrl, getResult } from "api/common"; //导入api
export default {
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-modal": modal
  },
  data() {
    return {
      phoneNum: "",
      islogin: true,
      isBaseData: false,
      isActive: true,
      isActive2: false,
      showModal: true
    };
  },
  methods: {
    goRuzhu() {
      this.$router.push({ path: "/home/data" });
    },
    openFile() {
      this.showModal = true;
    }
  },
  mounted() {}
};
</script>

<style scoped type="text/css" lang="less">
.my-box {
  width: 100%;

  background: #f9f9f9;
  .data-title {
    width: 1180px;
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
  .main {
    width: 1120px;
    margin: 0 auto;
    min-height: 1144px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 40px;
    .btn {
      text-align: center;
      span {
        display: inline-block;
        width: 220px;
        height: 40px;
        background-color: #54b4fe;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .modal-body {
    padding: 0 40px 40px 40px;
    .title {
      text-align: center;
      color: #666666;
      font-size: 20px;
    }

    .btns {
      text-align: center;
      span {
        display: inline-block;
        width: 188px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #999999;
        font-size: 14px;
        margin-right: 30px;
        background-color: #54b4fe;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .text {
      margin-top: 40px;
      text-align: center;
      color: #999999;
      font-size: 14px;
      b {
        color: #54b4fe;
      }
    }
    .number {
      margin: 30px 0 40px 0;
      span {
        margin-left: 30px;
        float: left;
        display: inline-block;
        width: 144px;
        height: 44px;
        background-color: #ffffff;
        border: solid 1px #54b4fe;
        color: #54b4fe;
        text-align: center;
        line-height: 44px;
        cursor: pointer;
      }
      input {
        margin-left: 20px;
        width: 370px;
        float: left;
        font-size: 14px;
        padding: 15px 0 12px 12px;
      }
    }
  }
}
</style>
