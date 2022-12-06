<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="excel信息检查页面" style="margin-top: -2%">
    </el-page-header>
    <h1>excel 检查界面</h1>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
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
