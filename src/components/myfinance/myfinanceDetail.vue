<template>
    <div class="financeDetial-box">
        <v-header :title="titleName" :isLogin="islogin"></v-header>
        <!--<div class="banner-finance">

            <div class="myfinance">
                <ul class="one">
                    <li class="left"><p>总额度</p><span class="show"><em class="money">6,000,000</em><em class="danwei">.00元</em></span></li>
                    <li class="left"><p>已用额度</p><span class="show"><em class="money">2,000,000</em><em class="danwei">.00元</em></span></li>
                    <li class="left"><p>可用额度</p><span class="show"><em class="money">4,000,000</em><em class="danwei">.00元</em></span></li>
                </ul>
                <div class="btn" >
                    <div class="shenzi left">申请融资</div>
                    <div class="huankuan left">我要还款</div>
                </div>
            </div>
        </div>
        <div class="myfinance-empty">
            <div class="detail">
                <div class="myfinance-list">
                    <div class="type">
                        <span>融资类型</span>
                        <select>
                            <option>应收转款融资</option>
                            <option>订单融资</option>
                        </select>
                        <button class="find">查询</button>
                        <div class="list">
                            <table cellspacing="0">
                                <tr>
                                    <th>融资类型</th>
                                    <th>审核状态</th>
                                    <th>借款金额（元）</th>
                                    <th>年化利率</th>
                                    <th>放款日期</th>
                                    <th>融资到期日</th>
                                    <th>还款日期</th>
                                    <th>已还金额（元）</th>
                                    <th>还款详情</th>
                                </tr>
                                <tr>
                                    <td>应收账款融资</td>
                                    <td>审核中</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>订单融资</td>
                                    <td>审核通过</td>
                                    <td>1，100,800.00</td>
                                    <td>5%</td>
                                    <td>2017-06-01</td>
                                    <td>2019-06-01</td>
                                    <td>2018-08-01</td>
                                    <td>800.00</td>
                                    <td>
                                        <a>查看</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                     </div>
                </div>
            </div>
        </div>-->
        <!--我的融资详情-->
            <div class="my">
                <h3>-&nbsp还款详情&nbsp-</h3>
                <div class="bottom">
                    <div class="leixing">
                        <span>融资类型：</span><span class="type">{{financeType}}</span>
                        <span class="zhuangtai">{{approveStatus}}</span>
                    </div>
                    <div class="jine">
                        <ul>
                            <li class="left"><span>借款金额：</span><span>{{loanAmt}}</span></li>
                            <li class="left"><span>融资到期日：</span><span>{{dueDate}}</span></li>
                            <li class="left"><span>年化利率：</span><span>{{loanRate}}</span></li>
                            <li class="left"><span>滞纳金率：</span><span>{{overdueRate}}</span></li>
                        </ul>
                    </div>
                    <table cellspacing="0">
                        <tr style="background: #f6f6f6;">
                            <th>放款日期</th>
                            <th>还款日期</th>
                            <th>融资天数（天）</th>
                            <th>已还本金（元）</th>
                            <th>已还利息（元）</th>
                            <th>已还滞纳金（元）</th>
                            <th>本次还款金额（元）</th>
                        </tr>
                        <tr v-for="list in lists">
                            <td>{{list.loanDate}}</td>
                            <td>{{list.repayDate}}</td>
                            <td>{{list.loanDays}}</td>
                            <td>{{list.reypayPrincipalAmt}}</td>
                            <td>{{list.reypayInterestAmt}}</td>
                            <td>{{list.reypayLateAmt}}</td>
                            <td>{{list.totalRepayAmt}}</td>
                        </tr>
                    </table>
                </div>
                <button class="fanhui" @click="goBack">返回</button>
            </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
// import './bootstrap-select/dist/js/bootstrap-select.min.js'
import { hostUrl, getResult,timestampToTime,toThousands } from "api/common"; //导入api
export default {
  components: {
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      titleName: "",
      islogin: true,
        approveStatus:'',
        dueDate:'',
        financeType:'',
        loanAmt:'',
        loanRate:'',
        overdueRate:'',
        lists:'',/*
        userId:''*/
    };
  },


  methods: {
      goBack(){
          this.$router.push({path:'/myfinance'})
      }
  },
  mounted() {
      //console.log(this.$route.query.id)
      let _this = this
      /*getResult('get','/api/user/v1/one')
          .then((res)=>{
              _this.userId = res.data.id;
          })*/

      let loanId = {
          financeType:this.$route.query.id
      }

      //console.log(loanId)

        getResult('get',`/loan/v1/${loanId.financeType}`)
            .then((msg)=>{
                //console.log(111)
                //console.log(msg.data)
                _this.approveStatus=msg.data.approveStatus
                _this.dueDate=timestampToTime(msg.data.dueDate)
                _this.financeType=msg.data.financeType
                _this.loanAmt=toThousands(msg.data.loanAmt)

                _this.loanRate=`${((msg.data.loanRate*10000)/100).toFixed(2)}%`
                _this.overdueRate=`${((msg.data.overdueRate*10000)/100).toFixed(2)}%`
            })
        getResult('get',`/repay/v1/flow/${loanId.financeType}`)
            .then((msg)=>{
                //console.log(msg.data)
                _this.lists = msg.data;
                if(_this.lists.length>0){
                    if(_this.lists && _this.lists.length>0){
                        _this.lists.forEach((value,index,arr)=>{
                            if(value.loanDate == null){
                                //console.log(111)
                                value.loanDate=''
                            }else {
                                //console.log(222)
                                value.loanDate = timestampToTime(value.loanDate)
                            }
                            if(value.repayDate == null) {
                                //console.log(111)
                                value.repayDate = ''
                            }else {
                                //console.log(333)
                                value.repayDate = timestampToTime(value.repayDate)
                            }
                            if(value.reypayLateAmt == null){
                                //console.log(111)
                                value.reypayLateAmt = `0.00`
                            }else {
                                //console.log(444)
                                value.reypayLateAmt = toThousands(value.reypayLateAmt)
                            }
                            if(value.reypayPrincipalAmt == null){
                                //console.log(111)
                                value.reypayPrincipalAmt=`0.00`
                            }else{
                                //console.log(555)
                                value.reypayPrincipalAmt = toThousands(value.reypayPrincipalAmt);
                            }
                            if(value.reypayInterestAmt == null){
                                value.reypayInterestAmt = '0.00'
                            }else {
                                value.reypayInterestAmt = toThousands(value.reypayInterestAmt)
                            }
                            if( value.totalRepayAmt == null){
                                //console.log(111)
                                value.totalRepayAmt=`0.00`
                            }else {
                                //console.log(666)
                                value.totalRepayAmt =  toThousands(value.totalRepayAmt);
                            }
                        })
                    }

                }
            })



  }
};
</script>

<style scoped type="text/css" lang="less">
/*.banner-finance {
  margin: 0 auto;
  width: 100%;
  height: 440px;
   background-image: linear-gradient(to right , #386da2, #58a3c7);
}
.myfinance-empty {
    width: 100%;
    height: 710px;
    background: #fbfdff;
    .detail{
        position: relative;
        width: 1200px;
        margin:0 auto;
        .myfinance-list {
            position: absolute;
            width: 1200px;
            height: 500px;
            left: 0;
            top: -89px;
            background: #fff;
            .list{
                padding-top:40px;
            }
        }
  }

}*/
</style>
