<template>


    <div class="finance-box">

        <!--头部-->
        <v-header :isLogin="islogin"></v-header>

        <!--中间内容部分-->
        <div class="finance">
            <h2>-&nbsp&nbsp申请融资&nbsp&nbsp-</h2>

            <div class="up-content">
                <div class="tianxie">
                    <ul>
                        <li>
                            <span style="color: red;">*</span>
                            <span>融资类型</span>
                            <select v-model="selected" @change="getIndexof">
                                <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
                            </select>
                        </li>
                        <li>
                            <span style="color: red;">*</span>
                            <span>申请融资金额</span>
                            <input v-model="money" type="text" placeholder="填写预计金额" onfocus="this.placeholder=''"
                                   onblur="this.placeholder='填写预计金额'" @keyup="keyup" ref="inp" v-on:focus="focus"
                                   v-on:blur="blur">
                            <span>元</span>
                        </li>
                        <li>
                            <div class="box">
                                <span style="color: red;">*</span>
                                <span>融资目的</span>
                                <span></span>
                            </div>
                            <textarea maxlength="200" v-model="mudi" ref="area1" placeholder="输入字数200个以内" onfocus="this.placeholder=''" onblur="this.placeholder='输入字数200个以内'" v-on:focus="focus1" v-on:blur="blur1"></textarea>
                        </li>
                        <li>
                            <div class="box">
                                <span>备注信息</span>
                                <span></span>
                            </div>
                            <textarea maxlength="200" v-model="beizhu" ref="area2" placeholder="输入字数200个以内" onfocus="this.placeholder=''" onblur="this.placeholder='输入字数200个以内'" v-on:focus="focus2" v-on:blur="blur2"></textarea>
                        </li>
                    </ul>
                </div>


                <div class="infos-upload clearfix" v-if="zheng">
                    <div class="main clearfix">
                        <div class="up-left">
                            <v-upload :isShow="isShow.f1" :titleText="title.f1" :isLong="islong.f1" ref="fileArr01"
                                      :newfiles="files.f1"></v-upload>
                        </div>
                        <div class="up-right">
                            <v-upload :isShow="isShow.f2" :titleText="title.f2" :isLong="islong.f2" ref="fileArr02"
                                      :newfiles="files.f2"></v-upload>
                        </div>
                    </div>
                    <div class="main clearfix">
                        <div class="up-left">
                            <v-upload :isShow="isShow.f3" :titleText="title.f3" :isLong="islong.f3" ref="fileArr03"
                                      :newfiles="files.f3"></v-upload>
                        </div>
                        <div class="up-right">
                            <v-upload :isShow="isShow.f4" :titleText="title.f4" :isLong="islong.f4" ref="fileArr04"
                                      :newfiles="files.f4"></v-upload>
                        </div>
                    </div>
                    <div class="main clearfix">
                        <div class="up-left">
                            <v-upload :isShow="isShow.f5" :titleText="title.f5" :isLong="islong.f5" ref="fileArr05"
                                      :newfiles="files.f5"></v-upload>
                        </div>

                    </div>


                    <div class="main clearfix">
                        <v-upload :isShow="isShow.f8" :titleText="title.f8" :isLong="islong.f8" ref="fileArr08"></v-upload>
                    </div>
                    <div class="error">{{errorMessage}}</div>
                    <div class="info-last">
                        <div class="obtn" @click="submitBtnf()">提交</div>
                    </div>
                </div>

                <div class="infos-upload clearfix" v-if="fan">
                    <div class="main clearfix">
                        <div class="up-left">
                            <v-upload :isShow="isShow.f9" :titleText="title.f9" :isLong="islong.f9" ref="fileArr09"
                                      :newfiles="files.f9"></v-upload>
                        </div>
                        <div class="up-right">
                            <v-upload :isShow="isShow.f10" :titleText="title.f10" :isLong="islong.f10" ref="fileArr10"
                                      :newfiles="files.f10"></v-upload>
                        </div>
                    </div>
                    <div class="main clearfix">
                        <div class="up-left">
                            <v-upload :isShow="isShow.f11" :titleText="title.f11" :isLong="islong.f11" ref="fileArr11"
                                      :newfiles="files.f11"></v-upload>
                        </div>
                    </div>
                    <div class="main clearfix">
                        <v-upload :isShow="isShow.f8" :titleText="title.f8" :isLong="islong.f8" ref="fileArr08"></v-upload>
                    </div>
                    <div class="error">{{errorMessage}}</div>
                    <div class="info-last">
                        <div class="obtn"  @click="submitBtns()">提交</div>
                    </div>
                </div>
            </div>

        </div>


        <div class="tips">tips:上传文件支持图片、压缩包、worf、PDF、excel格式，各文件大小10M以内，最多支持上传十个文件</div>
        <!--底部footer-->

        <!--申请成功提示-->
        <div class="up_hezi" v-show="ishow"></div>
        <div class="up_background" ref="up_hezi" v-show="ishow">
            <div class="repay" v-show="ishow">
                <img src="./img/success.png"/>
                <p>申请提交成功，请耐心等待审批</p>
                <button @click="soh">确认</button>
            </div>
        </div>

        <v-footer></v-footer>

    </div>


</template>

<script>

    import Vue from "vue";
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import upload from "@/components/base/upload/upload";
    import {hostUrl, getResult, toThousands} from "api/common"; //导入api
    export default {
        components: {
            "v-header": header,
            "v-footer": footer,
            "v-upload": upload
        },
        data() {
            return {
                islogin: true,
                ishow:false,
                errorMessage: '',
                fan: false,
                money: '',
                mudi: '',
                beizhu: '',
                zheng: '',
                files: '',
                isShow: {
                    f1: true,
                    f2: false,
                    f3: true,
                    f4: true,
                    f5: true,

                    f9: true,
                    f10: true,
                    f11: true,
                },
                islong: {
                    f1: false,
                    f2: false,
                    f3: false,
                    f4: false,
                    f5: false,

                    f9: false,
                    f10: false,
                    f11: false,

                },
                title: {
                    /*应收账款融资资料*/
                    f1: '与买方签订的贸易合同',
                    f2: '买方采购订单',
                    f3: '对买方的应收账款信息',
                    f4: '应收账款转让合同',
                    f5: '应收账款提款单',
                    f8: '其他资料',

                    /*订单融资资料*/
                    f9: '与买方签订的贸易合同及批次订单',
                    f10: '与上游供应商签订的购销合同',
                    f11: '订单融资提款单',


                },
                selected: '0',
                options: [
                    {text: '应收账款融资', value: 0},
                    {text: '订单融资', value: 1}
                ]
            }
        },
        methods: {

            soh(){
                this.ishow = !this.ishow
                this.$router.push({path: 'home'})
                //console.log(this.ishow)
            },
            keyup(event) {
                this.money = this.money.replace(/[^\d]/g, '')
                this.money = this.money.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')

            },
            focus() {
                this.$refs.inp.style.background = '#fff';
                /*
                                this.placeholder=''*/
            },
            blur() {
                this.$refs.inp.style.background = '#f6f6f6';
            },
            focus1() {
                this.$refs.area1.style.background = '#fff';
            },
            blur1() {
                this.$refs.area1.style.background = '#f6f6f6';
            },
            focus2() {
                this.$refs.area2.style.background = '#fff';
                /*
                                this.placeholder=''*/
            },
            blur2() {
                this.$refs.area2.style.background = '#f6f6f6';
            },

            /*获取select下拉框的index*/
            getIndexof() {
                //console.log(this.selected)

                if (this.selected) {
                    //console.log(1)
                    this.fan = true;
                    this.zheng = false;
                    this.files = {
                        f8: [],
                        f9: [],
                        f10: [],
                        f11: []
                    };
                    this.money = '';
                    this.mudi = '';
                    this.beizhu = ''
                } else {
                    //console.log(2)
                    this.fan = false;
                    this.zheng = true;
                    this.files = {
                        f1: [],
                        f2: [],
                        f3: [],
                        f4: [],
                        f5: [],
                        f8: []
                    }
                    this.money = '';
                    this.mudi = '';
                    this.beizhu = ''
                }
            },

            /*submitBtn(){
                this.$router.push({name:'data3'})
            },*/
            submitBtnf() {


                let files = {
                    f1: [],
                    f2: [],
                    f3: [],
                    f4: [],
                    f5: [],
                    f8: [],

                }
                let _this = this;
                this.$refs.fileArr01.returnData().forEach((value, index, arr) => {
                    files.f1.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr02.returnData().forEach((value, index, arr) => {
                    files.f2.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr03.returnData().forEach((value, index, arr) => {
                    files.f3.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr04.returnData().forEach((value, index, arr) => {
                    files.f4.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr05.returnData().forEach((value, index, arr) => {
                    files.f5.push({fileName: value.fileName, filePath: value.filePath})
                })

                this.$refs.fileArr08.returnData().forEach((value, index, arr) => {
                    files.f8.push({fileName: value.fileName, filePath: value.filePath})
                })

                if (this.money == '') {
                    //console.log(this.money)
                    this.errorMessage = '申请融资金额不能为空';
                    return;
                }
                if (this.mudi == '') {
                    //console.log(this.mudi)
                    this.errorMessage = '融资目的不能为空';
                    return;
                }
                if (files.f1.length < 1) {
                    //console.log(11);
                    this.errorMessage = '与买方签订的贸易合同必填';
                    return;
                }
                if (files.f3.length < 1) {
                    this.errorMessage = '对买方的应收账款信息必填';
                    return;
                }
                if (files.f4.length < 1) {
                    this.errorMessage = '应收账款转让合同必填';
                    return;
                }
                if (files.f5.length < 1) {
                    this.errorMessage = '应收账款提款单必填';
                    return;
                }


                //this.errorMessage = '';
                getResult('post', '/loan/v1/apply_receive', {
                    financeAmt: this.money.split(",").join(""),
                    financePurpose: this.mudi,
                    remark: this.beizhu,
                    otherDoc: (files.f8.length > 0) ? JSON.stringify(files.f8) : '',
                    buyTradeContract: (files.f1.length > 0) ? JSON.stringify(files.f1) : '',//企业营业执照
                    buyOrder: (files.f2.length > 0) ? JSON.stringify(files.f2) : '',//企业三年一期
                    buyReceiveInfo: (files.f3.length > 0) ? JSON.stringify(files.f3) : '',//企业营业执照
                    receiveAccountContract: (files.f4.length > 0) ? JSON.stringify(files.f4) : '',//企业营业执照
                    receiveAccountTicket: (files.f5.length > 0) ? JSON.stringify(files.f5) : '',//企业营业执照

                }).then(result => {
                    if (result.result == 0) {
                        this.ishow = !this.ishow
                    }
                })

            },

            submitBtns() {


                let files = {

                    f8: [],
                    f9: [],
                    f10: [],
                    f11: []


                }
                this.$refs.fileArr09.returnData().forEach((value, index, arr) => {
                    files.f9.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr10.returnData().forEach((value, index, arr) => {
                    files.f10.push({fileName: value.fileName, filePath: value.filePath})
                })
                this.$refs.fileArr11.returnData().forEach((value, index, arr) => {
                    files.f11.push({fileName: value.fileName, filePath: value.filePath})
                })

                this.$refs.fileArr08.returnData().forEach((value, index, arr) => {
                    files.f8.push({fileName: value.fileName, filePath: value.filePath})
                })


                if (this.money == '') {
                    //console.log(this.money)
                    this.errorMessage = '申请融资金额不能为空';
                    return;
                }
                if (this.mudi == '') {
                    //console.log(this.mudi)
                    this.errorMessage = '融资目的不能为空';
                    return;
                }
                if (files.f9.length < 1) {
                    //console.log(11);
                    this.errorMessage = '与买方签订的贸易合同及批次订单必传';
                    return;
                }
                if (files.f10.length < 1) {
                    this.errorMessage = '与上游供应商签订的购销合同必传';
                    return;
                }
                if (files.f11.length < 1) {
                    this.errorMessage = '订单融资提款单必传';
                    return;
                }

                this.errorMessage = '';
                getResult('post', '/loan/v1/apply_order', {
                    financeAmt: this.money.split(",").join(""),
                    financePurpose: this.mudi,
                    remark: this.beizhu,
                    otherDoc: (files.f8.length > 0) ? JSON.stringify(files.f8) : '',
                    buyTradeContract: (files.f9.length > 0) ? JSON.stringify(files.f9) : '',//企业营业执照
                    upTradeContract: (files.f10.length > 0) ? JSON.stringify(files.f10) : '',//企业三年一期
                    orderPaidTicket: (files.f11.length > 0) ? JSON.stringify(files.f11) : '',//企业营业执照

                }).then(result => {
                    if (result.result == 0) {
                        this.ishow = !this.ishow
                    }
                })

            }

        },
        mounted() {
            //console.log(`${document.body.scrollTop}lalalalaa`)

            //console.log("1"+this.ishow)

            this.$refs.up_hezi.style.height = `${window.innerHeight}px`

            //console.log(`这个是${this.$route.query.id}`)
            if (this.$route.query.id) {
                this.selected = this.$route.query.id
            }
            //console.log(this.selected)
            if (this.selected == 0) {
                //console.log(1)
                this.zheng = true;
                this.fan = false;
            } else {
                //console.log(2)
                this.fan = true;
                this.zheng = false;
            }
        }
    };
</script>

<style scoped type="text/css" lang="less">
    .infos-upload{
        width: 1080px;
        background: #fff;
        margin-left: 60px;
        .main{
            margin: 30px 0 0 20px;
            .up-left{
                float: left;
                margin-right: 150px;
                .infos-up{
                    .title{
                        input{
                            &:hover span{
                                background: #54b4fe;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .up-right{
                float: left;
            }
        }
        .line{
            border-bottom:1px solid #f5f5f5;
            margin: 0 100px 50px 0;
        }
        .tipms{
            font-size:12px;
            color:#d9d9d9;
            margin-left: 35px;
        }
        .info-last{
            text-align: center;
            padding: 40px 0 60px 0;
            div{
                display: inline-block;
                width: 300px;
                height: 46px;
                text-align:center;
                background: #54b4fe;
                line-height: 46px;
                color: #fff;
                cursor: pointer;
            }

        }
        .error{
            padding: 10px 0;
            color: red;
            font-size: 14px;
        }

    }


</style>
