<template>


<div class="upload-box" ref="box">
    <v-header :isLogin="islogin"></v-header>

    <div class="mid" ref="mgb">

        <div class="text">
            <h2>文档下载</h2>
            <div class="wenben">
                <h4><img src="./img/file.png">合同下载：</h4>
                <a class="left" :href="`${staticUrl}${imgpath}`">{{imgname}}</a>
                <a class="left" :href="`${staticUrl}${pptpath}`">{{pptname}}</a>
                <a class="left" :href="`${staticUrl}${docpath}`">{{docname}}</a>
                <a class="left" :href="`${staticUrl}${pdfpath}`">{{pdfname}}</a>
            </div>
            <div class="tips">
                请下载合同，填好、盖章，邮寄，合同签订好后，将为您提供融资服务。如填写有问题请联系您的专属项目经理。
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
import { hostUrl,getResult,staticUrl } from "api/common"; //导入api
import axios from "axios";
export default {
    components: {
        "v-header": header,
        "v-footer":footer
    },
    data() {
        return {
        phoneNum: "",
        islogin:true,
        imgpath:'',
        docpath:'',
        pptpath:'',
        pdfpath:'',
        imgname:'',
        docname:'',
        pptname:'',
        pdfname:'',
        staticUrl:staticUrl(),
        // imgUrls: "http://scfapi.online.com/basics/v1/open/basics/imgcode",
        imgUrl: `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`
        }
    },
    methods: {
        getImgCode() {
            this.imgUrl = `${hostUrl}/basics/v1/open/basics/imgcode?${new Date()}`;
        },

    },
    mounted() {
        //console.log(1)

        /*let cur = document.querySelectorAll("div[class='upload-box']");
	      console.log(cur);
	      let curHeight = cur[0].clientHeight;
	      console.log(curHeight);
	      let ht = document.documentElement.clientHeight;
	      console.log(ht)
	    if(curHeight<=ht){
	      this.$refs.mgb.style.marginBottom = (ht - 50) - (curHeight + 50) + 58+ 'px'
	    }*/

        let _this = this;
        _this.imgpath='';
        _this.docpath='';
        _this.pptpath='';
        _this.pdfpath='';
        _this.imgname='';
        _this.docname='';
        _this.pptname='';
        _this.pdfname='';
        getResult('get','/basics/v1/open/content/list/contractdoc_download')
            .then((msg)=>{
               // console.log(msg)
                //console.log(msg.data[0].path)
                //console.log(msg.data[1].path)
                //console.log(msg.data[2].path)
               // console.log(msg.data[3].path)
               // console.log(msg.data[0].fileName)
                //console.log(msg.data[1].fileName)
               // console.log(msg.data[2].fileName)
               // console.log(msg.data[3].fileName)
                _this.imgpath = msg.data[0].path;
                _this.docpath=  msg.data[2].path;
                _this.pptpath= msg.data[1].path;
                _this.pdfpath= msg.data[3].path;
                _this.imgname = msg.data[0].fileName;
                _this.docname=  msg.data[2].fileName;
                _this.pptname= msg.data[1].fileName;
                _this.pdfname= msg.data[3].fileName;
                //this.$router.push({path:''})
            }).catch((rsg)=>{
                //console.log(3)
        })
        //console.log(_this.imgpath);
    }
};
</script>

<style scoped type="text/css" lang="less">

</style>
