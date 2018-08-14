import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register/register';
import Next from '@/components/register/next';
import Last from '@/components/register/last';
import Data from '@/components/data/data';
import Data2 from '@/components/data/data2';
import Data3 from '@/components/data/data3';
import File from '@/components/file/file';
import Finance from '@/components/finance/finance';
import Finance2 from '@/components/finance/finance2';
import Home from '@/components/home/home';
import Info from '@/components/info/info';
import Info2 from '@/components/info/info2';
import Info3 from '@/components/info/info3';
import Reset from '@/components/register/reset';
import Myfinance from '@/components/myfinance/myfinance';
import MyfinanceDetail from '@/components/myfinance/myfinanceDetail';
import Login from '@/components/register/login';
import Reset2 from '@/components/register/reset2';
import Reset3 from '@/components/register/reset3';
import Agreement from '@/components/register/agreement';
import Calculate from '@/components/calculate/calculate';

/*
* 2.0版本
* */
import MyHome from '@/components/home/myHome';
import NewFinance from '@/components/finance/newFinance';
import Apply from '@/components/myfinance/apply';
import Repayment from '@/components/repayment/repayment';
import User from '@/components/user/user';

import Myinfo from '@/components/info/myinfo';

import Factor from '@/components/factor/factor';

import Protocal from '@/components/info/protocal';
import Sign from '@/components/info/sign';
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
        {
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/next',
			name: 'next',
			component: Next,
		},
		{
			path: '/last',
			name: 'last',
			component: Last,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
        {
            path: '/file',
            name: 'file',
            component: File
        },

        {
			path: '/myHome/data',
			name: 'data',
			component: Data
		},
		{
			path: '/myHome/data2',
			component: Data2
		},
		{
			path: '/myHome/data3',
			name: 'data3',
			component: Data3
		},

		{
			path: '/finance',
			name: 'finance',
			component: Finance
		},
		{
			path: '/myfinance/finance2',
			name: 'finance2',
			component: Finance2
		},
		{
			path: '/info',
			name: 'info',
			component: Info
		},
		{
			path: '/info2',
			name: 'info2',
			component: Info2
		},


		{
			path: '/info3',
			name: 'info3',
			component: Info3
		},


		{
			path: '/myfinance',
			name: 'myfinance',
			component: Myfinance
		},
        {
            path: '/myfinance/myfinanceDetail',
            name: 'myfinanceDetail',
            component: MyfinanceDetail
        },


        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },

        {
            path: '/reset',
            name: 'reset',
            component: Reset
        },
        {
            path: '/reset2',
            name: 'reset2',
            component: Reset2
        },
        {
            path: '/reset3',
            name: 'reset3',
            component: Reset3
        },


        /*
        * 2.0版本
        * */
        {
            path: '/myHome',
            name: 'myHome',
            component: MyHome
        },
        {
            path: '/newFinance',
            name: 'newFinance',
            component: NewFinance
        },
        {
            path: '/apply',
            name: 'apply',
            component: Apply
        },
        {
            path: '/repayment',
            name: 'repayment',
            component: Repayment
        },
        {
            path: '/user',
            name: 'user',
            component: User
		},
		{
            path: '/myinfo',
            name: 'myinfo',
            component: Myinfo
        },
        {
            path: '/factor',
            name: 'factor',
            component: Factor
		},
		{
            path: '/protocal',
            name: 'protocal',
            component: Protocal
		},
		{
            path: '/sign',
            name: 'sign',
            component: Sign
        },
				{
		            path: '/calculate',
		            name: 'calculate',
		            component: Calculate
		        },

		{ path: '*', redirect: { name: "myHome" } }
	]
})
