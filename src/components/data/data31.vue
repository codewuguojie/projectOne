<template>


<div class="datasuccess-box">

    <v-header :isLogin="islogin"></v-header>

    <!--申请授信2内容部分-->
    <div class="infos">
        <div class="infos-title">
            <div><b class="line">-</b>&nbsp;&nbsp;<b class="text">申请授信</b>&nbsp;&nbsp;<b class="line">-</b></div>
        </div>
        <div class="infos-img">
            <ul class="clearfix">
                <li class="first">
                    <p><img src="./img/icon4.png"></p>
                    <p class="light">意向函</p>
                </li>
                <li>
                    <p><img src="./img/icon8.png"></p>
                    <p></p>
                </li>
                <li>
                    <p><img src="./img/icon2.png"></p>
                    <p class="light">提交企业资料</p>
                </li>
                <li>
                    <p><img src="./img/icon7.png"></p>
                    <p></p>
                </li>
                <li class="last">
                    <p><img src="./img/icon6.png"></p>
                    <p>审核</p>
                </li>
            </ul>
        </div>
        <div class="infos-upload3 clearfix">
            <p class="success"><img src="./img/login09.png"></p>
            <p class="cong">恭喜您，您的申请已提交，请耐心等待审核！</p>
            <p class="mess">72小时（三个工作日，如遇法定节假期顺延）内会有专属的项目经理与您取得联系</p>
            <p class="mess_s">如有任何疑问，请致电<b>&nbsp;021-20702568</b>&nbsp;&nbsp;<b>021-20702503</b></p>
            <div class="info-last">
                <router-link to="/home">确认</router-link>
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
import { hostUrl,getResult } from "api/common"; //导入api
export default {
    components: {
        "v-header": header,
        "v-footer":footer
    },
    data() {
        return {
        phoneNum: "",
        islogin:true
        }
    },
    methods: {

    },
    mounted() {
        (function() {

        })();
    }
};
</script>

<style scoped type="text/css" lang="less">
.infos{
       width: 1200px;
       margin:0 auto;
       height: 1186px;
       background: #fbfdff;
       .infos-title{
           text-align:center;
           padding:60px 0 40px 0;
           font-size: 20px;
       }
       .infos-img{
            text-align: center;
            padding-bottom: 40px;
           ul {
                display: inline-block;
                li{
                    float: left;
                    p{
                        font-size: 14px;
                        line-height: 30px;
                    }
                    p.light{
                        color:#bbbbbb;
                    }
                }
                li.first{
                    margin-right: 20px;
                }
                li.last{
                    margin-left: 20px;
                    p{
                        color: #54b4fe;
                    }
                }
           }
        }
         .infos-upload3{
            width: 1080px;
            background: #fff;
            padding:60px;
            box-shadow: 0 0 20px #d4e6f5;
            .info-last{
                text-align: center;
                padding-top: 60px;
                a{
                    display: inline-block;
                    width: 300px;
                    height: 46px;
                    text-align:center;
                    background: #54b4fe;
                    line-height: 46px;
                    color: #fff;
                    cursor: pointer;
                    color: #fff;
                }

            }
            p.success{
                text-align: center;
            }
            p.cong{
                font-size:20px;
                text-align: center;
                padding-top: 50px;
            }
            p.mess{
                font-size: 12px;
                color: #999;
                text-align: center;
                padding-top: 8px;
            }
            p.mess_s{
                font-size: 12px;
                color: #999;
                text-align: center;
                padding-top: 12px;
                b{
                    color: #54b4fe;
                    text-decoration:underline

                }
            }

        }


   }
</style>
