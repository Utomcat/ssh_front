<template>
  <div>
    <el-link @click="returnHelloWorld()" type="primary" style="margin-left: -98%;margin-bottom: 1%">返回</el-link>
    <el-table
      :data="tableData"
      border
      height="774px"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="ID"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="90">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="230" :formatter="formatterEmail">
      </el-table-column>
      <el-table-column
        prop="group"
        label="组别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="180" :formatter="formatterPosition">
      </el-table-column>
      <el-table-column
        prop="onTheJob"
        label="在职状态"
        width="180" :formatter="formatterOnTheJob">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getCompanyAll} from "@/api"

export default {
  name: "CompanyMemberList",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.loadTableData();
  },
  methods: {
    formatterOnTheJob(row, column, cellValue, index) {
      if (cellValue) {
        return "在职";
      } else {
        return "离职";
      }
    },
    formatterEmail(row, column, cellValue, index) {
      if (cellValue !== '1') {
        return cellValue
      } else {
        return '-'
      }
    },

    formatterPosition(row, column, cellValue, index) {

      switch (cellValue) {
        case '2':
          return ''
        case '1':
        default:
          return '员工'
      }
    },
    returnHelloWorld() {
      this.$router.push('/')
    },
    loadTableData() {
      getCompanyAll().then((res) => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
