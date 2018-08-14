<template>
    <div class="supply">
        <v-header></v-header>
        <div class="main">
            <div class="container">

                <div class="top">
                    <ul class="clearfix">
                        <li class="img"><p><img src="./img/login10.png"></p><p class="p2 unactive">验证手机号</p></li>
                        <li class="img"><p class="p1"><img src="./img/login06.png"></p></li>
                        <li class="img"><p><img src="./img/login02.png"></p><p class="p2 unactive">设置新密码</p></li>
                        <li class="img"><p class="p1"><img src="./img/login07.png"></p></li>
                        <li class="img"><p><img src="./img/login05.png"></p><p class="p2 active">修改成功</p></li>
                    </ul>
                </div>
                <form class="form-edit form-last">
                    <div class="phone">
                        <div class="success"><img src="./img/login09.png"></div>
                        <p class="p2">修改密码成功</p>
                    </div>

                    <div class="phone">
                        <div class="submit-last" @click="goLogin()">去登录</div>
                    </div>
                </form>


            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    export default {
        components:{
            "v-header": header,
            "v-footer": footer
        },
        data() {
            return {
                phoneNum: "",
                seconds: 5,
                timer:''
            };
        },
        methods: {
            countDown() {
                this.timer = setInterval(() => {
                    this.seconds--;
                    //console.log(this.seconds);
                    if (this.seconds == 0) {
                        this.$router.push({name: "login" });
                        window.clearInterval(this.timer);
                    }
                }, 1000);
            },
            goLogin(){
                this.$router.push({path:'/login'})
            }
        },
        mounted() {
            this.countDown();
        }
    }
</script>

<style scoped type="text/css" lang="less">
    .top .active {
        color: #54b4fe;
    }
    .submit a {
        width: 100%;
        height: 100%;
        display: block;
    }
    #second{
        font-size: 16px;
    }
    .supply .main .container {
        height: 850px;
        background-image: url("./img/login0.jpg");
        .title{
            margin: 243px 0 60px 490px;
            text-align: center;
            font-size: 22px;
            color: #54b4fe;
        }
        .form-edit{
            float: right;
            margin-right: 60px;
        }
        .form-last{
            margin-right: 204px;
        }
        .submit-last{
            height: 44px;
            font-size: 14px;
            text-align: center;
            line-height: 44px;
            color: #fff;
            background: #54b4fe;
            cursor: pointer;
            width: 300px;
            margin-top: 110px;
        }
    }
</style>
