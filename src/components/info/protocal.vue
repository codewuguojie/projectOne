<template>


<div class="my-box">

    <v-header :isLogin="islogin"></v-header>
    <div class="data-title">
      <span class="icon-address">&nbsp;当前位置：我的协议</span>
    </div>
    <div class="main">
        <div class="contents clearfix">
            <div class="left">
                <div :class="{'item':!isActive,'item active':isActive}" @click="isActive=!isActive;isActive2=!isActive2">
                    <span class="span1"></span>
                    <span class="span2 icon-sign"></span>
                    <span class="span3">待签</span>
                </div>
                <div :class="{'item':!isActive2,'item active':isActive2}" @click="isActive=!isActive;isActive2=!isActive2">
                    <span class="span1"></span>
                    <span class="span2 icon-signed"></span>
                    <span class="span3">已签</span>
                </div>
            </div>
            <div class="right" v-if="isActive2">
                <div class="item-uploads clearfix">
                    <div class="sign1">企业营业执照</div> 
                    <div class="sign2">
                        <span class="span1">浏览</span> 
                        <span class="span2">下载</span> 
                    </div> 
                </div>
                <div class="item-uploads clearfix">
                    <div class="sign1">企业三年一期财务报表</div> 
                    <div class="sign2">
                        <span class="span1">浏览</span> 
                        <span class="span2">下载</span> 
                    </div> 
                </div>
                <div class="item-uploads clearfix">
                    <div class="sign1">公司近一年审计报告</div> 
                    <div class="sign2">
                        <span class="span1">浏览</span> 
                        <span class="span2">下载</span> 
                    </div> 
                </div>
            </div>
            <div class="right" v-if="isActive">
                <div class="item-uploads clearfix">
                    <div class="sign1">公司近一年审计报告</div> 
                    <div class="sign2">
                        <span class="span2" @click="goSign()">签署</span> 
                    </div> 
                </div>
            </div>
        </div>
        
    </div>
    <v-modal title="模态框" :isShow="showModal" :width="680" @close="showModal=false">
        <div class="modal-body">
            <div class="title">企业征信报告具体指引</div>
            <div class="upfile clearfix">
                <div class="up_l">
                    上传新资料:
                </div>
                <div class="up_r">
                    <div class="item1">
                        <p><span class="icon-upload-file">&nbsp;上传文件</span></p>
                    </div>
                    <div class="item2">支持扩展名： .zip .doc .docx .pdf .jpg...</div>
                    <div class="item3">
                        <div class="files ">
                            <span class="span1 icon-file">&nbsp;文档.docx</span>
                            <span class="span2 icon-file"></span>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="item3">
                        <div class="files clearfix">
                            <span class="span1 icon-file">&nbsp;文档.docx</span>
                            <span class="span2 icon-file"></span>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="item3">
                        <div class="files clearfix">
                            <span class="span1 icon-file">&nbsp;文档.docx</span>
                            <span class="span2 icon-file"></span>
                        </div>
                        <div class="line"></div>
                    </div>
                    
                </div>
            </div>
            <div class="btns">
                <span class="first" @click="showModal=false;showModal2=true;">提交</span>
                <span>取消</span>
            </div>
        </div>
    </v-modal>
    <v-modal title="模态框" :isShow="showModal2" :width="680" @close="showModal2=false">
        <div class="modal-body">
            <div class="infos-upload clearfix">
            <p class="success"><span class="icon-checked"></span></p>
            <p class="cong">恭喜您，您的申请已提交，请耐心等待审核！</p>
            <p class="mess_s">3个工作日内会有业务经理与您取得联系</p>
            <p class="mess_s">如有任何疑问，请咨询电话：<b>021-20702568</b> 或 <b>021-20702503</b>【工作日9:00-18:00】</p>
            <p class="mess_s">电子邮箱：micfactoring_service@micfunding.com</p>
            <p class="mess_s">微信公众号咨询：</p>
            <p class="mess_code"><span><img src="./img/code.png"></span></p>
            <div class="info-last">
                <router-link to="/home">确定</router-link>
            </div>
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
import { hostUrl,getResult } from "api/common"; //导入api
export default {
    components: {
        "v-header": header,
        "v-footer":footer,
        "v-modal" : modal,
    },
    data() {
        return {
        phoneNum: "",
            islogin:true,
            isBaseData:false,
            isActive:true,
            isActive2:false,
            showModal:false,
            showModal2:false,
        }
    },
    methods: {

        goRuzhu(){
            this.$router.push({path:'/home/data'})
        },
        openFile(){
            this.showModal = true;
        },
        goSign(){
            this.$router.push({name:'sign'})
        }
    },
    mounted() {

    }
};
</script>

<style scoped type="text/css" lang="less">
.my-box{
    width: 100%;
    
    background:#f9f9f9;
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
    .main{
        width: 1200px;
        margin: 0 auto;
        min-height:1144px;
        .contents{
            width: 100%; 
            .left{
                width: 224px;
                height: 480px;
                margin-right: 20px;
                background-color: #ffffff;
                border-radius: 10px 10px 0px 0px;
                
                .item{
                    padding: 25px 0;
                    cursor: pointer;
                    .span1{
                        float:left;
                        width: 4px;
                        height: 30px;
                        background-color: #ffffff;
                    }
                    .span2{
                        margin-left: 40px;
                    }
                    .span3{
                        color: #999999;
                        font-size: 14px;
                        line-height: 30px;
                        margin-left: 15px;
                    }
                    .icon-sign:before{
                        font-size: 14px;
                        color:  #999999;;
                        line-height: 30px;
                    }
                    .icon-signed:before{
                        font-size: 14px;
                        color:  #999999;;
                        line-height: 30px;
                    }

                }
                .active{
                    .span1{
                        background-color:#54b4fe;
                    }
                    .span3{
                        color:  #54b4fe;
                    }
                    .icon-sign:before{
                        color:  #54b4fe;
                    }
                    .icon-signed:before{
                        color:  #54b4fe;
                    }
                }
            }
            .right{
                width: 876px;
                min-height: 440px;
                padding:10px 40px 40px 40px;
                // height: 860px;
                background-color: #ffffff;
                border-radius: 10px;
                .item-uploads{
                    width: 876px;
                    position: relative;
                    border-bottom: 1px solid #eeeeee;
                    padding: 30px 0 30px 0;
                    .sign1{
                        float: left;
                        line-height: 32px;
                        font-size: 16px;
                        color: #666666;
                    }
                    .sign2{
                        float: right;
                        span{
                            display: inline-block;
                            height: 32px;
                            width: 80px;
                            text-align: center;
                            color: #54b4fe;
                            line-height: 32px;
                            font-size: 14px;
                            border: solid 1px #ffffff;
                            &:hover{
                                background-color: #54b4fe;
                                border: solid 1px #54b4fe;
                                color: #ffffff;
                            }
                        }
                    }
                    
                }
                .item-last{
                    margin-top: 20px;
                    .need{
                        color: #ee2323;
                        font-size: 12px;
                    }
                    .tips{
                        font-size: 12px;
                        color: #999999;
                    }
                }
                .item-more{
                    margin-top: 40px;
                    width: 876px;
                    height: 44px;
                    background-color: #ffffff;
                    border: solid 1px #eeeeee;
                    text-align:center;
                    line-height: 44px;
                    font-size: 16px;
                    &:hover{
                        color: #54b4fe;
                    }
                }
            }
            .top{
                span{
                    font-size: 14px;
                    color: #666666;
                    margin-right: 90px;
                }
            }
            .bottom{
                span.file{
                    display: inline-block;
                    color: #54b4fe;
                    font-size: 14px;
                    margin:20px 70px 0 0;
                    cursor: pointer;
                    img{
                        width: 14px;
                        vertical-align: middle;
                    }
                }   
            }
            
        }
    }
    .modal-body{
        padding:0 40px 40px 40px;
        .title{
            text-align:center;
            color: #666666;
            font-size: 20px;
        }
        .upfile{
            width: 100%;
            margin-top: 40px;
        }
        .up_l{
            float: left;
            color: #666666;
            font-size:14px;
            line-height: 40px;
        }
        .up_r{
            float: left;
            padding-left: 20px;
            .item1{
                p{
                    width: 122px;
                    height: 40px;
                    background-color: #ffffff;
                    border: solid 1px #54b4fe;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    color: #54b4fe;
                    .icon-upload-file:before{
                        font-size: 14px;
                        color: #54b4fe;
                    }
                }
            }
            .item2{
                color: #bbbbbb;
                font-size: 12px;
                line-height: 33px;
                
            }
            .item3{
                width: 503px;
                margin-top: 10px;
                .files{
                    overflow: hidden;
                    width: 100%;
                    color: #54b4fe;
                    .span1{
                        line-height: 36px;
                        font-size: 14px;
                        float: left;
                    }
                    .span2{
                        line-height: 36px;
                        font-size: 14px;
                        float: right;
                    }
                    
                }
                .line{
                    width: 100%;
                    height: 2px;
                    background: #54b4fe;
                }
            }
        }
        .btns{
            margin-top: 30px;
            span.first{
                margin-left: 140px;
            }
            span{
                display: inline-block;
                width: 144px;
                height: 40px;
                background-color: #ffffff;
                border: solid 1px #eeeeee;
                text-align: center;
                line-height: 40px;
                color: #999999;
                font-size: 14px;
                margin-right: 30px;
                &:hover{
                    background-color: #54b4fe;
                    color: #ffffff;
                }
            }
            
        }
    }
    .infos-upload {
        // box-shadow: 0 0 20px #d4e6f5;
        background: #fff;
        
        width: 600px;
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
        p{
            width: 100%;
        }
        p.success{
            text-align: center;
            margin-top: 10px;
            .icon-checked:before{
                font-size: 52px;
            }
        }
        p.cong{
            font-size:18px;
            text-align: center;
            padding-top: 18px;
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
    
}

    
    
</style>
