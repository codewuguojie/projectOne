<template>
<div class="datamiddle-box">


    <!--头部header-->
    <v-header :isLogin="islogin"></v-header>
    <!--申请授信2内容部分-->
    <div class="infos-data2">
        <div class="infos-upload clearfix">
            <div class="info-title">
                <span class="title"><img src="./img/company.svg">企业授信资料</span>
                <!-- <span class="check">审核中</span> -->
            </div>
            <div class="clearfix container">
                <div class="main clearfix top">
                  <div class="up-left">
                    <v-upload :isShow="isShow.f1" :titleText="title.f1" :isLong="islong.f1" ref="fileArr01" :newfiles="newfile.f1" :isHidden="true"></v-upload>
                  </div>
                  <div class="up-right">
                    <v-upload :isShow="isShow.f2" :titleText="title.f2" :isLong="islong.f2" ref="fileArr02" :newfiles="newfile.f2" :isHidden="true"></v-upload>
                  </div>
                </div>
                <div class="main clearfix">
                  <div class="up-left">
                    <v-upload :isShow="isShow.f3" :titleText="title.f3" :isLong="islong.f3" ref="fileArr03" :newfiles="newfile.f3" :isHidden="true"></v-upload>
                  </div>
                  <div class="up-right">
                    <v-upload :isShow="isShow.f4" :titleText="title.f4" :isLong="islong.f4"ref="fileArr04" :newfiles="newfile.f4" :isHidden="true"></v-upload>
                  </div>
                </div>
                <div class="main clearfix">
                  <div class="up-left">
                    <v-upload :isShow="isShow.f5" :titleText="title.f5" :isLong="islong.f5" ref="fileArr05" :newfiles="newfile.f5" :isHidden="true"></v-upload>
                  </div>
                  <div class="up-right">
                    <v-upload :isShow="isShow.f6" :titleText="title.f6" :isLong="islong.f6" ref="fileArr06" :newfiles="newfile.f6" :isHidden="true"></v-upload>
                  </div>
                </div>

                <div class="main clearfix">
                  <div class="up-left">
                    <v-upload :isShow="isShow.f7" :titleText="title.f7" :isLong="islong.f7" ref="fileArr07" :newfiles="newfile.f7" :isHidden="true"></v-upload>
                  </div>
                </div>
                <div class='line'></div>
                <div class="main clearfix">
                  <div class="up-left">
                    <v-upload :isShow="isShow.f8" :titleText="title.f8" :isLong="islong.f8" ref="fileArr08" :newfiles="newfile.f8" :isHidden="true"></v-upload>
                  </div>
                </div>
                <div class="error">{{errorMessage}}</div>
                <!-- <div class="edit">
                    <span class="edit-btn">编辑</span>
                    <span class="submit-btn" @click="submitBtn()">保存</span>
                </div> -->
            </div>
        </div>
        <div class="infoDetail clearfix">
            <p> <img src="./img/financeinfo.svg">融资资料</p>
            <div class="empty-info" v-if="!(detailList.length>0)">
              <div class="img"><img src="./img/financebg.png"></div>
              <div class="text">暂未有融资资料</div>
            </div>
            <div class="bottom" v-if="(detailList.length>0)">
              <table cellspacing="0">
                  <tr>
                      <th style="width:100px;">序号</th>
                      <th>融资类型</th>
                      <th>预计融资金额</th>
                      <th>融资目的</th>
                      <th style="text-align:left;">已上传资料</th>
                      <th>备注</th>
                  </tr>
                  <tr v-for="(item,index) in detailList">
                      <td >{{item.index}}</td>
                      <td>{{item.financeType}}</td>
                      <td>{{item.financeAmt}}</td>
                      <td>{{item.financePurpose}}</td>
                      <td style="width:20%">
                          <a v-for="(item,index) in item.fileList" :href="`${staticUrl+item.filePath}`" target="_blank" :title="item.fileName">{{item.fileName | cutoutStr}}</a><br>
                      </td>
                      <td>{{item.remark}}</td>
                  </tr>
              </table>
            </div>
        </div>

    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
import Vue from "vue";
import header from "@/components/base/header/header";
import footer from "@/components/base/footer/footer";
import upload from "@/components/base/upload/upload";

import { hostUrl, getResult, timestampToTime, staticUrl,toThousands } from "api/common"; //导入api
export default {
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-upload": upload
  },
  data() {
    return {
      newfile: {
        f1: [],
        f2: [],
        f3: [],
        f4: [],
        f5: [],
        f6: [],
        f7: [],
        f8: []
      },
      islogin: true,
      errorMessage: "",
      item:'',
      staticUrl: staticUrl(),
      isShow: {
        f1: true,
        f2: true,
        f3: false,
        f4: false,
        f5: false,
        f6: false,
        f7: false,
        f8: false
      },
      islong: {
        f1: false,
        f2: false,
        f3: false,
        f4: false,
        f5: false,
        f6: false,
        f7: false,
        f8: true
      },
      title: {
        f1: "企业营业执照",
        f2: "企业三年一期财务报表",
        f3: "实控人身份证（正面）",
        f4: "实控人身份证（反面）",
        f5: "实控人信用报告",
        f6: "企业征信报告",
        f7: "近一年的审计报告",
        f8: "与核心企业有关合同，订单，以及发票，送货单，仓单等资料"
      },
      detailList: []
    };
  },
  methods: {
    submitBtn() {
      let files = {
        f1: [],
        f2: [],
        f3: [],
        f4: [],
        f5: [],
        f6: [],
        f7: [],
        f8: []
      };
      this.$refs.fileArr01.returnData().forEach((value, index, arr) => {
        files.f1.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr02.returnData().forEach((value, index, arr) => {
        files.f2.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr03.returnData().forEach((value, index, arr) => {
        files.f3.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr04.returnData().forEach((value, index, arr) => {
        files.f4.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr05.returnData().forEach((value, index, arr) => {
        files.f5.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr06.returnData().forEach((value, index, arr) => {
        files.f6.push({ fileName: value.fileName, filePath: value.filePath });
      });
      this.$refs.fileArr07.returnData().forEach((value, index, arr) => {
        files.f7.push({ fileName: value.fileName, filePath: value.filePath });
      });

      this.$refs.fileArr08.returnData().forEach((value, index, arr) => {
        files.f8.push({ fileName: value.fileName, filePath: value.filePath });
      });
      //console.log(files);
      if (files.f1.length < 1) {
        //console.log(11);
        this.errorMessage = "企业营业执照必传";
        return;
      }
      if (files.f2.length < 1) {
        this.errorMessage = "企业三年一期财务报表必传";
        return;
      }
      this.errorMessage = "";
      getResult("post", "/enterprise/v1/update_enterdata", {
        enterpriseLicence: JSON.stringify(files.f1), //企业营业执照
        threeYearTaxReport: JSON.stringify(files.f2), //企业三年一期
        bossIdcardFront: JSON.stringify(files.f3), //企业营业执照
        bossIdcardBack: JSON.stringify(files.f4), //企业营业执照
        bossCreditReport: JSON.stringify(files.f5), //企业营业执照
        enterpriseCreditReport: JSON.stringify(files.f6), //企业营业执照
        lastYearAuditReport: JSON.stringify(files.f7), //企业营业执照
        coreEnterpriseDocFile: JSON.stringify(files.f8) //企业营业执照
      }).then(result => {
        if (result.result == 0) {
          //console.log(result);
        } else {
        }
      });
    }
  },
  mounted() {
    getResult("get", "/enterprise/v1/particular").then(res => {
      this.newfile = {
        f1: res.data.enterpriseLicence
          ? JSON.parse(res.data.enterpriseLicence)
          : [],
        f2: res.data.threeYearTaxReport
          ? JSON.parse(res.data.threeYearTaxReport)
          : [],
        f3: res.data.bossIdcardFront
          ? JSON.parse(res.data.bossIdcardFront)
          : [],
        f4: res.data.bossIdcardBack ? JSON.parse(res.data.bossIdcardBack) : [],
        f5: res.data.bossCreditReport
          ? JSON.parse(res.data.bossCreditReport)
          : [],
        f6: res.data.enterpriseCreditReport
          ? JSON.parse(res.data.enterpriseCreditReport)
          : [],
        f7: res.data.lastYearAuditReport
          ? JSON.parse(res.data.lastYearAuditReport)
          : [],
        f8: res.data.coreEnterpriseDoc
          ? JSON.parse(res.data.coreEnterpriseDoc)
          : []
      };
    });
    getResult("get", "/loan/v1/apply_list").then(res => {
        //console.log(res.data)
      if (res.data && res.data.length > 0) {
        res.data.forEach((value, index, arr) => {
          value.index = index + 1;
            value.financeAmt = toThousands(value.financeAmt)
        });
        this.detailList = res.data;
      }
    });
  }
};
</script>

<style  type="text/css" lang="less">
.infos-data2 {
  width: 1200px;
  margin: 0 auto;
  min-height: 1156px;
  background: #fbfdff;
  margin-top: 60px;
  .info-title {
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    height: 70px;
    line-height: 70px;
    span.title {
      float: left;
      font-size: 16px;
      color: #54b4fe;
      margin-left: 40px;
      img {
        vertical-align: text-top;
        width: 17px;
        margin-right: 20px;
      }
    }
    span.check {
      float: right;
      font-size: 16px;
      color: #ff9b38;
      margin-right: 30px;
    }
  }
  .infos-img {
    text-align: center;
    ul {
      display: inline-block;
      li {
        float: left;
        p {
          font-size: 14px;
          line-height: 30px;
        }
      }
      li.first {
        margin-right: 20px;
      }
      li.last {
        margin-left: 20px;
      }
      li.second {
        p {
          color: #54b4fe;
        }
      }
    }
  }
  .infos-upload {
    box-shadow: 0 0 20px #d4e6f5;
    width: 1080px;
    background: #fff;
    margin-left: 60px;
    .main {
      margin: 0 0 0 20px;
      .up-left {
        float: left;
        margin-right: 150px;
      }
      .up-right {
        float: left;
      }
    }
    .top{
      margin-top: 30px;
    }
    .line {
      border-bottom: 1px solid #f5f5f5;
      margin-bottom: 30px;
    }
    .tipms {
      font-size: 12px;
      color: #d9d9d9;
    }
    .info-last {
      text-align: center;
      padding-top: 60px;
      div {
        display: inline-block;
        width: 300px;
        height: 46px;
        text-align: center;
        background: #54b4fe;
        line-height: 46px;
        color: #fff;
        cursor: pointer;
      }
    }
    .error {
      padding: 10px 0;
      color: red;
      font-size: 14px;
    }
  }
  .infoDetail {
    box-shadow: 0 0 20px #d4e6f5;
    width: 1080px;
    min-height: 200px;
    background: #ffffff;
    margin-left: 60px;
    margin-top: 40px;
      margin-bottom: 60px;
    p {
      font-size: 16px;
      color: #54b4fe;
      line-height: 70px;
      padding-left: 40px;
      border-bottom: 1px solid #f5f5f5;
      height:70px;
      margin-bottom: 30px;
      img{
        vertical-align: text-top;
        width: 17px;
        margin-right: 20px;
      }
    }
    .bottom table {
      width: 1000px;
      margin-left: 40px;
    }
    .bottom table th {
      background: #f6f6f6;
      padding: 10px;
      width: 14%;
      font-size: 12px;
      text-align: center;
      color: #999;
    }
    .bottom table td {
      width: 14%;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      text-align: center;
      color: #999;
    }
    .bottom table td a {
      color: #54b4fe;
      // text-decoration: underline;
      cursor: pointer;
      width: 100%;
      display: block;
      height: 20px;
      text-align: left;
    }
    .bottom table tr:nth-child(odd){
    background: #f6fbff;
    }
    .empty-info{
      text-align: center;
      .img{
        margin: 100px 0 25px 0;
      }
      .text{
        color: #bbbbbb;
        margin-bottom: 100px;
        font-size: 12px;
      }

    }
  }
}
</style>
