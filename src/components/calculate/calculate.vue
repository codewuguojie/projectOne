<template>
  <div class="calculate">
    <v-header :isLogin="islogin"></v-header>

    <div ref="myuser" class="content">
        <div class="position">
            <img src="./img/position.png"/>
            <span>当前位置 > 首页 > 我的融资 > 还款计算</span>
        </div>
        <div class="process">
            <div class="L-top">
                <img src="./img/apply.png"/>
                <span>还款计算</span>
            </div>
        </div>
        <div class="calculateDetail">
            <div class="calculateDetailTop">
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
                  <div class="right">
                    <span>待还本金:</span>
                    <input type="text" v-model="unpayPrincipalAmt">
                  </div>
                </div>
                <div class="calculateMsg">
                  <div class="left">
                      <span>待还利息:</span>
                      <input type="text" v-model="unpayInterestAmt">
                  </div>
                  <div class="right">
                    <span>待还滞纳金:</span>
                    <input type="text" v-model="unpayLateAmt">
                  </div>
                </div>
                <div class="calculateMsg">
                  <div class="left">
                      <span>融资天数:</span>
                      <input type="text" v-model="financeDays">
                  </div>
                  <div class="right">
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
                    <div class="right">
                      <span>本次还款利息:</span>
                      <input type="text" v-model="reypayInterestAmt">
                    </div>
                  </div>
                  <div class="calculateMsg">
                    <div class="left">
                        <span>本次还款滞纳金:</span>
                        <input type="text" v-model="reypayLateAmt">
                    </div>
                  </div>
            </div>
        </div>
    </div>


    <!-- 动画demo
    <button @click="show=true">出现</button>
    <button @click="show=false">消失</button>
    <transition name="side">
        <div class="side-box" v-show="show">哈哈哈</div>
    </transition> -->

    <v-footer></v-footer>


  </div>
</template>
<script>
  import header from "@/components/base/header/header";
  import footer from "@/components/base/footer/footer";
  import Vue from 'vue'
  import ElementUI from 'element-ui';
  import {getResult, toThousands} from "../../api/common";
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default {
    components: {
      "v-header": header,
      "v-footer": footer
    },
    data(){
      return{

        show:false, 

        islogin: true,
        value1:'',
        payableAmt:'',
        unpayPrincipalAmt:'',
        unpayInterestAmt:'',
        unpayLateAmt:'',
        financeDays:'',
        loanRate:'',

        huanKuan:'',
        reypayPrincipalAmt:'',
        reypayInterestAmt:'',
        reypayLateAmt:''

      }
    },
    methods:{

        keyup(event) {
            this.huanKuan = this.huanKuan.replace(/[^\d]/g, '')
            this.huanKuan = this.huanKuan.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        },

        jisuan1(){
            getResult('post','/repay/v1/repay/calc_repayable',{
                loanId:this.$route.query.id,
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
        },
        jisuan2(){
            getResult('post','/repay/v1/repay/calc_repay',{
                loanId:this.$route.query.id,
                repayAmt:this.huanKuan,
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
                }
            })
        }
    },
    mounted(){
        this.$refs.myuser.style.minHeight = window.innerHeight - 195 + 'px'
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/sass/calculate";
</style>
