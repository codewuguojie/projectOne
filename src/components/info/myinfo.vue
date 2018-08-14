<template>


<div class="my-box">

    <v-header :isLogin="islogin"></v-header>
    <div class="data-title">
      <span class="icon-address">&nbsp;当前位置：我的资料</span>
    </div>
    <div class="main">
        <div class="contents clearfix">
            <div class="left">
                <div :class="{'item':!isActive,'item active':isActive}" @click="isActive=!isActive;isActive2=!isActive2">
                    <span class="span1"></span>
                    <span class="span2 icon-basic-esta"></span>
                    <span class="span3">基本企业资料</span>
                </div>
                <div :class="{'item':!isActive2,'item active':isActive2}" @click="isActive=!isActive;isActive2=!isActive2">
                    <span class="span1"></span>
                    <span class="span2 icon-history-infos"></span>
                    <span class="span3">历史融资资料</span>
                </div>
            </div>
            <div class="right" v-if="isActive">
                <div class="item-uploads clearfix">
                  <div class="left1">
                        <div class="title">
                            <b class="need">*</b>
                            <b class="describe">企业营业执照</b>
                            <b class="tips">(可先提供最新三证合一的营业执照、公司章程、股权结构，授信后提款前补充调档文件)</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr1">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr1)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1" @click="uploadBtn()">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr1)">
                </div>
                <div class="item-uploads clearfix">
                  <div class="left1">
                        <div class="title">
                            <b class="need">*</b>
                            <b class="describe">法人身份证正反面</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr2">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr2)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right1">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr2)">
                  
              </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;企业征信报告</b>
                            <b class="tips">（请企业携带必须资料前往人行网点查询打印后提供扫描件）</b>
                            <b class="detail" @click="isShowModal2=true">点击查看操作流程></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr3">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr3)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr3)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                            <div class="title">
                                <b class="describe">&nbsp;实际控制人身份证及个人人民银行信用报告</b>
                            </div>
                            <div class="files">
                                <div class="file" v-for="(item,index) in companyInfo.fileArr4">
                                    <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr4)">删除</b></span>
                                </div>
                            </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr4)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司近一年审计报告</b>
                            <b class="tips">（成立不到一年的企业可不提供）</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr5">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr5)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr5)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                            <div class="title">
                                <b class="describe">&nbsp;公司三年一期财务报表及最近一期科目余额明细表</b>
                                <b class="tips">（成立时间不到要求的企业请提供已有的年报和近一期月报）</b>
                                <b class="detail"></b>
                            </div>
                           <div class="files">
                                <div class="file" v-for="(item,index) in companyInfo.fileArr6">
                                    <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr6)">删除</b></span>
                                </div>
                            </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr6)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司基础材料</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr7">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr7)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr7)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司金融机构授信明细</b>
                            <b class="tips">（提供银行、信托、保理、融资租赁、小贷等金融机构授信明细表，包括授信期限、授信额度、提用额度、担保方式）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr8">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr8)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="center">下载模板</div> -->
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr8)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司近一年纳税申报表</b>
                            <b class="tips"></b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr9">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr9)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr9)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;与核心企业有关合同，订单</b>
                            <b class="tips">（以及发票，送货单，仓单等复印件）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr10">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr10)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr10)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司去年及最近一期前五大客户及前五大供应商明细</b>
                            <b class="tips">（包括企业名称、业务金额、合作年限、结算方式及账期）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr11">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr11)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="center">下载模板</div> -->
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr11)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp;公司简介/BP</b>
                            <b class="tips"></b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr12">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr12)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr12)">
                </div>
                <div class="item-uploads clearfix">
                    <div class="left1">
                        <div class="title">
                            <b class="describe">&nbsp; 实控人、高管团队简历</b>
                            <b class="tips"></b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in companyInfo.fileArr13">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b v-if="item.newFile" @click="deleteItem(index,item,companyInfo.fileArr13)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right1">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,companyInfo.fileArr13)">
                </div>
                <div class="item-last">
                    <b class="need">*</b>
                    <b class="tips">上传文件支持图片、压缩包、word、PDF、excel 格式，各文件大小10M以内。最多支持上传10个文件。</b>
                </div>
                <div class="submitBtn"><span @click="submitBtn()">提交</span></div>
            </div>
            <div class="right" v-if="isActive2">
                <div class="item-uploads clearfix" v-for="item in financeInfo">
                    <div class="top">
                      <span>融资单号：{{item.applyNo}}</span>  
                      <span>融资类型：{{item.financeType}}</span>  
                    </div>
                    <div class="bottom">
                        <span class="file icon-file" v-for="item2 in item.fileList">&nbsp;<a :href="`${staticUrl+item2.filePath}`" target="_blank">{{item2.fileName}}</a> </span>
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
import { Toast } from 'mint-ui';
import Vue from "vue";
import axios from "axios";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import modal from "@/components/base/modal/modal";
import { hostUrl,getResult,staticUrl } from "api/common"; //导入api
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
            companyInfo:{},
            financeInfo:{},
            staticUrl:staticUrl(),
            submitObj:{},
        }
    },
    methods: {
        getCompanyInfo(){
            getResult('get','/enterprise/v1/particular').then((res)=>{
                if(res.result===0){
                    this.companyInfo = res.data;
                    console.log(this.companyInfo);
                    this.companyInfo = {
                        fileArr1:res.data.enterpriseLicence ?JSON.parse(res.data.enterpriseLicence):[],
                        fileArr2:res.data.legalPersonIdcard ?JSON.parse(res.data.legalPersonIdcard):[],
                        fileArr3:res.data.enterpriseCreditReport ?JSON.parse(res.data.enterpriseCreditReport):[],
                        fileArr4:res.data.bossIdcardCreditReport ?JSON.parse(res.data.bossIdcardCreditReport):[],
                        fileArr5:res.data.lastYearAuditReport ?JSON.parse(res.data.lastYearAuditReport):[],
                        fileArr6:res.data.threeYearFinanceReport ?JSON.parse(res.data.threeYearFinanceReport):[],
                        fileArr7:res.data.enterpriseBaseDoc ?JSON.parse(res.data.enterpriseBaseDoc):[],
                        fileArr8:res.data.bossExecutiveResume ?JSON.parse(res.data.bossExecutiveResume):[],
                        fileArr9:res.data.financeCreditDetail ?JSON.parse(res.data.financeCreditDetail):[],
                        fileArr10:res.data.lastYearTaxReport ?JSON.parse(res.data.lastYearTaxReport):[],
                        fileArr11:res.data.coreEnterpriseDoc ?JSON.parse(res.data.coreEnterpriseDoc):[],
                        fileArr12:res.data.fiveCustomerSupplierDetail ?JSON.parse(res.data.fiveCustomerSupplierDetail):[],
                        fileArr13:res.data.enterpriseProfile ?JSON.parse(res.data.enterpriseProfile):[],
                    }
                }
            })
        },
        getFinanceInfo(){
            getResult('get','/loan/v1/loan/apply_doc_list').then((res)=>{
                if(res.result===0){
                    this.financeInfo = res.data;
                    console.log(this.financeInfo);
                }
            })
        },
        uploadBtn(){
            this.showModal = true;
        },
        uploadFile(event,fileArr) {
            if(fileArr.length > 9){
                Toast('上传文件不能超过十个');
                return;
            }
            this.errorMessage = '';
            let _target = event.target;
            this.targets = _target;
            let file = _target.files[0];
            //console.log(file);
            let fileName = _target.files[0].name;
            let fileType = fileName.substring(fileName.lastIndexOf("."));
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
            let param = new FormData(); //创建form对象
            param.append("file", file); //通过append向form对象添加数据
            // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers: {
                "Content-Type": "multipart/form-data;charset=UTF-8",
                accept: "application/json;charset=UTF-8"
                }
            }; //添加请求头
            axios.defaults.withCredentials = true;
            axios.post(`${hostUrl}/basics/v1/upload`, param, config)
                .then(response => {
                if (response.data.result == 0) {
                    //console.log(response.data);
                    fileArr.push({
                        newFile:true,
                        fileName: fileName,
                        filePath: response.data.data.filePath,
                        realPath: `${hostUrl + response.data.data.filePath}`
                    }); 
                }else{
                    Toast(response.data.msg);
                }
            });
        },
        deleteItem(index,item,fileArr){
            fileArr.splice(index,1);
            console.log(fileArr.length);
        },
        checkData(){
            this.submitObj = {
                fileArr1:[],
                fileArr2:[],
                fileArr3:[],
                fileArr4:[],
                fileArr5:[],
                fileArr6:[],
                fileArr7:[],
                fileArr8:[],
                fileArr9:[],
                fileArr10:[],
                fileArr11:[],
                fileArr12:[],
                fileArr13:[],
            };
            this.companyInfo.fileArr1.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr1.push(value);
                }
            });
            this.companyInfo.fileArr2.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr2.push(value);
                }
            });
            this.companyInfo.fileArr3.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr3.push(value);
                }
            });
            this.companyInfo.fileArr4.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr4.push(value);
                }
            });
            this.companyInfo.fileArr5.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr5.push(value);
                }
            });
            this.companyInfo.fileArr6.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr6.push(value);
                }
            });
            this.companyInfo.fileArr7.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr7.push(value);
                }
            });
            this.companyInfo.fileArr8.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr8.push(value);
                }
            });
            this.companyInfo.fileArr9.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr9.push(value);
                }
            });
            this.companyInfo.fileArr10.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr10.push(value);
                }
            });
            this.companyInfo.fileArr11.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr11.push(value);
                }
            });
            this.companyInfo.fileArr12.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr12.push(value);
                }
            });
            this.companyInfo.fileArr13.forEach((value,index,arr) => {
                if(value.newFile){
                    this.submitObj.fileArr13.push(value);
                }
            });
            console.log(this.submitObj);
        },
        submitBtn(){
            this.checkData();
            getResult('put','/enterprise/v1/enterprise/doc',{
                bossExecutiveResume: this.submitObj.fileArr13.length>0 ? JSON.stringify(this.submitObj.fileArr13):'',
                bossIdcardCreditReport: this.submitObj.fileArr4.length>0 ? JSON.stringify(this.submitObj.fileArr4):'',
                coreEnterpriseDoc: this.submitObj.fileArr10.length>0 ? JSON.stringify(this.submitObj.fileArr10):'',
                enterpriseBaseDoc: this.submitObj.fileArr7.length>0 ? JSON.stringify(this.submitObj.fileArr7):'',
                enterpriseCreditReport: this.submitObj.fileArr3.length>0 ? JSON.stringify(this.submitObj.fileArr3):'',
                enterpriseLicence: this.submitObj.fileArr1.length>0 ? JSON.stringify(this.submitObj.fileArr1):'',
                enterpriseProfile: this.submitObj.fileArr12.length>0 ? JSON.stringify(this.submitObj.fileArr12):'',
                financeCreditDetail: this.submitObj.fileArr8.length>0 ? JSON.stringify(this.submitObj.fileArr8):'',
                fiveCustomerSupplierDetail: this.submitObj.fileArr11.length>0 ? JSON.stringify(this.submitObj.fileArr11):'',
                lastYearAuditReport: this.submitObj.fileArr5.length>0 ? JSON.stringify(this.submitObj.fileArr5):'',
                lastYearTaxReport: this.submitObj.fileArr9.length>0 ? JSON.stringify(this.submitObj.fileArr9):'',
                legalPersonIdcard: this.submitObj.fileArr2.length>0 ? JSON.stringify(this.submitObj.fileArr2):'',
                threeYearFinanceReport: this.submitObj.fileArr6.length>0 ? JSON.stringify(this.submitObj.fileArr6):''
                }).then((res)=>{
                    if(res.result == 0){
                        Toast('修改成功');
                        this.getCompanyInfo();
                    }else{
                        Toast(res.msg);
                    }
            })
        }
    },
    mounted() {
        this.getCompanyInfo();
        this.getFinanceInfo();
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
                    .icon-basic-esta:before{
                        font-size: 14px;
                        color:  #999999;;
                        line-height: 30px;
                    }
                    .icon-contract:before{
                        font-size: 14px;
                        color:  #999999;;
                        line-height: 30px;
                    }
                    .icon-history-infos:before{
                        font-size: 14px;
                        color:  #999999;;
                        line-height: 30px;
                    }
                    // &:hover{
                    //     .span1{
                    //         background-color:#54b4fe;
                    //     }
                    //     .span3{
                    //         color:  #54b4fe;
                    //     }
                    //     .icon-basic-esta:before{
                    //         color:  #54b4fe;
                    //     }
                    //     .icon-contract:before{
                    //         color:  #54b4fe;
                    //     }
                    //     .icon-history-infos:before{
                    //         color:  #54b4fe;
                    //     }
                    // }
                }
                .active{
                    .span1{
                        background-color:#54b4fe;
                    }
                    .span3{
                        color:  #54b4fe;
                    }
                    .icon-basic-esta:before{
                        color:  #54b4fe;
                    }
                }
            }
            .right{
                width: 876px;
                min-height: 440px;
                padding:0 40px 40px 40px;
                // height: 860px;
                background-color: #ffffff;
                border-radius: 10px;
                .item-uploads{
                    width: 876px;
                    position: relative;
                    border-bottom: 1px solid #eeeeee;
                    padding: 30px 0;
                    .left1{
                        float: left;
                        width: 796px;
                        .title{
                            width: 100%;
                            b.need{
                                color:#ee2323;
                            }
                            b.describe{
                                font-size: 16px;
                                color: #666666;
                                line-height: 16px;
                            }
                            b.tips{
                                font-size: 12px;
                                color: #999999;
                            }
                            b.detail{
                                font-size: 12px;
                                color: #ff942a;
                                cursor: pointer;
                            }
                        }
                        .files{
                            width: 100%;
                            
                            .file{
                                float: left;
                                margin-top: 20px;
                                margin-right: 70px;
                                img{
                                    width: 14px;
                                    vertical-align: middle;
                                }
                                a{
                                    color: #54b4fe;
                                    font-size: 14px; 
                                }
                                color: #54b4fe;
                                font-size: 14px;
                                b{
                                    display: none;
                                }
                                &:hover{
                                    b{  
                                        cursor: pointer;
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .center{
                        width: 56px;
                        cursor: pointer;
                        float: left;
                        margin-top: 25px;
                        color: #54b4fe;
                        font-size: 14px;
                        margin-right: 15px;
                    }
                    .right1{
                        cursor: pointer;
                        float: right;
                        width: 78px;
                        height: 32px;
                        margin-top: 20px;
                        color: #54b4fe;
                        text-align: center;
                        line-height: 32px;
                        font-size: 14px;
                        // &:hover{
                        //     background-color: #54b4fe;
                        //     border: solid 1px #54b4fe;
                        //     color: #ffffff;
                        // }
                    }
                    .upload{
                        position: absolute;
                        right: 10px;
                        top: 54px;
                        opacity: 0;
                        width: 60px;
                        cursor: pointer;
                        &:hover{
                            cursor: pointer;
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
                .submitBtn{
                    text-align: center;
                    margin-top: 40px;
                    padding-bottom: 40px;
                    cursor: pointer;
                    span{
                        width: 188px;
                        height: 40px;
                        background-color: #54b4fe;
                        display: inline-block;
                        text-align: center;
                        color: #ffffff;
                        line-height: 40px;
                        font-size: 14px;
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
