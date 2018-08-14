<template>

    <div class="factor">
        <v-header :isLogin="islogin"></v-header>

        <div class="content">
            <div class="position">
                <img src="./img/position.png"/>
                <span>当前位置 > 保理专户 > 提现</span>
            </div>
            <div class="process">
                <div class="L-top">
                    <img src="./img/factor.png"/>
                    <span>提现</span>
                </div>
            </div>
            <div class="turnOut">

            </div>
        </div>

        <v-footer></v-footer>
    </div>

</template>

<script>
    import header from "@/components/base/header/header";
    import footer from "@/components/base/footer/footer";
    import modal from "@/components/base/modal/modal"
    export default {
        name: "factor",
        components:{
            "v-header": header,
            "v-footer": footer,
            "v-modal": modal
        },
        data() {
            return {
                islogin: true,
            }
        },
    }
</script>

<style scoped lang="scss">
@import "../../assets/sass/factor";
</style>
