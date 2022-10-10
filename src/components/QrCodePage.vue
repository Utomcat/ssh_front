<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="二维码填报信息检查页面" style="margin-top: -2%">
    </el-page-header>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="qrInfo" style="margin: 20px 0;" @change="checkQr">
    </el-input>
    <el-table
      :data="tableData"
      v-if="show" style="width: 10%">
      <el-table-column
        prop="name"
        label="未填写二维码人员"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {checkQrInfo} from "@/api";

export default {
  name: "QrCodePage",
  data() {
    return {
      qrInfo: '',
      show: false,
      tableData: []
    }
  },
  methods: {
    /**
     * 返回系统初始页面函数
     */
    returnHelloWorld() {
      this.$router.push('/')
    },

    checkQr() {
      checkQrInfo(JSON.stringify({'code': this.qrInfo}))
        .then((res) => {
          if (res.status && res.code === 200) {
            if (res.data) {
              this.tableData = res.data;
              this.show = true
            } else {
              const h = this.$createElement;
              this.$notify({
                title: '二维码解析结果',
                message: h('i', {style: 'color: teal'}, res.message)
              });
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
