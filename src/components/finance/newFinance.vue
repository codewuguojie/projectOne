<template>
    <div class="newFinance">
        <v-header :isLogin="islogin"></v-header>
        <div class="box" ref="myuser">
            <div class="position">
                <img src="./img/position.png"/>
                <span>当前位置 > 首页 > 我的融资</span>
            </div>

            <div class="myLimit">
                <div class="L-top">
                    <img src="./img/limit.png"/>
                    <span>我的额度</span>
                </div>
                <div class="limit-show">
                    <div class="limit-show-msg">
                        <p class="yyed">已用额度(元)</p>
                        <p class="money">{{usedAmt}}</p>
                    </div>
                    <div class="limit-show-msg">
                        <p class="kyed">可用额度(元)&nbsp;&nbsp;&nbsp;(以提款协议金额为准)</p>
                        <p class="money">{{remainAmt}}</p>
                    </div>
                    <div class="limit-show-msg" style="cursor: pointer;" @click="find()">
                        <p class="overdue">
                            {{`您有${conunt}笔融资已逾期，请尽快还款，如有疑问请联系你的客户经理。`}}
                        </p>
                    </div>
                </div>
                <!-- <div class="finance">
                    <div class="finance-box">
                        <h3>小米有品融资</h3>
                        <p class="title-f">适用于企业在小米有品平台已产生的销售净流水的应收账款融资</p>
                        <p class="btn-f" @click="goApply1()">立即申请</p>
                    </div>
                    <div class="finance-box">
                        <h3>小米商城融资</h3>
                        <p class="title-f">适用于企业在小米商城已产生的应收账款融资或收到小米订单产生的订单融资</p>
                        <p class="btn-f" @click="goApply2()">立即申请</p>
                    </div>
                    <div class="finance-box">
                        <h3>其他融资</h3>
                        <p class="title-f">适用于企业的其他融资需求，包括在其他平台渠道贸易相关的供应链融资</p>
                        <p class="btn-f" @click="goApply3()">立即申请</p>
                    </div>
                </div> -->
            </div>

            <div class="order">
                <div class="o-top">
                    <img src="./img/coder.png"/>
                    <span>融资订单</span>
                </div>
                <div class="state">
                    <div :class="{active:active == index}" class="btn" v-for="(item,index) in items" @click="tab(index)">
                        {{item}}
                    </div>
                </div>
                <div class="table">
                    <table cellspacing="0">
                        <thead>
                            <th>申请日期</th>
                            <th>申请金额</th>
                            <th>融资类型</th>
                            <th>年化利率</th>
                            <th>放款日</th>
                            <th>到期日</th>
                            <th>状态</th>
                            <th></th>
                        </thead>
                        <tbody v-for="(item,index) in allArr" :class="{red:item.status === '逾期' && findShow}">
                            <th>{{item.applyDate}}</th>
                            <th>{{item.financeAmt}}</th>
                            <th>{{item.financeType}}</th>
                            <th>{{item.loanRate}}</th>
                            <th>{{item.loanDate}}</th>
                            <th>{{item.dueDate}}</th>
                            <th style="color:#ff942a" v-if="item.status=='审核中'">{{item.status}}</th>
                            <th style="color:#ee2323" v-if="item.status=='审核未通过' || item.status=='逾期'">{{item.status}}</th>
                            <th style="color:#2ec647" v-if="item.status=='审核通过待放款' || item.status=='待还款' || item.status=='已结清'">{{item.status}}</th>
                            <th>
                                <a @click="goProtocal(item)" v-if="item.status == '审核通过待放款'">签署提款协议</a>
                                <a @click="goCalculate(item)" v-if="item.status == '待还款'">还款试算</a>
                                <a @click="goRepay(item)" v-if="item.status == '待还款'">查看结算单</a>
                            </th>
                        </tbody>
                    </table>
                    
                </div>
            </div>

        </div>
        <v-footer></v-footer>
        

        <transition name="jisuan">
            <div class="calculateDetail" v-show="show">
                <div class="jsuanBox">
                    <div class="calculateDetailTop">
                        <div class="shanchuBox"> 
                            <img class="shanchu" src="./img/delete.png" alt="" @click="show=false"> 
                        </div>
                        <div class="calculateMsg">
                            <div class="left">
                                <span>还款日期:</span>
                                <div class="block">
                                    <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                            </div>
                            <div class="right">
                                <div class="calculateBtn" @click="jisuan1()">
                                    <img src="./img/calculate.png">试算本息
                                </div>
                            </div>
                        </div>
                        <div class="calculateMsg">
                            <div class="left">
                                <span>待还总金额:</span>
                                <input type="text" v-model="payableAmt">
                            </div>
                            <div class="left">
                                <span>待还本金:</span>
                                <input type="text" v-model="unpayPrincipalAmt">
                            </div>
                            <div class="left">
                                <span>待还利息:</span>
                                <input type="text" v-model="unpayInterestAmt">
                            </div>
                        </div>
                        <div class="calculateMsg">
                            <div class="left">
                                <span>待还滞纳金:</span>
                                <input type="text" v-model="unpayLateAmt">
                            </div>
                            <div class="left">
                                <span>融资天数:</span>
                                <input type="text" v-model="financeDays">
                            </div>
                            <div class="left">
                                <span>年化利率:</span>
                                <input type="text" v-model="loanRate">
                            </div>
                        </div>
                    </div>
                    <div class="calculateDetailBottom">
                        <div class="calculateMsg">
                            <div class="left">
                                <span>本次还款:</span>
                                <input type="text" v-model="huanKuan"  @keyup="keyup()">
                            </div>
                            <div class="right">
                                <div class="calculateBtn" @click="jisuan2()">
                                    <img src="./img/calculate.png">试算本次还款
                                </div>
                            </div>
                        </div>
                        <div class="calculateMsg">
                            <div class="left">
                                <span>本次还款本金:</span>
                                <input type="text" v-model="reypayPrincipalAmt">
                            </div>
                            <div class="left">
                                <span>本次还款利息:</span>
                                <input type="text" v-model="reypayInterestAmt">
                            </div>
                            <div class="left">
                                <span>本次还款滞纳金:</span>
                                <input type="text" v-model="reypayLateAmt">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        
        <!-- 申请授信状态提示 -->
        <v-modal :isShow="resultShow" :width="640" @close="resultShow=false">
            <p>{{resultMsg}}</p>
        </v-modal>
    </div>
</template>

<script>
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import modal from "@/components/base/modal/modal";
    import {Toast} from 'mint-ui'
    import {getResult,timestampToTime,toThousands} from "../../api/common";
    export default {
        name: "newFinance",
        components:{
            "v-header": header,
            "v-footer": footer,
            "v-modal": modal
        },
        data(){
            return{

                show:false,

                islogin:true,
                remainAmt:'',
                usedAmt:'',
                items:[
                    '全部',
                    '审核中',
                    '审核通过待放款',
                    '审核没通过',
                    '待还款',
                    '已结清',
                    '逾期'
                ],
                active:0,
                resultShow:false,
                resultMsg:'',
                allArr:[],
                conunt:0,
                findShow:false,

                getId:0,
                value1:'',
                payableAmt:'',
                unpayPrincipalAmt:'',
                unpayInterestAmt:'',
                unpayLateAmt:'',
                financeDays:'',
                loanRate:'',

                huanKuan:'',
                repayMoney:0,
                reypayPrincipalAmt:'',
                reypayInterestAmt:'',
                reypayLateAmt:''

            }
        },
        methods:{

            find(){
                getResult('get','/loan/v1/loan/apply_list/-1')
                .then(data=>{
                    if(data.result == 0){
                        console.log(data.data)
                        this.allArr = data.data
                        if(this.allArr && this.allArr.length>0){
                            this.allArr.forEach((value,index,arr)=>{
                                if(value.applyDate  == null){
                                value.applyDate  = ''
                                }else{
                                    value.applyDate  = timestampToTime(value.applyDate);
                                }
                                if(value.loanDate   == null){
                                value.loanDate   = ''
                                }else{
                                    value.loanDate   = timestampToTime(value.loanDate);
                                }
                                if(value.dueDate   == null){
                                value.dueDate   = ''
                                }else{
                                    value.dueDate   = timestampToTime(value.dueDate );
                                }
                                if(value.loanRate ==null){
                                value.loanRate = ''
                                }else {
                                    value.loanRate = `${toThousands(((value.loanRate)*10000)/100)}%`
                                }
                                if(value.financeAmt  == null){
                                value.financeAmt  = '0.00'
                                }else {
                                    value.financeAmt  = toThousands(value.financeAmt )
                                }
                                if(value.status  == '逾期'){
                                    this.findShow = true
                                    console.log(this.findShow)
                                }
                            })
                        }
                    }
                })
            },

            tab(index){
                this.active = index
                getResult('get',`/loan/v1/loan/apply_list/${index - 1}`)
                .then(data=>{
                    if(data.result == 0){
                        //console.log(data.data)
                        this.allArr = data.data
                        if(this.allArr!=null && this.allArr.length>0){
                            this.allArr.forEach((value,index,arr)=>{
                                if(value.applyDate  == null){
                                value.applyDate  = ''
                                }else{
                                    value.applyDate  = timestampToTime(value.applyDate);
                                }
                                if(value.loanDate   == null){
                                value.loanDate   = ''
                                }else{
                                    value.loanDate   = timestampToTime(value.loanDate);
                                }
                                if(value.dueDate   == null){
                                value.dueDate   = ''
                                }else{
                                    value.dueDate   = timestampToTime(value.dueDate );
                                }
                                if(value.loanRate ==null){
                                value.loanRate = ''
                                }else {
                                    value.loanRate = `${toThousands(((value.loanRate)*10000)/100)}%`
                                }
                                if(value.financeAmt  == null){
                                value.financeAmt  = '0.00'
                                }else {
                                    value.financeAmt  = toThousands(value.financeAmt )
                                }
                            })
                        }
                    }else{
                        this.allArr = []
                    }
                })
            },
            goRepay(item){
                this.$router.push({path:'repayment',query:{id:item.loanId}})
            },
            goApply1(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    this.resultShow = true
                    this.resultMsg = '您提交的资料正在审核中，请耐心等待'
                }else if(this.state == 1){
                    this.$router.push({path:'apply',query:{index:1}})
                }else if(this.state == 2){
                    this.resultShow = true
                    this.resultMsg = '对不起，您提交的资料未通过审核'
                }
                
            },
            goApply2(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    this.resultShow = true
                    this.resultMsg = '您提交的资料正在审核中，请耐心等待'
                }else if(this.state == 1){
                this.$router.push({path:'apply',query:{index:2}})
                }else if(this.state == 2){
                    this.resultShow = true
                    this.resultMsg = '对不起，您提交的资料未通过审核'
                }
            },
            goApply3(){
                if(this.state == 4 || this.state == 3){
                    this.$router.push({path:'myHome/data'})
                }else if(this.state == 0){
                    this.resultShow = true
                    this.resultMsg = '您提交的资料正在审核中，请耐心等待'
                }else if(this.state == 1){
                this.$router.push({path:'apply',query:{index:3}})
                }else if(this.state == 2){
                    this.resultShow = true
                    this.resultMsg = '对不起，您提交的资料未通过审核'
                }
            },


            keyup(event) {
            this.huanKuan = this.huanKuan.replace(/[^\d]/g, '')
            this.huanKuan = this.huanKuan.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        },

        jisuan1(){
            if(!this.value1){
                Toast('请先选择日期')
            }else{
                getResult('post','/repay/v1/repay/calc_repayable',{
                    loanId:this.getId,
                    repayDate:this.value1
                })
                .then(data=>{
                    if(data.result == 0){
                        if(data.data.payableAmt != null){
                            this.payableAmt = toThousands(data.data.payableAmt)
                        }
                        if(data.data.unpayPrincipalAmt!=null){
                            this.unpayPrincipalAmt = toThousands(data.data.unpayPrincipalAmt)
                        }
                        if(data.data.unpayInterestAmt!=null){
                            this.unpayInterestAmt = toThousands(data.data.unpayInterestAmt)
                        }
                        if(data.data.unpayLateAmt!=null){
                            this.unpayLateAmt = toThousands(data.data.unpayLateAmt)
                        }
                        if(data.data.financeDays!=null){
                            this.financeDays = data.data.financeDays
                        }
                        if(data.data.loanRate!=null){
                            this.loanRate = toThousands((data.data.loanRate*10000)/100) + '%'
                        }
                    }
                })
            }
        },
        jisuan2(){
            if(!this.value1){
                Toast('请先选择日期')
            }else if(!this.huanKuan){
                Toast('请输入本次还款金额')
            }else{
                console.log(Number(this.huanKuan.replace(/,/g,'')))
                this.repayMoney = Number(this.huanKuan.replace(/,/g,''))
                getResult('post','/repay/v1/repay/calc_repay',{
                    loanId:this.getId,
                    repayAmt:this.repayMoney,
                    repayDate:this.value1
                })
                .then(data=>{
                    if(data.result == 0){
                        if(data.data.reypayPrincipalAmt!=null){
                            this.reypayPrincipalAmt = toThousands(data.data.reypayPrincipalAmt)
                        }
                        if(data.data.reypayInterestAmt!=null){
                            this.reypayInterestAmt = toThousands(data.data.reypayInterestAmt)
                        }
                        if(data.data.reypayLateAmt!=null){
                            this.reypayLateAmt = toThousands(data.data.reypayLateAmt)
                        }
                    }else{
                        Toast(data.msg)
                    }
                })
            }
            
        },


            goCalculate(item){
                //alert(item.loanId)
                this.show = true
                this.getId = item.loanId
            },
            goProtocal(item){
                this.$router.push({path:'protocal',query:{id:item.loanId}})
            }
        },
        mounted(){

            this.$refs.myuser.style.minHeight = window.innerHeight - 205 + 'px'

            getResult('get','/loan/v1/account')
            .then(data=>{
                if(data.result == 0){
                    if(data.data.remainAmt == 0){
                        this.remainAmt = '0.00'
                    }else{
                        this.remainAmt = toThousands(data.data.remainAmt)
                    }
                    if(data.data.usedAmt == 0){
                        this.usedAmt = '0.00'
                    }else{
                        this.usedAmt = toThousands(data.data.usedAmt)
                    }
                }
            })

            getResult('get','/enterprise/v1/basic')
            .then(data=>{
                if(data.result == 0){
                    this.state = data.data.creditStatus
                    //console.log(this.state)
                }
            })

            getResult('get','/loan/v1/loan/apply_list/-1')
            .then(data=>{
                if(data.result == 0){
                    //console.log(data.data)
                    this.allArr = data.data
                    if(this.allArr && this.allArr.length>0){
                        this.allArr.forEach((value,index,arr)=>{
                            if(value.applyDate  == null){
                              value.applyDate  = ''
                            }else{
                                value.applyDate  = timestampToTime(value.applyDate);
                            }
                            if(value.loanDate   == null){
                              value.loanDate   = ''
                            }else{
                                value.loanDate   = timestampToTime(value.loanDate);
                            }
                            if(value.dueDate   == null){
                              value.dueDate   = ''
                            }else{
                                value.dueDate   = timestampToTime(value.dueDate );
                            }
                            if(value.loanRate ==null){
                              value.loanRate = ''
                            }else {
                                value.loanRate = `${toThousands(((value.loanRate)*10000)/100)}%`
                            }
                            if(value.financeAmt  == null){
                              value.financeAmt  = '0.00'
                            }else {
                                value.financeAmt  = toThousands(value.financeAmt )
                            }
                            if(value.status  == '逾期'){
                                this.conunt+=1
                                console.log('输出count')
                                console.log(this.conunt)
                            }
                        })
                    }
                }else{
                    this.allArr = []
                }
            })

        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/sass/newFinance";
</style>
