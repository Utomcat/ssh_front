<template>
  <div class="hello">
  <img id="logo" src="@/assets/logo.png" alt="logo">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <el-link @click="jumpCompanyMemberList()" type="primary">公司人员信息列表</el-link>
      </li>
      <li>
        <el-link @click="jumpQrCodePage()" type="primary">二维码信息检查</el-link>
      </li>
      <li>
        <el-link @click="jumpExcelCheckPage()" type="primary">excel信息检查</el-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    jumpCompanyMemberList(){
      this.$router.push('/CompanyMemberList')
    },
    jumpQrCodePage(){
      this.$router.push('/GoToQrCodePage')
    },
    jumpExcelCheckPage(){
      this.$router.push('/GoToExcelCheckPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
