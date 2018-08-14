<template>
<div class="data-box">

    <v-header :isLogin="islogin"></v-header>
    <div class="data-title">
      <span class="icon-address">&nbsp;当前位置：申请授信</span>
    </div>
    <div class="infos-data">
        <div class="container">
          <div class="infos-title clearfix">
            <img src="./img/apply-finance.svg">
            <span>&nbsp;申请授信</span>
          </div>
          <div class="infos-img">
            <ul class="clearfix">
                <li class="first">
                    <p class="p1"><img src="./img/icon1.png"></p>
                    <p class="p2">意向函</p>
                </li>
                <li>
                    <p><img src="./img/line.png"></p>
                    <p ></p>
                </li>
                <li>
                    <p class="p1"><img src="./img/icon5.png"></p>
                    <p class="p2 active">提交企业资料</p>
                </li>
                <li>
                    <p><img src="./img/dotted.png"></p>
                    <p></p>
                </li>
                <li class="last">
                    <p class="p1"><img src="./img/icon3.png"></p>
                    <p class="p2 light">审核</p>
                </li>
            </ul>
          </div>
          <div class="infos-upload clearfix">
              <div class="uploads-title">
                  <span></span>&nbsp;
                  提交企业授信资料
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="need">*</b>
                            <b class="describe">企业营业执照</b>
                            <b class="tips">(可先提供最新三证合一的营业执照、公司章程、股权结构，授信后提款前补充调档文件)</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr1">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr1)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr1)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                    <div class="left">
                        <div class="title">
                            <b class="need">*</b>
                            <b class="describe">法人身份证正反面</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr2">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr2)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,fileArr2)" multiple="multiple">

              </div>
              <div class="item-uploads clearfix">
                    <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;企业征信报告</b>
                            <b class="tips">（请企业携带必须资料前往人行网点查询打印后提供扫描件）</b>
                            <b class="detail" @click="isShowModal2=true">点击查看操作流程></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr3">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr3)">删除</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="right">上传</div>
                    <input type="file" class="upload" @change="uploadFile($event,fileArr3)" multiple="multiple">

              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;实际控制人身份证及个人人民银行信用报告</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr4">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr4)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr4)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司近一年审计报告</b>
                            <b class="tips">（成立不到一年的企业可不提供）</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr5">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr5)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr5)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司三年一期财务报表及最近一期科目余额明细表</b>
                            <b class="tips">（成立时间不到要求的企业请提供已有的年报和近一期月报）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr6">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr6)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr6)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司基础材料</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr7">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr7)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr7)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司金融机构授信明细</b>
                            <b class="tips">（提供银行、信托、保理、融资租赁、小贷等金融机构授信明细表，包括授信期限、授信额度、提用额度、担保方式）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr8">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr8)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="center"><a :href="`${staticUrl+uploadFiles[0].path}`">下载模板</a></div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr8)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司近一年纳税申报表</b>
                            <b class="tips"></b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr9">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr9)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr9)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;与核心企业有关合同，订单</b>
                            <b class="tips">（以及发票，送货单，仓单等复印件）</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr10">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr10)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr10)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司去年及最近一期前五大客户及前五大供应商明细</b>
                            <b class="tips">（包括企业名称、业务金额、合作年限、结算方式及账期）</b>
                            <b class="detail"></b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr11">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr11)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="center"><a :href="`${staticUrl+uploadFiles[0].path}`">下载模板</a></div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr11)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;公司简介/BP</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr12">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr12)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr12)" multiple="multiple">
              </div>
              <div class="item-uploads clearfix">
                  <div class="left">
                        <div class="title">
                            <b class="describe">&nbsp;实控人、高管团队简历</b>
                        </div>
                        <div class="files">
                            <div class="file" v-for="(item,index) in fileArr13">
                                <span class="icon-file">&nbsp;<a :href="`${staticUrl+item.filePath}`" target="_blank">{{item.fileName}}</a> &nbsp;<b @click="deleteItem(index,item,fileArr13)">删除</b></span>
                            </div>
                        </div>
                  </div>
                  <div class="right">上传</div>
                  <input type="file" class="upload" @change="uploadFile($event,fileArr13)" multiple="multiple">
              </div>
              <div class="item-last">
                    <b class="need">*</b>
                    <b class="tips">上传文件支持图片、压缩包、word、PDF、excel 格式，各文件大小10M以内。最多支持上传10个文件。</b>
              </div>
          </div>
            <div class="info-contacts">
                <div class="uploads-title">
                    <span></span>&nbsp;
                    财务联系人信息
                </div>
                <div class="add"><span @click="isShowModal=true">添加</span></div>
                <div class="contacts" v-for="item in user">
                    <div class="left">
                        <p class="p1"><b class="b1">姓名：</b><b class="b2">{{item.name}}</b></p>
                        <p><b class="b1">邮箱：</b><b class="b2">{{item.mail}}</b></p>
                    </div>
                    <div class="center">
                        <p class="p1"><b class="b1">联系电话：</b><b class="b2">{{item.phone}}</b></p>
                        <p><b class="b1">联系地址：</b><b class="b2">{{item.address}}</b></p>
                    </div>
                    <div class="right">
                        <p class="p1"><b class="b1">邮政编码：</b><b class="b2">{{item.zipCode}}</b></p>
                        <p><b class="b1">备注：</b><b class="b2">{{item.remark}}</b></p>
                    </div>
                </div>
            </div>
            <div class="errorMessage">{{errorMessage}}</div>
            <div class="info-last">
                <div @click="submitBtn()">提交</div>
            </div>

        </div>
        
        
        


    </div>
    <v-modal title="模态框" :isShow="isShowModal" :width="680" @close="isShowModal=false">
        <div class="modal-body">
            <div class="title">添加财务联系人信息</div>
            <div class="form-input clearfix">
                <div class="left">姓名：</div>
                <div class="right"><input type="text" placeholder="请输入您的姓名" v-model="userObj.name"></div>
            </div>
            <div class="form-input clearfix">
                <div class="left">联系电话：</div>
                <div class="right"><input type="text" placeholder="请输入您的联系电话" v-model="userObj.phone"></div>
            </div>
            <div class="form-input clearfix">
                <div class="left">邮箱</div>
                <div class="right"><input type="text" placeholder="请输入您的邮箱" v-model="userObj.mail"></div>
            </div>
            <div class="form-input clearfix">
                <div class="left">联系地址：</div>
                <div class="right"><input type="text" placeholder="请输入您的联系地址" v-model="userObj.address"></div>
            </div>
            <div class="form-input clearfix">
                <div class="left">邮政编码：</div>
                <div class="right"><input type="text" placeholder="请输入您的邮政编码" v-model="userObj.zipCode"></div>
            </div>
            <div class="form-input clearfix">
                <div class="left">备注：</div>
                <div class="right"><input type="text" placeholder="请输入您的备注" v-model="userObj.remark"></div>
            </div>
            <div class="submit"><span @click="addContact()">确定</span></div>
        </div>
    </v-modal>
    <v-modal title="模态框" :isShow="isShowModal2" :width="680" @close="isShowModal2=false">
        <div class="modal-body">
            <div class="title">企业征信报告具体指引</div>
            <p class="flow">操作流程：<b>http://www.pbccrc.org.cn/zxzx/kefzx/201407/222c0292f56e4a638c326cb70bdacb4e.shtml</b></p>
            <p class="flow">各地人行网点：<b>http://www.pbccrc.org.cn/zxzx/lxfs/lxfs.shtml</b></p>
            <div class="submit"><span @click="isShowModal2=false">确定</span></div>
        </div>
    </v-modal>
    <v-footer></v-footer>

</div>

</template>
<script>
import { Toast } from "mint-ui";
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import modal from "@/components/base/modal/modal";
import upload from "@/components/base/upload/upload";
import { hostUrl, getResult, staticUrl } from "api/common"; //导入api
import axios from "axios";
export default {
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-upload": upload,
    "v-modal": modal
  },
  data() {
    return {
      islogin: true,
      errorMessage: "",
      isShowModal: false,
      isShowModal2: false,
      errorMessage: "",
      staticUrl: staticUrl(),
      tipsText: "成立时间未满三年的企业请提供已有的年报和近一期的月报",
      fileArr1: [],
      fileArr2: [],
      fileArr3: [],
      fileArr4: [],
      fileArr5: [],
      fileArr6: [],
      fileArr7: [],
      fileArr8: [],
      fileArr9: [],
      fileArr10: [],
      fileArr11: [],
      fileArr12: [],
      fileArr13: [],
      userObj: {
        address: "",
        mail: "",
        name: "",
        phone: "",
        remark: "",
        zipCode: ""
      },
      user: [],
      uploadFiles: []
    };
  },
  methods: {
    addContact() {
      this.user.push(this.userObj);
      this.isShowModal = false;
      console.log(this.user);
    },
    deleteItem(index, item, fileArr) {
      fileArr.splice(index, 1);
      console.log(fileArr.length);
    },
    uploadFile(event, fileArr) {
      if (fileArr.length > 9) {
        Toast("上传文件不能超过十个");
        return;
      }
      this.errorMessage = "";
      let _target = event.target;
      this.targets = _target;
      let file = _target.files[0];
      //console.log(file);
      let fileName = _target.files[0].name;
      let fileType = fileName.substring(fileName.lastIndexOf("."));
      if (
        fileType === ".exe" ||
        fileType === ".bat" ||
        fileType === ".sh" ||
        fileType === ".cmd"
      ) {
        Toast("文件格式不对，请重新上传");
        return;
      }
      if (file.size > 1024 * 1024 * 10) {
        Toast("文件大于10M,请重新选择");
        return;
      }
      if (file.size == 0) {
        Toast("文件为空，请重新选择");
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
      axios
        .post(`${hostUrl}/basics/v1/upload`, param, config)
        .then(response => {
          if (response.data.result == 0) {
            //console.log(response.data);
            fileArr.push({
              fileName: fileName,
              filePath: response.data.data.filePath,
              realPath: `${hostUrl + response.data.data.filePath}`
            });
          } else {
            Toast(response.data.msg);
          }
        });
    },
    submitBtn() {
      if (this.fileArr1.length < 1) {
        Toast("请上传企业营业执照");
        return;
      }
      if (this.fileArr2.length < 1) {
        Toast("请上传法人身份证正反面");
        return;
      }
      getResult("post", "/enterprise/v1/enterprise/doc", {
        bossExecutiveResume:
          this.fileArr13.length > 0 ? JSON.stringify(this.fileArr13) : "",
        bossIdcardCreditReport:
          this.fileArr4.length > 0 ? JSON.stringify(this.fileArr4) : "",
        coreEnterpriseDoc:
          this.fileArr10.length > 0 ? JSON.stringify(this.fileArr10) : "",
        enterpriseBaseDoc:
          this.fileArr7.length > 0 ? JSON.stringify(this.fileArr7) : "",
        enterpriseCreditReport:
          this.fileArr3.length > 0 ? JSON.stringify(this.fileArr3) : "",
        enterpriseLicence:
          this.fileArr1.length > 0 ? JSON.stringify(this.fileArr1) : "",
        enterpriseProfile:
          this.fileArr12.length > 0 ? JSON.stringify(this.fileArr12) : "",
        financeCreditDetail:
          this.fileArr8.length > 0 ? JSON.stringify(this.fileArr8) : "",
        fiveCustomerSupplierDetail:
          this.fileArr11.length > 0 ? JSON.stringify(this.fileArr11) : "",
        lastYearAuditReport:
          this.fileArr5.length > 0 ? JSON.stringify(this.fileArr5) : "",
        lastYearTaxReport:
          this.fileArr9.length > 0 ? JSON.stringify(this.fileArr9) : "",
        legalPersonIdcard:
          this.fileArr2.length > 0 ? JSON.stringify(this.fileArr2) : "",
        threeYearFinanceReport:
          this.fileArr6.length > 0 ? JSON.stringify(this.fileArr6) : ""
      }).then(res => {
        if (res.result == 0) {
          this.addContacts();
        } else {
          Toast(res.msg);
        }
      });
    },
    addContacts() {
      getResult("post", "/enterprise/v1/enterprise/finance_contract", {
        contractRequestList: this.user
      }).then(res => {
        if (res.result == 0) {
          this.$router.push({ path: "/myHome/data3" });
        } else {
          Toast(res.msg);
        }
      });
    },
    getDownloadFile() {
      getResult("get", `/basics/v1/open/content/list/contract_template`).then(
        res => {
          if (res.result == 0) {
            this.uploadFiles = res.data;
          } else {
            Toast(res.msg);
          }
        }
      );
    }
  },
  mounted() {
    this.getDownloadFile();
  }
};
</script>

<style type="text/css" lang="scss">
.data-box {
  background: #f9f9f9;

  .data-title {
    width: 1200px;
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
  .infos-data {
    background: #f9f9f9;
    width: 100%;

    .container {
      width: 1200px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding-bottom: 40px;
      .infos-title {
        width: 100%;
        border-bottom: 1px solid #eeeeee;
        img {
          margin-left: 40px;
          margin-top: 25px;
          width: 20px;
          float: left;
        }
        span {
          float: left;
          line-height: 70px;
          font-size: 20px;
        }
      }
      .infos-img {
        text-align: center;
        padding: 23px 0 6px 0;
        ul {
          display: inline-block;
          li {
            float: left;

            p.p2 {
              font-size: 14px;
              line-height: 45px;
            }
            p.light {
              color: #bbbbbb;
            }
            p.p1 {
              img {
                width: 24px;
              }
            }
            .active {
              color: #54b4fe;
            }
          }
          li.first {
            margin-right: 20px;
            p {
              color: #54b4fe;
            }
          }
          li.last {
            margin-left: 20px;
          }
        }
      }
      .infos-upload {
        // box-shadow: 0 0 20px #d4e6f5;
        border: 1px solid #eeeeee;
        width: 1060px;
        margin-left: 40px;
        background: #fff;
        padding: 30px;
        .uploads-title {
          font-size: 20px;
          color: #666666;
          span {
            float: left;
            width: 4px;
            height: 20px;
            margin-top: 4px;
            background-color: #54b4fe;
          }
        }
        .item-uploads {
          width: 1060px;
          padding: 30px 0;
          position: relative;
          border-bottom: 1px solid #eeeeee;
          .left {
            float: left;
            width: 890px;
            .title {
              width: 100%;
              b.need {
                color: #ee2323;
              }
              b.describe {
                font-size: 16px;
                color: #666666;
                line-height: 16px;
              }
              b.tips {
                font-size: 12px;
                color: #999999;
              }
              b.detail {
                font-size: 12px;
                color: #ff942a;
              }
            }
            .files {
              width: 100%;
              margin-top: 20px;
              .file {
                cursor: pointer;
                float: left;
                margin-right: 70px;
                color: #54b4fe;
                font-size: 14px;
                a {
                  color: #54b4fe;
                  font-size: 14px;
                }
                b {
                  display: none;
                }
                &:hover {
                  b {
                    cursor: pointer;
                    display: inline-block;
                  }
                }
              }
            }
          }
          .center {
            width: 56px;
            cursor: pointer;
            float: left;
            margin-top: 25px;
            color: #54b4fe;
            font-size: 14px;
            margin-right: 15px;
            a {
              color: #54b4fe;
            }
          }
          .right {
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
          .upload {
            position: absolute;
            right: 10px;
            top: 54px;
            opacity: 0;
            width: 60px;
            cursor: pointer;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .item-last {
          margin-top: 20px;
          .need {
            color: #ee2323;
            font-size: 12px;
          }
          .tips {
            font-size: 12px;
            color: #999999;
          }
        }
      }
      .info-last {
        text-align: center;
        padding-top: 40px;
        div {
          display: inline-block;
          width: 220px;
          height: 40px;
          text-align: center;
          background: #54b4fe;
          line-height: 40px;
          color: #fff;
        }
        a {
          color: #fff;
          width: 100%;
          display: block;
        }
      }
      .info-contacts {
        border: 1px solid #eeeeee;
        width: 1060px;
        margin-left: 40px;
        background: #fff;
        padding: 30px;
        margin-top: 20px;
        .uploads-title {
          font-size: 20px;
          color: #666666;
          span {
            float: left;
            width: 4px;
            height: 20px;
            margin-top: 4px;
            background-color: #54b4fe;
          }
        }
        .add {
          margin: 20px 0 20px 0;
          span {
            display: inline-block;
            width: 112px;
            height: 40px;
            background-color: #54b4fe;
            text-align: center;
            color: #ffffff;
            line-height: 40px;
            font-size: 14px;
          }
        }
        .contacts {
          width: 1020px;
          padding: 20px;
          height: 46px;
          background-color: #f9f9f9;
          font-size: 14px;
          .left {
            width: 225px;
            float: left;
            p {
              .b1 {
                color: #999999;
              }
            }
            .p1 {
              margin-bottom: 10px;
            }
          }
          .center {
            width: 565px;
            float: left;
            p {
              .b1 {
                color: #999999;
              }
            }
            .p1 {
              margin-bottom: 10px;
            }
          }
          .right {
            width: 230px;
            float: left;
            p {
              .b1 {
                color: #999999;
              }
            }
            .p1 {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
  .modal-body {
    .title {
      text-align: center;
      margin-bottom: 40px;
    }
    .form-input {
      width: 100%;
      margin-bottom: 20px;
      .left {
        margin-left: 40px;
        float: left;
        width: 78px;
        line-height: 44px;
        font-size: 14px;
        color: #666666;
      }
      .right {
        float: left;
        input {
          padding: 0;
          color: #666666;
          line-height: 40px;
          font-size: 14px;
          width: 486px;
          padding-left: 16px;
          background-color: #f6f6f6;
          border: solid 1px #eeeeee;
        }
      }
    }
    .submit {
      text-align: center;
      margin-top: 40px;
      padding-bottom: 40px;
      span {
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
    .flow {
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      b {
        color: #54b4fe;
      }
    }
  }
  .errorMessage {
    padding: 0 0 0 40px;
    line-height: 30px;
    font-size: 12px;
    color: #ee2323;
  }
}
</style>



