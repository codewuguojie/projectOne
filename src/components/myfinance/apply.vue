<template>
    <div class="apply">
        <v-header :isLogin="islogin"></v-header>

        <div ref="myuser1" class="content" v-if="!successShow">
            <div class="position">
                <img src="./img/position.png"/>
                <span>当前位置 > 首页 > 我的融资 > 申请融资</span>
            </div>
            <div class="process">
                <div class="L-top">
                    <img src="./img/apply.png"/>
                    <span>申请融资</span>
                </div>
            </div>
            <div class="finance-type">
                <div class="title" v-if="myIndex == 1">
                    <div class="left">融资类型:</div>
                    <div class="right">
                        <p class="one">小米有品融资</p>
                        <p class="two">此融资指：企业在小米有品平台已产生的销售净流水的应收账款融资</p>
                    </div>
                </div>
                <div class="title" v-if="myIndex == 2">
                    <div class="left">融资类型:</div>
                    <div class="right">
                        <p class="one">小米商城融资</p>
                        <p class="two">此融资指：企业向小米商城提供商品或服务已产生或将来产生的应收账款融资</p>
                    </div>
                </div>
                <div class="title" v-if="myIndex == 3">
                    <div class="left">融资类型:</div>
                    <div class="right">
                        <p class="one">其他融资</p>
                        <p class="two">适用于其他销售渠道产生的融资需求</p>
                    </div>
                </div>
                <div class="msg-box">
                    <div class="name">
                        <b>*</b>
                        <span>申请融资金额:</span>
                    </div>
                    <input type="text" v-model="money" placeholder="净流水金额*放款比例，具体以提款单为准"  @keyup="keyup()"/>
                </div>
                <div class="msg-box">
                    <div class="name"></div>
                    <div class="applyBtnBox">
                        <div class="choseBtn" @click="choseQYST()">选择企业实体账户</div>
                        <div class="addBtn"  @click="resultShow=true">新增企业实体账户</div>
                    </div>
                </div>
                <div class="msg-box" v-if="choseAccount">
                    <div class="name"></div>
                    <div class="bankAccount">
                        <ul class="zhanghu">
                            <li>
                                <div class="acountLeft">
                                    <span class="acountName">开户行:</span>
                                    <span class="acountCont">{{conpanyAccount.bank}}</span>
                                </div>
                                <div class="acountMiddle">
                                    <span class="acountName">银行账户:</span>
                                    <span class="acountCont">{{conpanyAccount.bankNo}}</span>
                                </div>
                                <div class="acountRight">
                                    <span class="acountName">账户名:</span>
                                    <span class="acountCont">{{conpanyAccount.accountName}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="upLoad" v-if="myIndex == 1">
                <div class="up-file">
                    <div class="file-name">
                        <b>*</b>
                        <span>本次转让债权明细:</span>
                    </div>
                    <div class="fileInput">
                        <div class="fileInputBox">
                            <img src="./img/upload.png"/>
                            <span>上传文件</span>
                            <input type="file"  @change="fileYouPin1($event)"/>
                        </div>
                        <div class="file-tips">
                            支持扩展名： .zip .doc .docx .pdf .jpg...<br/>
                            签章完整的电子文本
                        </div>
                    </div>
                </div>
                <div class="up-file">
                    <div class="file-name">
                        <b>*</b>
                        <span>上传有品代售协议:</span>
                    </div>
                    <div class="fileInput">
                        <div class="fileInputBox">
                            <img src="./img/upload.png"/>
                            <span>上传文件</span>
                            <input type="file" @change="fileYouPin2($event)"/>
                        </div>
                        <div class="file-tips">
                            支持扩展名： .zip .doc .docx .pdf .jpg...
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(file,index) in dataYouPinArr">
                        <div class="file-top">
                            <div class="left">
                                <img src="./img/file.png"/><span>{{file.fileName}}</span>
                            </div>
                            <img class="right" src="./img/delete.png" @click="deleteYouPin(file,index)"/>
                        </div>
                        <div class="file-bottom">
                            <p class="ccc"></p>
                            <p class="blue"></p>
                        </div>
                    </li>
                </ul>
                <div class="btn" @click="youPin()">提交</div>
            </div>
            <div class="upLoad" v-if="myIndex == 2">
                <div class="up-file">
                    <div class="file-name">
                        <b>*</b>
                        <span>小米商城PO单:</span>
                    </div>
                    <div class="fileInput">
                        <div class="fileInputBox">
                            <img src="./img/upload.png"/>
                            <span>上传文件</span>
                            <input type="file" @change="fileShop1($event)"/>
                        </div>
                        <div class="file-tips">
                            支持扩展名： .zip .doc .docx .pdf .jpg...<br/>
                            签章完整的电子文本
                        </div>
                    </div>
                </div>
                <div class="up-file">
                    <div class="file-name">
                        <b>*</b>
                        <span>上传小米商城采购协议:</span>
                    </div>
                    <div class="fileInput">
                        <div class="fileInputBox">
                            <img src="./img/upload.png"/>
                            <span>上传文件</span>
                            <input type="file" @change="fileShop2($event)"/>
                        </div>
                        <div class="file-tips">
                            支持扩展名： .zip .doc .docx .pdf .jpg...
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(file,index) in dataShopArr">
                        <div class="file-top">
                            <div class="left">
                                <img src="./img/file.png"/><span>{{file.fileName}}</span>
                            </div>
                            <img class="right" src="./img/delete.png" @click="deleteShop(file,index)"/>
                        </div>
                        <div class="file-bottom">
                            <p class="ccc"></p>
                            <p class="blue"></p>
                        </div>
                    </li>
                </ul>
                <div class="btn" @click="shop()">提交</div>
            </div>
            <div class="upLoad" v-if="myIndex == 3">
                <div class="up-file">
                    <div class="file-name">
                        <b>*</b>
                        <span>上传企业相关证明材料:</span>
                    </div>
                    <div class="fileInput">
                        <div class="fileInputBox">
                            <img src="./img/upload.png"/>
                            <span>上传文件</span>
                            <input type="file" @change="fileOther($event)"/>
                        </div>
                        <div class="file-tips">
                            支持扩展名： .zip .doc .docx .pdf .jpg...<br/>
                            签章完整的电子文本
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(file,index) in dataOtherArr">
                        <div class="file-top">
                            <div class="left">
                                <img src="./img/file.png"/><span>{{file.fileName}}</span>
                            </div>
                            <img class="right" src="./img/delete.png" @click="deleteOther(file,index)"/>
                        </div>
                        <div class="file-bottom">
                            <p class="ccc"></p>
                            <p class="blue"></p>
                        </div>
                    </li>
                </ul>
                <div class="btn" @click="other()">提交</div>
            </div>
        </div>

        <div ref="myuser2" class="content" v-if="successShow">
          <div class="position">
              <img src="./img/position.png"/>
              <span>当前位置 > 首页 > 我的融资 > 申请融资</span>
          </div>
          <div class="process">
              <div class="L-top">
                  <img src="./img/apply.png"/>
                  <span>申请融资</span>
              </div>
          </div>
          <div class="success">
            <img src="./img/success.png" alt="">
            <h3>提交成功</h3>
            <p>您的申请已提交成功，请等待审批结果，具体放款金额以提款单为准</p>
            <div class="btn" @click="goApply()" style="cursor:pointer;">
              返回
            </div>
          </div>
        </div>

        <v-footer></v-footer>

        <!-- 选择企业实体账户 -->
        <v-modal class="choseQYST" :isShow="QYSTShow" :width="640" @close="QYSTShow=false">
            <h3>选择企业实体账户</h3>
            <ul>
                <li v-for="(account,index) in  accountArr">
                    <span :class="{'active':index == nowindex,'radio':index != nowindex}" @click="tab(index)"></span>
                    <div class="infoShow">
                        <p><span class="infoTitle">开户行: </span><span class="infoMsg">{{account.bank}}</span></p>
                        <p><span class="infoTitle">银行账号: </span><span class="infoMsg">{{account.bankNo}}</span></p>
                        <p><span class="infoTitle">账户名: </span><span class="infoMsg">{{account.accountName}}</span></p>
                    </div>
                </li>
            </ul>
            <div class="btnBox">
                <span class="btnOne" @click="QYSTShow=false">提交</span>
                <span class="btnTwo" @click="QYSTShow=false">取消</span>
            </div>
        </v-modal>

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

    </div>
</template>

<script>
    import {getResult,hostUrl,staticUrl} from "../../api/common";
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import modal from "@/components/base/modal/modal";
    import Vue from 'vue'
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import {Toast} from 'mint-ui'
    Vue.use(ElementUI);
    export default {
        name: "apply",
        data(){
            return{
                radio:'1',
                islogin:true,
                myIndex:1,
                successShow:false,
                QYSTShow:false,
                choseAccount:false,
                money:'',
                repayMoney:0,
                conpanyAccount:{},
                //小米有品
                fileYouPinArr1:[],
                fileYouPinArr2:[],
                dataYouPinArr:[],
                feedbackImg1:'',
                feedbackImg2:'',
                //小米商城
                fileShopArr1:[],
                fileShopArr2:[],
                dataShopArr:[],
                ShopImg1:'',
                ShopImg2:'',
                //其他
                fileOtherArr:[],
                dataOtherArr:[],
                OtherImg:'',
                errorMsgShow:false,
                resultShow:false,
                /*添加企业实体账户相关数据*/

                accountArr:[],

                accountName:'',
                bankName:'',
                bankNo:'',

                nowindex:0,
                accountId:''

            }
        },
        components:{
            "v-header": header,
            "v-footer": footer,
            "v-modal": modal
        },
        methods:{

            choseQYST(){
                this.QYSTShow=true
                getResult('get','/enterprise/v1/enterprise/account_bank/list')
                                .then(data=>{
                                    console.log(data.data)
                                    if(data.result == 0){
                                        console.log(data.data)
                                        this.accountArr = data.data
                                    }
                                })
            },

            tab(index){
                this.nowindex = index
                getResult('get','/enterprise/v1/enterprise/account_bank/list')
                                .then(data=>{
                                    if(data.result == 0){
                                        console.log(data.data[index].id)
                                        this.accountId = data.data[index].id
                                        console.log(data.data[index])
                                        this.conpanyAccount = data.data[index]
                                        this.choseAccount = true
                                    }
                                })
            },

            keyup(event) {
                this.money = this.money.replace(/[^\d]/g, '')
                this.money = this.money.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
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
            },

            // 小米有品融资申请
            //债权明细
            fileYouPin1(event){
                let _target = event.target;
                this.targets = _target;
                let file = _target.files[0];
                //console.log(file);
                let fileName = _target.files[0].name;
                let fileType = fileName.substring(fileName.lastIndexOf("."));
                let param = new FormData(); //创建form对象
                param.append("file", event.target.files[0]);
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data;charset=UTF-8",
                        accept: "application/json;charset=UTF-8"
                    }
                };
                if(fileType === '.exe' || fileType === '.bat' || fileType === '.sh' || fileType === '.cmd'){
                    Toast('文件格式不对，请重新上传');
                    return;
                }
                if(file.size >1024*1024*10){
                    Toast('文件大于10M,请重新选择');
                    return;
                }
                if(file.size == 0 ){
                    Toast('文件为空，请重新选择');
                    return;
                }
                //this.fileYouPinArr1.push(event.target.files[0])
                //console.log(this.fileYouPinArr1)
                getResult('post','/basics/v1/upload',param,config)
                    .then(data=>{
                        console.log(data.data)
                        //this.dataYouPinArr.push(data.data)

                        this.dataYouPinArr.push({
                            fileName: fileName,
                            filePath: data.data.filePath,
                            realPath: `${hostUrl + data.data.filePath}`
                        });

                        this.feedbackImg1 = JSON.stringify(this.dataYouPinArr)
                        console.log('feedbackImg')
                        console.log(typeof(this.feedbackImg))
                    })
                    .catch(()=>{
                        Toast('上传失败，请重新上传')
                    })
            },
            //有品代收协议
            fileYouPin2(event){
                let _target = event.target;
                this.targets = _target;
                let file = _target.files[0];
                //console.log(file);
                let fileName = _target.files[0].name;
                let fileType = fileName.substring(fileName.lastIndexOf("."));
                let param = new FormData(); //创建form对象
                param.append("file", event.target.files[0]);
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data;charset=UTF-8",
                        accept: "application/json;charset=UTF-8"
                    }
                };
                if(fileType === '.exe' || fileType === '.bat' || fileType === '.sh' || fileType === '.cmd'){
                    Toast('文件格式不对，请重新上传');
                    return;
                }
                if(file.size >1024*1024*10){
                    Toast('文件大于10M,请重新选择');
                    return;
                }
                if(file.size == 0 ){
                    Toast('文件为空，请重新选择');
                    return;
                }
                this.fileYouPinArr2.push(event.target.files[0])
                console.log(this.fileYouPinArr2)
                getResult('post','/basics/v1/upload',param,config)
                    .then(data=>{
                        console.log(data.data)
                        this.dataYouPinArr.push({
                            fileName: fileName,
                            filePath: data.data.filePath,
                            realPath: `${hostUrl + data.data.filePath}`
                        });
                        this.feedbackImg2 = JSON.stringify(this.dataYouPinArr)
                        console.log('feedbackImg')
                        console.log(this.feedbackImg)
                    })
                    .catch(()=>{
                        Toast('上传失败，请重新上传')
                    })
            },
            deleteYouPin(file,index){
                this.dataYouPinArr.splice(index,1)
            },
            youPin(){
                if(!this.money){
                    Toast('请填写申请融资金额')
                    return;
                }else if(!this.feedbackImg1){
                    Toast('请上传本次债权明细')
                    return;
                }else if(!this.feedbackImg2){
                    Toast('请上传有品代售协议')
                    return;
                }else if(!this.accountId){
                    Toast('请选择一个企业实体账户')
                    return;
                }
                this.repayMoney = Number(this.money.replace(/,/g,''))
                getResult('post','/loan/v1/loan/apply_miyoupin',{
                    enterpriseAccountBankId:this.accountId,
                    applyDoc:this.feedbackImg1,
                    financeAmt:this.repayMoney,
                    saleContract:this.feedbackImg2
                })
                .then(data=>{
                    if(data.result == 0){
                        this.successShow = true
                        tihs.$router.push({path:'newFinance'})
                    }else{
                        Toast(data.msg)
                    }
                })
            },


            //小米商城融资申请
            //商城op单
            fileShop1(event){
                let _target = event.target;
                this.targets = _target;
                let file = _target.files[0];
                //console.log(file);
                let fileName = _target.files[0].name;
                let fileType = fileName.substring(fileName.lastIndexOf("."));
                let param = new FormData(); //创建form对象
                param.append("file", event.target.files[0]);
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data;charset=UTF-8",
                        accept: "application/json;charset=UTF-8"
                    }
                };
                if(fileType === '.exe' || fileType === '.bat' || fileType === '.sh' || fileType === '.cmd'){
                    Toast('文件格式不对，请重新上传');
                    return;
                }
                if(file.size >1024*1024*10){
                    Toast('文件大于10M,请重新选择');
                    return;
                }
                if(file.size == 0 ){
                    Toast('文件为空，请重新选择');
                    return;
                }
                this.fileShopArr1.push(event.target.files[0])
                console.log(this.fileShopArr1)
                getResult('post','/basics/v1/upload',param,config)
                    .then(data=>{
                        console.log(data.data)
                        this.dataShopArr.push({
                            fileName: fileName,
                            filePath: data.data.filePath,
                            realPath: `${hostUrl + data.data.filePath}`
                        })
                        this.ShopImg1 = JSON.stringify(this.dataShopArr)
                        console.log('feedbackImg')
                        console.log(this.ShopImg1)
                    })
                    .catch(()=>{
                        Toast('上传失败，请重新上传')
                    })
            },
            //采购协议
            fileShop2(event){
                let _target = event.target;
                this.targets = _target;
                let file = _target.files[0];
                //console.log(file);
                let fileName = _target.files[0].name;
                let fileType = fileName.substring(fileName.lastIndexOf("."));
                let param = new FormData(); //创建form对象
                param.append("file", event.target.files[0]);
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data;charset=UTF-8",
                        accept: "application/json;charset=UTF-8"
                    }
                };
                if(fileType === '.exe' || fileType === '.bat' || fileType === '.sh' || fileType === '.cmd'){
                    Toast('文件格式不对，请重新上传');
                    return;
                }
                if(file.size >1024*1024*10){
                    Toast('文件大于10M,请重新选择');
                    return;
                }
                if(file.size == 0 ){
                    Toast('文件为空，请重新选择');
                    return;
                }
                this.fileShopArr2.push(event.target.files[0])
                console.log(this.fileShopArr2)
                getResult('post','/basics/v1/upload',param,config)
                    .then(data=>{
                        console.log(data.data)
                        this.dataShopArr.push({
                            fileName: fileName,
                            filePath: data.data.filePath,
                            realPath: `${hostUrl + data.data.filePath}`
                        })
                        this.ShopImg2 = JSON.stringify(this.dataShopArr)
                        console.log('feedbackImg')
                        console.log(this.ShopImg2)
                    })
                    .catch(()=>{
                        Toast('上传失败，请重新上传')
                    })
            },
            deleteShop(file,index){
                this.dataShopArr.splice(index,1)
            },
            shop(){
                if(!this.money){
                    Toast('请填写申请融资金额')
                    return;
                }else if(!this.ShopImg1){
                    Toast('请上传小米商城PO单')
                    return;
                }else if(!this.ShopImg2){
                    Toast('请上传小米商城采购协议')
                    return;
                }else if(!this.accountId){
                    Toast('请选择一个企业实体账户')
                    return;
                }
                this.repayMoney = Number(this.money.replace(/,/g,''))
                getResult('post','/loan/v1/loan/apply_mimall',{
                    enterpriseAccountBankId:this.accountId,
                    applyDoc:this.ShopImg1,
                    financeAmt:this.repayMoney,
                    financePurpose:'',
                    saleContract:this.ShopImg2
                })
                .then(data=>{
                    if(data.result == 0){
                        this.successShow = true
                        tihs.$router.push({path:'newFinance'})
                    }else{
                        Toast(data.msg)
                    }
                })
            },


            //其他融资申请
            fileOther(event){
                let _target = event.target;
                this.targets = _target;
                let file = _target.files[0];
                //console.log(file);
                let fileName = _target.files[0].name;
                let fileType = fileName.substring(fileName.lastIndexOf("."));
                let param = new FormData(); //创建form对象
                param.append("file", event.target.files[0]);
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data;charset=UTF-8",
                        accept: "application/json;charset=UTF-8"
                    }
                };
                if(fileType === '.exe' || fileType === '.bat' || fileType === '.sh' || fileType === '.cmd'){
                    Toast('文件格式不对，请重新上传');
                    return;
                }
                if(file.size >1024*1024*10){
                    Toast('文件大于10M,请重新选择');
                    return;
                }
                if(file.size == 0 ){
                    Toast('文件为空，请重新选择');
                    return;
                }
                this.fileOtherArr.push(event.target.files[0])
                console.log(this.fileOtherArr)
                getResult('post','/basics/v1/upload',param,config)
                    .then(data=>{
                        console.log(data.data)
                        this.dataOtherArr.push({
                            fileName: fileName,
                            filePath: data.data.filePath,
                            realPath: `${hostUrl + data.data.filePath}`
                        })
                        this.OtherImg = JSON.stringify(this.dataOtherArr)
                        console.log('feedbackImg')
                        console.log(this.OtherImg)
                    })
                    .catch(()=>{
                        Toast('上传失败，请重新上传')
                    })
            },
            deleteOther(file,index){
                this.dataOtherArr.splice(index,1)
            },
            other(){
                if(!this.money){
                    Toast('请填写申请融资金额')
                    return;
                }else if(!this.OtherImg){
                    Toast('请上传企业相关证明资料')
                    return;
                }else if(!this.accountId){
                    Toast('请选择一个企业实体账户')
                    return;
                }
                this.repayMoney = Number(this.money.replace(/,/g,''))
                getResult('post','/loan/v1/loan/apply_other',{
                    enterpriseAccountBankId:this.accountId,
                    applyDoc:this.OtherImg,
                    financeAmt:this.repayMoney,
                    saleContract:'',
                    financePurpose:''
                })
                .then(data=>{
                    if(data.result == 0){
                        this.successShow = true
                        tihs.$router.push({path:'newFinance'})
                    }else{
                        Toast(data.msg)
                    }
                })
            },
            goApply(){
                this.$router.push({path:'newFinance'})
            }


        },
        mounted(){
            if(!this.successShow){
                this.$refs.myuser1.style.minHeight = window.innerHeight - 255 + 'px';
            }else{
                this.$refs.myuser2.style.minHeight = window.innerHeight - 215 + 'px'
            }
            this.myIndex = this.$route.query.index
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/sass/apply";
</style>
