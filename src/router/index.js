import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompanyMemberList from '@/components/CompanyMemberList'
import QrCodePage from "@/components/QrCodePage.vue";
import ExcelCheckPage from "@/components/ExcelCheckPage.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/CompanyMemberList',
      name: 'CompanyMemberList',
      component: CompanyMemberList
    },
    {
      path: '/GoToQrCodePage',
      name: 'GoToQrCodePage',
      component: QrCodePage
    },
    {
      path: '/GoToExcelCheckPage',
      name: 'GoToExcelCheckPage',
      component: ExcelCheckPage
    }
  ]
})
