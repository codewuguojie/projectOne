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
                    <p class="p1"><img src="./img/icon5.png"></p>
                    <p class="p2 active">提交企业资料</p>
                </li>
                <li>
                    <p><img src="./img/line.png"></p>
                    <p></p>
                </li>
                <li class="last">
                    <p class="p1"><img src="./img/icon6.png"></p>
                    <p class="p2 active">审核</p>
                </li>
            </ul>
          </div>
          <div class="infos-upload clearfix">
            <p class="success"><span class="icon-checked"></span></p>
            <p class="cong">恭喜您，您的申请已提交，请耐心等待审核！</p>
            <p class="mess_s">3个工作日内会有业务经理与您取得联系</p>
            <p class="mess_s">如有任何疑问，请咨询电话：<b>021-20702568</b> 或 <b>021-20702503</b>【工作日9:00-18:00】</p>
            <p class="mess_s">电子邮箱：micfactoring_service@micfunding.com</p>
            <p class="mess_s">微信公众号咨询：</p>
            <p class="mess_code"><span><img src="./img/code.png"></span></p>
            <div class="info-last">
                <router-link to="/myHome">确认</router-link>
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
import modal from "@/components/base/modal/modal";
import upload from "@/components/base/upload/upload";
import { hostUrl, getResult } from "api/common"; //导入api
export default {
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-upload": upload,
    "v-modal" : modal,
  },
  data() {
    return {
      islogin: true,
      errorMessage: "",
      isShowModal:false,
      
    };
  },
  methods: {
    addContact(){
        this.isShowModal = false;
    }
  },

};
</script>

<style type="text/css" lang="scss">
.data-box {
    background: #f9f9f9;
    
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
        height: 1200px;
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
            padding: 23px 0 6px 0;
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
                .active{
                    color: #54b4fe;
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
            .info-last{
                text-align: center;
                padding-top: 60px;
                a{
                    display: inline-block;
                    width: 220px;
                    height: 40px;
                    text-align:center;
                    background: #54b4fe;
                    line-height: 40px;
                    color: #fff;
                    cursor: pointer;
                    color: #fff;
                    font-size: 14px;
                }

            }
            p.success{
                text-align: center;
                margin-top: 10px;
                .icon-checked:before{
                    font-size: 72px;
                }
            }
            p.cong{
                font-size:18px;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 30px;
                color: #666666;
            }
            p.mess{
                font-size: 12px;
                color: #999;
                text-align: center;
                padding-top: 20px;
                line-height: 36px
            }
            p.mess_s{
                font-size: 12px;
                color: #999;
                text-align: center;
                line-height: 20px;
                b{
                    color: #54b4fe;

                }
            } 
            p.mess_code{
                text-align: center;
                margin-top: 20px;
                span{
                    border: solid 1px #eeeeee;
                    display: inline-block;
                    width: 108px;
                    height: 108px;
                    padding:8px;
                    img{
                        
                        width: 108px;
                        height: 108px;
                    }
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
        .info-contacts{
            border: 1px solid #eeeeee;
            width: 1060px;
            margin-left: 40px;
            background: #fff;
            padding: 30px;
            margin-top: 20px;
            .uploads-title{
                font-size: 20px;
                color: #666666;
                span{
                    float: left;
                    width: 4px;
                    height: 20px;
                    margin-top: 4px;
                    background-color: #54b4fe;
                }
            }
            .add{
                margin: 20px 0 20px 0;
                span{
                    display: inline-block;
                    width: 112px;
                    height: 40px;
                    background-color: #54b4fe;
                    text-align: center;
                    color: #ffffff;
                    line-height: 40px;
                    font-size: 14px;
                }
            }
            .contacts{
                width: 1020px;
                padding: 20px;
                height: 46px;
                background-color: #f9f9f9;
                font-size: 14px;
                .left{
                    width:225px;
                    float: left;
                    p{
                        .b1{
                            color: #999999;
                        }
                    }
                    .p1{
                        margin-bottom: 10px;
                        
                    }
                }
                .center{
                    width:565px;
                    float: left;
                    p{
                        .b1{
                            color: #999999;
                        }
                    }
                    .p1{
                        margin-bottom: 10px;
                        
                    }
                }
                .right{
                    width:230px;
                    float: left;
                    p{
                        .b1{
                            color: #999999;
                        }
                    }
                    .p1{
                        margin-bottom: 10px;
                        
                    }
                }
            }
        }
        }
    }
   
}
</style>



