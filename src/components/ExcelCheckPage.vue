<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="excel信息检查页面" style="margin-top: -2%">
    </el-page-header>
    <h1>excel 检查界面</h1>
  </div>
</template>

<script>
export default {
  name: "ExcelCheckPage",
  data() {
    return {}
  },
  methods: {
    /**
     * 返回系统初始页面函数
     */
    returnHelloWorld() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>

</style>
