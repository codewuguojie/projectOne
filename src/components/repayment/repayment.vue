<template>
    <div class="repayment">
        <v-header :isLogin="islogin"></v-header>

        <div class="content" ref="myuser">
            <div class="position">
                <img src="./img/position.png"/>
                <span>当前位置 > 首页 > 我的融资 > 申请融资</span>
            </div>
            <div class="process">
                <div class="L-top">
                    <img src="./img/repay.png"/>
                    <span>还款详情</span>
                </div>
            </div>
            <div class="list">
                <div class="title">
                    结算单:
                </div>
                <div class="list-table">
                    <h2>米筹商业保理（上海）有限公司业务结算单</h2>
                    <p class="detail">
                        <span>定单编号: rz20180808001</span>
                        <span>结算时间: 2018-08-08</span>
                        <span>借款金额: 1,000,000.00</span>
                    </p>
                    <table cellspacing="0">
                        <thead>
                            <th>定单编号</th>
                            <th>年化利率</th>
                            <th>放款时间</th>
                            <th>还款时间</th>
                            <th>融资天数</th>
                            <th>已付利息</th>
                            <th>已付本金</th>
                        </thead>
                        <tbody v-for="item in dataMsg">
                            <th>{{item.applyNo}}</th>
                            <th>{{item.loanRate}}</th>
                            <th>{{item.loanDate}}</th>
                            <th>{{item.repayDate}}</th>
                            <th>{{item.loanDays}}</th>
                            <th>{{item.reypayInterestAmt}}</th>
                            <th>{{item.reypayPrincipalAmt}}</th>
                        </tbody>
                        
                    </table>
                    <div class="upDownload" v-if="downLoad">
                        <img src="./img/download.png"/>
                        <span>下载</span>
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
    import {getResult,timestampToTime,toThousands} from '../../api/common'
    export default {
        name: "repayment",
        data(){
            return{
                islogin:true,
                downLoad:false,
                dataMsg:[]
            }
        },
        components:{
            "v-header": header,
            "v-footer": footer
        },
        mounted(){

            this.$refs.myuser.style.minHeight = window.innerHeight - 205 + 'px'

            getResult('get',`/repay/v1/repay/flow/${this.$route.query.id}`)
            .then(data=>{
                if(data.result == 0){
                    console.log(data.data)
                    this.dataMsg = data.data.repayFlowDTOList
                    if(this.dataMsg && this.dataMsg.length>0){
                        this.dataMsg.forEach((value,index,arr)=>{
                            if(value.loanDate == null){
                              value.loanDate = ''
                            }else{
                                value.loanDate = timestampToTime(value.loanDate);
                            }
                            if(value.repayDate == null){
                              value.repayDate = ''
                            }else{
                                value.repayDate = timestampToTime(value.repayDate);
                            }

                            if(value.reypayInterestAmt == null){
                              value.reypayInterestAmt = '0.00'
                            }else {
                                value.reypayInterestAmt   = toThousands(value.reypayInterestAmt)
                            }
                            if(value.reypayPrincipalAmt == null){
                              value.reypayPrincipalAmt = '0.00'
                            }else {
                                value.reypayPrincipalAmt = toThousands(value.reypayPrincipalAmt)
                            }
                            if(value.loanRate ==null){
                              value.loanRate = ''
                            }else {
                                value.loanRate = `${toThousands(((value.loanRate)*10000)/100)}%`
                            }
                        })
                    }
                }
            })
        }
    }
</script>

<style scoped lang="scss">
@import "../../assets/sass/repayment";
</style>
