<template>
    <div class="myHome">
        <v-header :isLogin="islogin"></v-header>

        <div class="box">
            <div class="banner">
                <div class="content">
                    <p class="mcbl">米筹保理</p>
                    <p class="tips">致力于向科创企业提供综合金融解决方案</p>
                    <p class="descripe">实时申请、在线提交、快速融资</p>
                </div>
            </div>
            <div class="finance">
                <div class="f-box">
                    <h3 class="title">小米有品融资</h3>
                    <p class="type">适用于企业在小米有品平台已产生的销售净流水的应收账款融资</p>
                    <div class="btn" @click="goApply1()">立即申请</div>
                </div>
                <div class="f-box">
                    <h3 class="title">小米商城融资</h3>
                    <p class="type">适用于企业在小米商城已产生的应收账款融资或收到小米订单产生的订单融资</p>
                    <div class="btn" @click="goApply2()">立即申请</div>
                </div>
                <div class="f-box">
                    <h3 class="title">其他融资</h3>
                    <p class="type">适用于企业的其他融资需求，包括在其他平台渠道贸易相关的供应链融资</p>
                    <div class="btn" @click="goApply3()">立即申请</div>
                </div>
            </div>
            <div class="question">
                 <div class="top">
                     <img src="./img/help1.png"/>
                     <span class="someQuestion">常见问题</span>
                 </div>
                <div class="contQuestion">
                    <div class="q-title">
                        <img src="./img/help2.png"/>
                        <span class="wenti">融资的具体流程是什么?</span>
                    </div>
                    <div class="q-answer">
                        <span class="q-box">答：</span>
                        <span class="contAnswer">1. 融资企业发起融资申请</span>
                    </div>
                    <div class="q-answer">
                        <span class="q-box-1">答：</span>
                        <span class="contAnswer">2. 融资企业提交授信资料并完成授信</span>
                    </div>
                    <div class="q-answer">
                        <span class="q-box-1">答：</span>
                        <span class="contAnswer">3. 融资企业签署相关融资协议</span>
                    </div>
                    <div class="q-answer">
                        <span class="q-box-1">答：</span>
                        <span class="contAnswer">4. 融资企业提交贸易资料，提用授信额度</span>
                    </div>
                    <div class="q-answer">
                        <span class="q-box-1">答：</span>
                        <span class="contAnswer">5. 融资到期后归还本息</span>
                    </div>
                    <div class="q-title">
                        <img src="./img/help2.png"/>
                        <p class="wenti">审核的时间多长？</p>
                    </div>
                    <div class="q-answer">
                        <span class="q-box">答：</span>
                        <span class="contAnswer">提交融资申请的一个工作日内，业务经理即会与融资企业进行对接。</span>
                    </div>
                    <div class="q-title">
                        <img src="./img/help2.png"/>
                        <p class="wenti">融资企业有没有地域的限制？</p>
                    </div>
                    <div class="q-answer">
                        <span class="q-box">答：</span>
                        <span class="contAnswer">融资企业需是在中国大陆工商注册的合法公司。</span>
                    </div>
                    <div class="q-title">
                        <img src="./img/help2.png"/>
                        <p class="wenti">融资需不需要抵押？</p>
                    </div>
                    <div class="q-answer">
                        <span class="q-box">答：</span>
                        <span class="contAnswer">根据企业的资质及项目风险评定。米筹金服有完善的风险模型、多元的风险管控方式，可以通过其他增信措施控制风险，达成合作。</span>
                    </div>
                </div>
            </div>
        </div>

        

        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import modal from "@/components/base/modal/modal";
    import index from "../../router";
    import ElementUI from 'element-ui';
    import {getResult} from "../../api/common";
    import { Toast } from 'mint-ui';
    export default {
        name: "myHome",
        components:{
            "v-header": header,
            "v-footer": footer,
            "v-modal": modal
        },
        data(){
            return{
                islogin:true,
                state:0,
            }
        },
        methods:{
            goApply1(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    Toast('您提交的资料正在审核中，请耐心等待')
                }else if(this.state == 1){
                    this.$router.push({path:'apply',query:{index:1}})
                }else if(this.state == 2){
                    Toast('对不起，您提交的资料未通过审核')
                }
                
            },
            goApply2(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    Toast('您提交的资料正在审核中，请耐心等待')
                }else if(this.state == 1){
                this.$router.push({path:'apply',query:{index:2}})
                }else if(this.state == 2){
                    Toast('对不起，您提交的资料未通过审核')
                }
            },
            goApply3(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    Toast('您提交的资料正在审核中，请耐心等待')
                }else if(this.state == 1){
                this.$router.push({path:'apply',query:{index:3}})
                }else if(this.state == 2){
                    Toast('对不起，您提交的资料未通过审核')
                }
            }
        },
        mounted(){
            getResult('get','/enterprise/v1/basic')
            .then(data=>{
                if(data.result == 0){
                    this.state = data.data.creditStatus
                    console.log(this.state)
                }
            })
        }
    }
</script>

<style scoped lang="scss">
@import "../../assets/sass/myHome";
</style>
