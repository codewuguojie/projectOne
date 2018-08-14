/**
 * Created by wnn on 2018/4/24.
 */
/*
* 调后台api的公共方法

* */
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs' /*用来解析axios传参的数据格式*/
var root = process.env.API_ROOT;
export function staticUrl(){
    let url = '';
    if(process.env.API_ROOT === 'https://loan.micfunding.com/api'){ //测试
        url = 'https://scfoss.micfunding.com';
    }else if(process.env.API_ROOT === 'https://loan.micfinance.com/api'){//生产
        url = 'https://scfoss.micfinance.com';
    }else {//开发
        url = 'https://scfoss.micfunding.com';
    }
    return url
}
export const hostUrl = process.env.API_ROOT;

/**
 * root="https://scfapi.micfunding.com";
 * axios.defaults.withCredentials=true;配置跨域
 */

export function getResult(method, url, data) {
    
    if(url === '/user/v1/curruser' || url === '/enterprise/v1/basic' || url === "/enterprise/v1/particular"){
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: `${root + url}`,
                data: data || '',
                withCredentials: true,
            }).then((result) => {
                resolve(result.data)
            }).catch((result) => {
                reject(result.data);
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: `${root + url}`,
                data: data || '',
                withCredentials: true,
            }).then((result) => {
                if(result.data.result === -2){
                    window.location.href="/#/login";
                }
                resolve(result.data)
            }).catch((result) => {
                reject(result.data);
            })
        })
    }
}
//格式日期
export function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 11 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate()+1<11 ? '0'+date.getDate() : date.getDate();
    return Y+M+D;
  }

export  function toThousands(num) {
    var num_str = num.toFixed(2)
    var sum  = num_str.split(".")[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')+'.'+num_str.split(".")[1]
    return sum
}


