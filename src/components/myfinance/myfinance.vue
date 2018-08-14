<template>
    <div class="myfinance-box">
        <v-header :title="titleName" :isLogin="islogin"></v-header>


        <div class="banner-finance">

            <div class="myfinance">
                <ul class="one">
                    <li class="left"><span class="show"><em class="money">{{creditAmt}}<em class="danwei">元</em></em></span><p>总额度</p></li>
                    <li class="left"><span class="show"><em class="money">{{usedAmt}}<em class="danwei">元</em></em></span><p>已用额度</p></li>
                    <li class="left"><span class="show"><em class="money">{{remainAmt}}<em class="danwei">元</em></em></span><p>可用额度</p></li>
                </ul>
                <div class="btn" >
                    <div class="shenzi left" @click="goFinance">申请融资</div>
                    <div class="huankuan left" @click="soh">我要还款</div>
                </div>
            </div>
        </div>


        <div class="myfinance-empty">
            <div class="detail">
                <div class="myfinance-list">
                    <div class="type">
                        <span>融资类型</span>
                        <select v-model="selected">
                            <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
                        </select>
                        <button class="find" @click="selectindex">查询</button>
                        <div class="list">
                            <table cellspacing="0">
                                <tr>
                                    <th>放款日期</th>
                                    <th>放款金额（元）</th>
                                    <th>融资类型</th>
                                    <th>状态</th>
                                    <th>年化利率</th>
                                    <th>已还金额（元）</th>
                                    <th>待还金额（元）</th>
                                    <th>还款日期</th>
                                    <th>融资到期日</th>
                                    <th>还款详情</th>
                                </tr>
                                <tr v-for="list in lists">
                                    <td>{{list.loanDate}}</td>
                                    <td>{{list.loanAmt}}</td>
                                    <td>{{list.financeType}}</td>
                                    <td>{{list.approveStatus}}</td>
                                    <td>{{list.loanRate}}</td>
                                    <td>{{list.repayAmt }}</td>
                                    <td>{{list.payableAmt  }}</td>
                                    <td>{{list.rePayDate }}</td>
                                    <td>{{list.dueDate}}</td>
                                    <td>
                                        <a :class="{tiaozhuan:list.aaa}" @click="goDetail(list)">查看</a>
                                    </td>
                                </tr>



                            </table>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <div class="hezi" v-show="ishow"></div>
        <div class="background" ref="hezi" v-show="ishow">
            <div class="repay" v-show="ishow">
                <p>还款</p>
                <p>请还款至以下账户</p>
                <div class="msg">
                    <span>公司名称</span><span>上海乐盈资产管理有限公司</span>
                </div>
                <div class="msg">
                    <span>开户银行</span><span>上海银行股份有限公司虹口支行</span>
                </div>
                <div class="msg">
                    <span>账&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号</span><span>03003402087</span>
                </div>
                <div class="msg" style="font-size: 12px; color: #bbb;">
                    如有疑问请联系您的客户经理或致电&nbsp;&nbsp;021-20702568&nbsp;/&nbsp;021-20702569
                </div>
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
// import './bootstrap-select/dist/js/bootstrap-select.min.js'
import { hostUrl, getResult,timestampToTime,toThousands } from "api/common"; //导入api
//import moment from "assets/js/comment";//导入comment.js
export default {
  components: {
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      titleName: "",
      islogin: true,
      creditAmt:'',
      remainAmt:'',
      usedAmt:'',
      lists:'',
      selected:'-1',
      ishow:false,
      options:[
          {text:'查看全部',value:-1},
          {text:'应收账款融资',value:0},
          {text:'订单融资',value:1}
      ]
    };
  },
  methods: {
      goDetail(list){
          //console.log(list.loanId)
          if((list.loanId != null && list.loanId != undefined) && (list.approveStatusCode == 4 || list.approveStatusCode == 5)){
              this.$router.push({path:`/myfinance/myfinanceDetail?id=${list.loanId}`/*,params:{id:}*/})
          }
      },
      soh(){
          this.ishow = !this.ishow
          //console.log(this.ishow)
      },
      goFinance(){
          getResult('get','/enterprise/v1/particular')
              .then((msg)=>{
                  if(msg.result != 0){
                      //console.log("跳转申请授信")
                      this.$router.push({path:'/home/data'})
                  }else {
                      this.$router.push({ path: "/myfinance/finance2" });
                  }
              })
      },
      selectindex(){
          //console.log(this.selected)
          let postData = {
              financeType:this.selected
          };
          getResult('get',`/loan/v1/${postData.financeType}/list`)
              .then((msg)=>{
                  //console.log(msg.data)
                  this.lists=msg.data
                  if(this.lists && this.lists.length>0){
                      this.lists.forEach((value,index,arr)=> {
                          if(value.loanAmt == null){
                              value.loanAmt = '0.00'
                          }else {
                              value.loanAmt = toThousands(value.loanAmt)
                          }
                          if(value.repayAmt == null){
                              value.repayAmt = '0.00'
                          }else {
                              value.repayAmt = toThousands(value.repayAmt)
                          }
                          if(value.payableAmt == null || value.payableAmt == 0){
                              value.payableAmt = '0.00'
                          }else {
                              value.payableAmt = toThousands(value.payableAmt)
                          }
                          if(value.loanDate == null){
                              value.loanDate = ''
                          }else{
                              value.loanDate = timestampToTime(value.loanDate);
                          }
                          if(value.dueDate == null){
                              value.dueDate = ''
                          }  else {
                              value.dueDate = timestampToTime(value.dueDate);
                          }
                          if(value.rePayDate == null) {
                              value.rePayDate = ''
                          } else{
                              value.rePayDate = timestampToTime(value.rePayDate)
                          }
                          if(value.loanRate ==null){
                              value.loanRate = ''
                          }else {
                              value.loanRate = `${toThousands(((value.loanRate)*10000)/100)}%`
                          }
                          if((value.loanId) && (value.approveStatusCode == 4 || value.approveStatusCode == 5)){
                              //console.log('id是空的')
                              value.aaa=false;
                          }else {
                              value.aaa=true;
                          }
                      })
                  }

              });
      }
  },
    /*filters:{
      dateFrm:function (el) {
          return moment(el).format("YYYY-MM-DD HH:mm:ss")
      }
    },*/
  mounted() {

      //console.log(`这个是${window.innerHeight}`)
      this.$refs.hezi.style.height = `${window.innerHeight}px`
      
      
      let cur = document.querySelectorAll("div[class='myfinance-box']");
	      console.log(cur);
	      let curHeight = cur[0].clientHeight;
	      console.log(curHeight);
	      let curTop = cur[0].scrollTop
	      console.log(curTop)

      let _this = this;/*
      _this.creditAmt="";
      _this.remainAmt="";
      _this.usedAmt="";
      _this.lists='';*/
    getResult('get','/loan/v1/account')
        .then((msg)=>{
            //console.log(111)
            //console.log(msg.data)
            //console.log(typeof (msg.data.creditAmt))
            if(msg){
                _this.creditAmt=msg.data.creditAmt<0?'0.00':toThousands(msg.data.creditAmt);
                _this.remainAmt=msg.data.remainAmt<0?'0.00':toThousands(msg.data.remainAmt);
                _this.usedAmt=msg.data.usedAmt<0?'0.00':toThousands(msg.data.usedAmt);
                //console.log(typeof (_this.creditAmt))
            }else {
                _this.creditAmt='0.00';
                _this.remainAmt='0.00';
                _this.usedAmt='0.00';
            }

        });
      let postData = {
          leixing:_this.selected
      };
      getResult('get',`/loan/v1/${postData.leixing}/list`)
          .then((msg)=>{
              //console.log(msg.data)
              _this.lists=msg.data
              //console.log(msg.data[0].loanDate)
              if(_this.lists && _this.lists.length>0){
                  //console.log(111)
                  _this.lists.forEach((value,index,arr)=>{
                      //console.log(value.loanRate)
                      //console.log(444)
                      //console.log(`hhhh${typeof value.payableAmt}`)
                      //console.log(typeof value.loanAmt)
                      if(value.loanAmt == null){
                          value.loanAmt = '0.00'
                      }else {
                          value.loanAmt = toThousands(value.loanAmt)
                      }
                      if(value.repayAmt == null){
                          value.repayAmt = '0.00'
                      }else{
                          value.repayAmt = toThousands(value.repayAmt)
                      }

                      if(value.payableAmt == null){
                          value.payableAmt = '0.00'
                      }else  if(value.payableAmt == 0){
                          value.payableAmt = '0.00'
                      }else {
                          value.payableAmt = toThousands(value.payableAmt)
                      }

                      if(value.loanDate == null){
                          value.loanDate = ''
                      }else{
                          value.loanDate = timestampToTime(value.loanDate);
                      }
                      if(value.dueDate == null){
                          value.dueDate = ''
                      }  else {
                          value.dueDate = timestampToTime(value.dueDate);
                      }
                      if(value.rePayDate == null) {
                          value.rePayDate = ''
                      } else{
                          value.rePayDate = timestampToTime(value.rePayDate)
                      }
                      if(value.loanRate ==null){
                          value.loanRate = ''
                      }else {
                          value.loanRate = `${((value.loanRate * 10000)/100).toFixed(2)}%`
                      }
                      /**/
                      if((value.loanId) && (value.approveStatusCode == 4 || value.approveStatusCode == 5)){
                          //console.log('nihao')
                          value.aaa=false;
                          //console.log(value.aaa)
                      }else {
                          value.aaa=true;
                      }
                  })
              }

          });
  }
};
</script>

<style scoped type="text/css" lang="less">
.banner-finance {
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

}
</style>
