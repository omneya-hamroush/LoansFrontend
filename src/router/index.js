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
