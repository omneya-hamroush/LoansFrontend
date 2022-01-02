import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import HelloWorld from '../components/HelloWorld.vue'
import Provider from '../components/Provider.vue'
import Funds from '../components/Funds.vue'
import Amortization from '../components/Amortization.vue'
import FundApplications from '../components/FundApplications.vue'
import Customer from '../components/Customer.vue'
import LoanApplications from '../components/LoanApplications.vue'
import Loans from '../components/Loans.vue'
import BankP from '../components/BankP.vue'
import AllFunds from '../components/AllFunds.vue'
import AllLoans from '../components/AllLoans.vue'
import AddLoan from '../components/AddLoan.vue'
import AddFund from '../components/AddFund.vue'
import Payments from '../components/Payments.vue'
import Pay from '../components/Pay.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/login',
    name: 'login',
    component: HelloWorld
  },
  {
    path: '/provider',
    name: 'provider',
    component: Provider
  },
  {
    path: '/funds',
    name: 'funds',
    component: Funds
  },
  {
    path: '/amortization',
    name: 'amortization',
    component: Amortization
  },
  {
    path: '/fundapplications',
    name: 'fundapplications',
    component: FundApplications
  },
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  },
  {
    path: '/loans',
    name: 'loans',
    component: Loans
  },
  {
    path: '/loanapplications',
    name: 'loanapplications',
    component: LoanApplications
  },
  {
    path: '/bankp',
    name: 'bankp',
    component: BankP
  },
  {
    path: '/allfunds',
    name: 'allfunds',
    component: AllFunds
  },
  {
    path: '/allloans',
    name: 'allloans',
    component: AllLoans
  },
  {
    path: '/addfund',
    name: 'addfund',
    component: AddFund
  },
  {
    path: '/addloan',
    name: 'addloan',
    component: AddLoan
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
