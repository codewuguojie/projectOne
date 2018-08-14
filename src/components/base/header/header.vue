<template>
	<div class="header">
        <div class="head">
            <div class="title">
                <img src="./img/index.svg"/><a href="https://www.micfinance.com/"  target="_blank">米筹金服首页</a>
                <div class="wxcode" v-on:mouseover="totrueone" v-on:mouseout="tofalseone">联系我们</div>
                <div class="box one" v-show="noyes" v-on:mouseover="totruetwo" v-on:mouseout="tofalsetwo">
                    <div class="cor"></div>
                    <img src="./img/code.png" class="code">
                </div>
                <div class="us" v-on:mouseover="totruetwo" v-on:mouseout="tofalsetwo">微信号</div>
                <div class="box two" v-show="yes" v-on:mouseover="totrueone" v-on:mouseout="tofalseone">
                    <div class="cor"></div>
                    <div class="phone">
                        <p>
                            <span>客服电话：</span>
                            <b>021-20702568</b>
                            <b>021-20702569</b>

                        </p>
                    </div>
                </div>
            </div>
        </div>

		<div class="content">
            <div class="nav">
                <h1 class="logo left" @click="goHome"><img src="./img/scf_logo.svg"></h1>
                <div class="login" v-text="title" >登陆注册</div>
                <ul class="left" v-show="isLogin">
                    <li class="left"><router-link :to="{name:'myHome'}">首页</router-link></li>
                    <!-- <li class="left"><router-link :to="{name:user?'factor':'login'}">保理专户</router-link></li> -->
                    <li class="left"><router-link :to="{name:user?'newFinance':'login'}">我的融资</router-link></li>
                    <li class="left"><router-link :to="{name:user?'protocal':'login'}">我的协议</router-link></li>
                    <li class="left"><router-link :to="{name:user?'myinfo':'login'}">我的资料</router-link></li>
                    <li class="left"><router-link :to="{name:user?'user':'login'}">账户中心</router-link></li>
                </ul>
                <div class="header_login right" v-show="showLogin">
                    <span class="gologin" @click="goLogin">登录 /</span>
                    <span class="goregister" @click="goRegister">注册</span>
                </div>
                <div class="header_user right" v-show="showDetail">
                    <span class="infos"><router-link :to="{name:'info3'}">{{username | cutoutNum}}</router-link>&nbsp;&nbsp;&nbsp;</span>


                    <span class="exit" @click="userExit()">退出</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getResult } from "api/common"; //导入api
export default {
  data() {
    return {
        username:"",
        showDetail:false,
        showLogin:true,
        info:'info',
        user:'',
        yes:false,
        noyes:false,
        enterpriseName:''
    };
  },
  props: {
        title:String,
        isLogin:Boolean,


  },
  methods: {

      totrueone(){
          this.yes = true;
      },
      tofalseone(){
          this.yes = false;
      },
      totruetwo(){
          this.noyes = true;
      },
      tofalsetwo(){
          this.noyes = false;
      },


      goHome(){
          this.$router.push({path:'/home'})
      },
      goLogin(){
          this.$router.push({path:'/login'})
      },
      goRegister(){
          this.$router.push({path:'/register'})
      },
      userExit(){
          getResult('post','/user/v1/logout').then(res=>{
            if(res.result == 0){
                this.showDetail = false;
                this.showLogin = true;
                this.$router.push({path:'/myHome'})
                window.location.reload()
            }

        })
      },

  },
  mounted() {
        getResult('get','/user/v1/curruser').then(res=>{
            if(res.result == 0){
                //console.log(res.data)
                this.user = true;

                this.showDetail = true;
                this.showLogin = false;
                this.username = res.data.username;
                getResult('get','/enterprise/v1/basic').then(res=>{
                    if(res.result === 0 ){
                        this.enterpriseName = res.data.enterpriseName?res.data.enterpriseName:'';
                    }else{
                        this.$router.push({path:'/next'});
                    }
                })
            }else {
                this.user = false;
            }
        })

        getResult('get','/enterprise/v1/particular').then(res=>{
            //console.log(res.data)
            if(res.result == 0){
                this.info = 'info2';
            }else{
                this.info = 'info';
            }
        })

    }
};
</script>

<style scoped="" lang="less">

.header {
  width: 100%;
  background: #ffffff;
}
.header .head{
    width: 100%;
    background: #f6f6f6;
  }
.header .title {
  margin: 0 auto;
  width: 1200px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  color:#666666;
    position: relative;
}
.header .title img{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    line-height: 30px;
}
.header .title .wxcode,.header .title .us{
    display: inline-block;
    line-height: 30px;
    float: right;
    cursor: pointer;
}
.header .title .us{
    margin-right: 40px;
}

.header .title .box{
    position: absolute;
}
.header .title .one{
    width: 100px;
    height: 96px;
    zoom: 1;
    top: 30px;
    right: 65px;
    box-shadow: 0 0 4px #e2e4e6;
}

.header .title .one .cor{
    width: 0;
    height: 0;
    border-bottom: 5px solid #fff;
    border-top: 0 solid #fff;
    border-left: 5px solid #fff;
    border-right: 5px solid #fff;
    margin: -5px auto 0;
}
.header .title .one img{
    display: block;
    width: 100px;
    height: 96px;
}

.header .title .two{
    width: 182px;
    height: 95px;
    background: #fff;
    top: 30px;
    right: -64px;
    box-shadow: 0 0 4px #e2e4e6;
}
.header .title .two .cor{
    width: 0;
    height: 0;
    border-bottom: 5px solid #fff;
    border-top: 0 solid #fff;
    border-left: 5px solid #fff;
    border-right: 5px solid #fff;
    margin: -5px auto 0;
}
.header .title .two .phone{
    margin: 15px;
    font-size: 12px;
}
.header .title .two .phone p:nth-child(1){
    margin-bottom: 20px;
}
.header .title .two .phone p{
    overflow: hidden;
    clear: both;
    margin-top: 30px;
}
.header .title .two .phone p span{
    float: left;
}
.header .title .two .phone p b{
    float: right;
    margin: 0 0 10px 0;
}



.header .title a{

    line-height: 30px;
}

/*nav*/
 .content{
    width: 1200PX;
    margin: 0 auto;
}
 .content .nav{
    width: 100%;
    height: 100px;/*
    background: #ccc;*/
}
 .content .nav .logo{
    margin-top: 33px;
    margin-right: 45px;
    width: 170px;
    height: 30px;
}
 .content .nav .logo img{
    display: block;
    width: 100%;
    height: 100%;
}
.content .nav .logo img:hover{
    cursor: pointer;
}
 .content ul{
    height: 100px;
    font-size: 18px;
    font-weight: bold;
}
 .content ul li{
    color: #333;
    height: 100px;
    line-height: 100px;
    list-style: none;
    padding: 0 30px;
    cursor: pointer;
    font-weight: 400;
}
 .content ul li a{
     display: inline-block;
     height: 70px;
 }
 .content ul li p{
    height: 70px;
}
 .content .header_login{
    width: 100px;
    height: 35px;
    color: #54b4fe;
    margin-top: 30px;
    overflow: hidden;
     border: 1px solid #54b4fe;
     line-height: 35px;
     text-align: center;
     font-size: 14px;
}
 .content .header_login span{
     cursor: pointer;
}
.content .login{
    float: left;
    line-height: 100px;
    color: #54b4fe;
    font-size: 18px;
}
.router-link{
    color: #bbb;
}
.router-link-active{
    color: #54b4fe;
    border-bottom: 3px solid #54b4fe;
}
.header_user{
    margin-top: 42px;
    font-size: 14px;
    .infos{
        a{
            text-decoration: none;
            color: #54b4fe;
        }
    }
    .exit{
        cursor: pointer;
        a{
            color:#999999;
            text-decoration: none;
            border-bottom:0;

        }

    }
}
</style>
