<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="二维码填报信息检查页面" style="margin-top: -2%">
    </el-page-header>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="qrInfo" style="margin: 20px 0;">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "QrCodePage",
  data() {
    return {
      qrInfo: ''
    }
  },
  methods:{
    /**
     * 返回系统初始页面函数
     */
    returnHelloWorld() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
