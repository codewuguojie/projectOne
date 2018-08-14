<template>
<div class="user">
    <v-header :isLogin="islogin"></v-header>

    <div ref="myuser" class="content">
        <div class="position">
            <img src="./img/position.png"/>
            <span>当前位置 ： 账户中心</span>
        </div>
        <div class="user-set">
            <div class="left">
                <ul>
                    <li @click="tab(index)" v-for="(item,index) in items"><p :class="{active:myIndex==index}"><i :class="item.class"></i>{{item.name}}</p></li>
                </ul>
            </div>
            <div v-if="myIndex===0" class="right">
                <div class="r-top">
                    <p @click="tap(index)" v-for="(item,index) in tabs" :class="{tap:youIndex == index}">{{item}}</p>
                </div>
                <!--基本信息-->
                <div v-if="youIndex===0" class="r-bottom">
                    <div class="msg">
                        <div class="name">手机号码</div>
                        <div class="cont" v-if="!inputShow">{{userPhone}}</div>
                        <input v-if="inputShow" v-model="userPhone" type="text" placeholder="请输入手机号" readonly="readonly" style="color:#999"/>
                    </div>
                    <div class="msg">
                        <div class="name">公司名称</div>
                        <div class="cont" v-if="!inputShow">{{conpanyName}}</div>
                        <input v-if="inputShow" v-model="conpanyName" type="text" placeholder="请输入公司名称"/>
                    </div>
                    <div class="msg">
                        <div class="name">公司代码</div>
                        <div class="cont" v-if="!inputShow">{{conpanyCode}}</div>
                        <input v-if="inputShow" v-model="conpanyCode" type="text" placeholder="请输入公司代码"/>
                    </div>
                    <div class="msg">
                        <div class="name">企业联系人</div>
                        <div class="cont" v-if="!inputShow">{{userName}}</div>
                        <input v-if="inputShow" v-model="userName" type="text" placeholder="请输入企业联系人"/>
                    </div>
                    <div class="msg">
                        <div class="name">公司电话</div>
                        <div class="cont" v-if="!inputShow">{{conpanyPhone}}</div>
                        <input v-if="inputShow" v-model="conpanyPhone" type="text" placeholder="请输入公司电话"/>
                    </div>
                    <div class="msg">
                        <div class="name">企业邮箱</div>
                        <div class="cont" v-if="!inputShow">{{conpanyEmail}}</div>
                        <input v-if="inputShow" v-model="conpanyEmail" type="text" placeholder="请输入企业邮箱"/>
                    </div>
                    <p class="errorMsg" v-if="basicInfoShow">{{errorMsg}}</p>
                    <div class="compile" @click="compile()" v-if="btnShow">编辑</div>
                    <div class="save" @click="save()" v-if="!btnShow">保存</div>
                </div>
                <!--基本信息财务联系人-->
                <div v-if="youIndex===1" class="r-bottom">
                    <div class="add" @click="peopleShow=true">添加</div>
                    <ul class="staff">
                        <li v-for="item in financePersonInfo">
                            <div class="s-left">
                                <p class="p-one">
                                    <span class="p-name">姓名: </span>
                                    <span class="p-cont">{{item.name}}</span>
                                </p>
                                <p class="p-two">
                                    <span class="p-name">邮箱: </span>
                                    <span class="p-cont">{{item.mail}}</span>
                                </p>
                            </div>
                            <div class="s-middle">
                                <p class="p-one">
                                    <span class="p-name">联系电话: </span>
                                    <span class="p-cont">{{item.phone}}</span>
                                </p>
                                <p class="p-two">
                                    <span class="p-name">联系地址: </span>
                                    <span class="p-cont">{{item.address}}</span>
                                </p>
                            </div>
                            <div class="s-right">
                                <p class="p-one">
                                    <span class="p-name">邮政编码: </span>
                                    <span class="p-cont">{{item.zipCode == null || item.zipCode == ''?'--':item.zipCode}}</span>
                                </p>
                                <p class="p-two">
                                    <span class="p-name">备注: </span>
                                    <span class="p-cont">{{item.remark == null || item.remark == ''?'...':item.remark}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right" v-if="myIndex===1">
                <div class="safe">
                    <div class="bound">
                        <span class="bound-name">绑定手机</span>
                        <input type="text" placeholder="输入您的手机号"/>
                    </div>
                    <div class="bound">
                        <span class="bound-name"></span>
                        <input type="text" placeholder="输入验证码"/>
                        <span class="boundGetimgCode">获取验证码</span>
                    </div>
                    <p class="errorMsg">{{errorMsg}}111</p>
                    <div class="bound-btn">确定</div>
                </div>
            </div>
            <div class="right" v-if="myIndex===2">
                <div class="password">
                    <div class="bound">
                        <span class="bound-name">设置转出密码</span>
                        <input type="text" placeholder="设置转出密码"/>
                    </div>
                    <div class="bound">
                        <span class="bound-name"></span>
                        <input type="text" placeholder="确认密码"/>
                    </div>
                    <p class="errorMsg">{{errorMsg}}111</p>
                    <div class="bound-btn">确定</div>
                </div>
            </div>
            <div class="right" v-if="myIndex===4">
                <div class="signature">
                    <div class="signatureBox">
                        <img src="./img/withOut.png"/>
                        <p>暂未生成</p>
                        <div class="signatureBtn" @click="createShow=true">去创建</div>
                    </div>
                </div>
            </div>
            <div class="right" v-if="myIndex===5">
                <div class="bank">
                    <div class="signatureBox">
                        <img src="./img/withOut.png"/>
                        <p>暂未生成</p>
                        <div class="signatureBtn">去创建</div>
                    </div>
                </div>
            </div>
            <div class="right" v-if="myIndex===3">
                <div class="entityAccount">
                    <div class="add" @click="resultShow=true">新增</div>
                    <ul class="zhanghu">
                        <li v-for="item in accountArr">
                            <div class="acountLeft">
                                <span class="acountName">开户行:</span>
                                <span class="acountCont">{{item.bank}}</span>
                            </div>
                            <div class="acountMiddle">
                                <span class="acountName">银行账户:</span>
                                <span class="acountCont">{{item.bankNo}}</span>
                            </div>
                            <div class="acountRight">
                                <span class="acountName">账户名:</span>
                                <span class="acountCont">{{item.accountName}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!--新增企业实体账户-->
    <v-modal class="addConpany" :isShow="resultShow" :width="640" @close="resultShow=false">
        <div class="modalBox">
            <h3>新增企业实体账户</h3>
            <div class="modalMsg">
                <span class="modalName">账户名:</span>
                <input type="text" v-model="accountName" placeholder="请输入企业账户名"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">开户行:</span>
                <input type="text" v-model="bankName" placeholder="输入开户行名称"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">银行账号:</span>
                <input type="text" v-model="bankNo" placeholder="输入银行账号"/>
            </div>
            <p class="errorMsg" v-if="errorMsgShow">{{errorMsg}}</p>
            <div class="modalBtn">
                <span class="btnOne" @click="qyst()">提交</span>
                <span class="btnTwo" @click="resultShow=false">取消</span>
            </div>
        </div>
    </v-modal>

    <!--添加财务联系人信息-->
    <v-modal class="addPeople" :isShow="peopleShow" :width="640" @close="peopleShow=false">
        <div class="modalBox">
            <h3>添加财务联系人信息</h3>
            <div class="modalMsg">
                <span class="modalName">姓名:</span>
                <input type="text" v-model="financeName" placeholder="请输入财务人姓名"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">联系电话:</span>
                <input type="text" v-model="financePhone" placeholder="输入你的联系电话"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">邮箱:</span>
                <input type="text" v-model="financeEmail" placeholder="输入您的邮箱"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">联系地址:</span>
                <input type="text" v-model="financeAddress" placeholder="输入您的联系地址"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">邮编:</span>
                <input type="text" v-model="financeAddress" placeholder="输入您的邮政编码"/>
            </div>
            <div class="modalMsg">
                <span class="modalName">备注:</span>
                <input type="text" v-model="financeInfo" placeholder="备注信息"/>
            </div>
            <p class="errorMsg" v-if="financePersonShow">{{errorMsg}}</p>
            <span class="btnOne" @click="addFinancePerson()">确定</span>
        </div>
    </v-modal>

    <v-modal class="create" :isShow="createShow" :width="640" @close="createShow=false">
        <div class="createBox">
            <h3>创建电子签章</h3>
            <p class="introduce">电子签章的生成需要对 <span>158****9988 </span>的手机进行验证，生成后用于电子协议签署</p>
            <div class="input">
                <input type="text" placeholder="输入您的手机验证码"/>
                <span class="createBtn">获取验证码</span>
            </div>
            <div class="zhang">
                <img src="./img/electronic_seal.svg"/>
                <p>电子签章效果</p>
            </div>
            <p class="errorMsg">{{errorMsg}}111</p>
            <div class="btnBox">
                <span class="btnOne">提交</span>
                <span class="btnTwo">取消</span>
            </div>
        </div>
    </v-modal>

    <v-footer></v-footer>

</div>
</template>

<script>
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import modal from "@/components/base/modal/modal";
    import {getResult} from "../../api/common";

    export default {
        name: "user",
        data(){
            return{
                islogin:true,
                items:[
                    {name:'基本信息设置',class:'icon-setting',},
                    {name:'账号安全设置',class:'icon-security-setting',},
                    {name:'提现安全设置',class:'icon-cash-setting',},
                    {name:'企业实体账户',class:'icon-accounts',},
                    {name:'电子签章',class:'icon-signature',},
                    {name:'银行保理专户',class:'icon-bank-account'}
                ],
                myIndex:0,
                tabs:[
                    '基本信息',
                    '财务联系人信息'
                ],
                youIndex:0,
                inputShow:false,
                btnShow:true,
                resultShow:false,
                peopleShow:false,
                createShow:false,
                errorMsg:'',
                errorMsgShow:false,

                /*基本信息相关数据*/
                basicInfoShow:false,
                userPhone:'',
                conpanyName:'',
                conpanyCode:'',
                userName:'',
                conpanyPhone:'',
                conpanyEmail:'',

                /*添加企业实体账户相关数据*/

                accountArr:[],

                accountName:'',
                bankName:'',
                bankNo:'',

                /*添加财务联系人相关数据*/
                financePersonShow:false,

                financePersonInfo:[],

                financeName:'',
                financePhone:'',
                financeEmail:'',
                financeAddress:'',
                financeInfo:''
            }
        },
        components:{
            "v-header": header,
            "v-footer": footer,
            "v-modal": modal
        },
        methods:{
            tab(index){
                this.myIndex = index
            },
            tap(index){
                this.youIndex = index
            },
            compile(){
                console.log('编辑')
                this.inputShow = true
                this.btnShow = false
            },
            /*基本信息*/
            checkJBXX(){
              let regPhone = /^[1][3,4,5,7,8][0-9]{9}$/
              // let regName = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/
              // let regCode = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/
              // let regUser =  /^[\u4E00-\u9FA5A-Za-z]+$/
              // let regTelephone = /\d{3}-\d{8}|\d{4}-\d{7}/
              let regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
              // if(this.userPhone == ''){
              //     this.basicInfoShow = true;
              //     this.errorMsg = '手机号码不能空'
              //     return false
              // }
              if(this.userPhone != ''){
                if(!regPhone.test(this.userPhone)){
                    this.basicInfoShow = true;
                    this.errorMsg = '手机号码输入不符合规范，请重新输入'
                    return false
                }
              }
              if(this.conpanyName == ''){
                  this.basicInfoShow = true;
                  this.errorMsg = '公司名称不能为空'
                  return false
              }
              // if(!regName.test(this.conpanyName)){
              //     this.basicInfoShow = true;
              //     this.errorMsg = '公司名称输入不符合规范，请重新输入'
              //     return false
              // }
              // if(this.conpanyCode == ''){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司代码不能为空'
              //   return false
              // }
              // if(!regCode.test(this.conpanyCode)){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司代码输入不符合规范，请重新输入'
              //   return false
              // }
              // if(this.userName == ''){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司联系人不能为空'
              //   return false
              // }
              // if(!regName.test(this.userName)){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司联系人输入不符合规范，请重新输入'
              //   return false
              // }
              // if(this.conpanyPhone == ''){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司电话不能为空'
              //   return false
              // }
              // if(!regTelephone.test(this.conpanyPhone)){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司电话输入不符合规范，请重新输入'
              //   return false
              // }
              // if(this.conpanyEmail == ''){
              //   this.basicInfoShow = true;
              //   this.errorMsg = '公司邮箱不能为空'
              //   return false
              // }
              if(this.conpanyEmail != ''){
                if(!regEmail.test(this.conpanyEmail)){
                  this.basicInfoShow = true;
                  this.errorMsg = '公司邮箱输入不符合规范，请重新输入'
                  return false
                }
              }
              this.basicInfoShow = false;
              return true
            },
            save(){
                this.basicInfoShow = false;
                if(!this.checkJBXX()) return;
                //console.log('保存')
                getResult('put','/enterprise/v1/update_enter',{
                    contactMobile:this.userPhone,
                    enterpriseName:this.conpanyName,
                    enterpriseCode:this.conpanyCode,
                    contactName:this.userName,
                    telephone:this.conpanyPhone,
                    email:this.conpanyEmail
                })
                    .then(data=>{
                        if(data.result == 0){
                            this.inputShow = false
                            this.btnShow = true
                        }
                    })
            },

            /*财务联系人*/
            checkCULXR(){
              let nameReg = /^[\u4e00-\u9fa5a-zA-Z]$/
              let regPhone = /^[1][3,4,5,7,8][0-9]{9}$/
              if(!this.financeName){
                this.financePersonShow = true
                this.errorMsg = '姓名不能为空'
                return false
              }
              if(nameReg.test(this.financeName)){
                this.financePersonShow = true
                this.errorMsg = '姓名不符合规则，请重新输入'
                return false
              }
              if(!this.financePhone){
                this.financePersonShow = true
                this.errorMsg = '联系电话不能为空'
                return false
              }
              if(!regPhone.test(this.financePhone)){
                this.financePersonShow = true
                this.errorMsg = '联系电话不符合规则，请重新输入'
                return false
              }
              return true
            },
            addFinancePerson(){
              this.financePersonShow = false
              if(!this.checkCULXR()) return;
                getResult('post','/enterprise/v1/enterprise/finance_contract',{
                  contractRequestList:[
                    {
                      name : this.financeName,
                      phone : this.financePhone,
                      mail : this.financeEmail,
                      address : this.financeAddress,
                      remark : this.financeInfo
                    }
                  ]

                })
                .then(data=>{
                  if(data.result == 0){
                    console.log(data.data);
                    this.peopleShow = false
                    getResult('get','/enterprise/v1/enterprise/finance_contract/list')
                    .then(data=>{
                      if(data.result == 0){
                          this.financePersonInfo = data.data
                      }
                    })
                  }
                })
            },
            /*企业实体*/
            checkQYST(){
                let REXname = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+//*^[\u4e00-\u9fa5A-Za-z]{2,20}$*/
                let bankCode = /^([1-9]{1})(\d{14}|\d{18})$/
                if(this.accountName == ''){
                    this.errorMsgShow = true;
                    this.errorMsg = '账户名不能为空';
                    return false;
                }
                if(!REXname.test(this.accountName)){
                    this.errorMsgShow = true;
                    this.errorMsg = '账户名不符合规则，请重新输入';
                    return false;
                }
                if(this.bankName == ''){
                    this.errorMsgShow = true;
                    this.errorMsg = '开户行不能为空';
                    return false;
                }
                if(!REXname.test(this.bankName)){
                    this.errorMsgShow = true;
                    this.errorMsg = '开户行不符合规则，请重新输入';
                    return false;
                }
                if(this.bankNo == ''){
                    this.errorMsgShow = true;
                    this.errorMsg = '银行账号不能为空';
                    return false;
                }
                if(!bankCode.test(this.bankNo)){
                    this.errorMsgShow = true;
                    this.errorMsg = '银行账号不符合规则，请重新输入';
                    return false;
                }
                this.errorMsgShow = false;
                return true
            },
            qyst(){
                this.errorMsgShow = false;
                if(!this.checkQYST()) return;
                getResult('post','/enterprise/v1/enterprise/account_bank',{
                    accountName:this.accountName,
                    bank:this.bankName,
                    bankNo:this.bankNo
                })
                    .then(data=>{
                        if(data.result == 0){
                            this.errorMsgShow = false;
                            this.resultShow = false;
                            console.log('成功')
                            getResult('get','/enterprise/v1/enterprise/account_bank/list')
                                .then(data=>{
                                    console.log(data.data)
                                    if(data.result == 0){
                                        console.log(data.data)
                                        this.accountArr = data.data
                                    }
                                })
                        }
                    })
            }

        },
        mounted(){
            console.log(window.innerHeight)
            this.$refs.myuser.style.minHeight = window.innerHeight - 195 + 'px'

            getResult('get','/enterprise/v1/enterprise/account_bank/list')
                .then(data=>{
                    console.log(data.data)
                    if(data.result == 0){
                        console.log(data.data)
                        this.accountArr = data.data
                    }
                })
            getResult('get','/enterprise/v1/basic')
            .then(data=>{
              console.log(data.data);
              if(data.result == 0){
                  this.userPhone = data.data.contactMobile
                  this.conpanyName = data.data.enterpriseName
                  this.conpanyCode = data.data.enterpriseCode
                  this.userName = data.data.contactName
                  this.conpanyPhone = data.data.telephone
                  this.conpanyEmail = data.data.email
              }
            })
            getResult('get','/enterprise/v1/enterprise/finance_contract/list')
            .then(data=>{
              if(data.result == 0){
                  this.financePersonInfo = data.data
              }
            })

        }
    }
</script>

<style scoped lang="scss">
@import "../../assets/sass/user";
</style>
