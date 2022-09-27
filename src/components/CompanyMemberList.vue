<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="公司人员信息列表">
    </el-page-header>
    <table style="height: 20px">
      <tr>
        <td><i class="el-icon-key">ID</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
        <td><i class="el-icon-user-solid">name</i></td>
        <td><el-input maxlength="20px" v-model="name" placeholder="请输入姓名"></el-input></td>
        <td><i class="el-icon-key">phone</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
      </tr>
      <tr>
        <td><i class="el-icon-key">email</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
        <td><i class="el-icon-key">group</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
        <td><i class="el-icon-key">position</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
      </tr>
      <tr>
        <td><i class="el-icon-key">onTheJob</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
        <td><i class="el-icon-key">address</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>

      </tr>
      <tr>
        <td><i class="el-icon-key">ID</i></td>
        <td><el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input></td>
      </tr>
    </table>
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
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type='danger'
            @click="handleDelete(scope.$index, scope.row)">{{ scope.row.onTheJob ? '离职' : '在职' }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="handlePrevChange"
        @next-click="handleNextChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getCompanyAll, updateCompanyStatus} from "@/api"

export default {
  name: "CompanyMemberList",
  data() {
    return {
      tableData: [],
      tableTotal: 0,
      currentPage: 1,
      pageSize: 10,
      id:'',
      name:''
    }
  },
  created() {
    this.loadTableData();
  },
  methods: {
    /**
     * 在职状态回调渲染函数
     *
     * @param row
     * @param column
     * @param cellValue
     * @param index
     * @returns {string}
     */
    formatterOnTheJob(row, column, cellValue, index) {
      if (cellValue) {
        return "在职";
      } else {
        return "离职";
      }
    },

    /**
     * 邮件回调渲染函数
     *
     * @param row
     * @param column
     * @param cellValue
     * @param index
     * @returns {string|*}
     */
    formatterEmail(row, column, cellValue, index) {
      if (cellValue !== '1') {
        return cellValue
      } else {
        return '-'
      }
    },

    /**
     * 岗位回调渲染函数
     *
     * @param row
     * @param column
     * @param cellValue
     * @param index
     * @returns {string}
     */
    formatterPosition(row, column, cellValue, index) {
      let splitStr = cellValue.split(",");
      let result = '';
      splitStr.forEach(item => {
        switch (item) {
          case '0':
            result += '项目经理,'
            break;
          case '1':
            result += '员工,'
            break;
          case '2':
            result += '驻场经理,'
            break;
          case '3':
            result += '经理助手,'
            break;
          case '4':
            result += '技术总监,'
            break;
          case '5':
            result += '小组组长,'
            break;
          default:
            result += '-,'
            break;
        }
      })
      result = result.substring(0, result.lastIndexOf(','))
      return result
    },

    /**
     * 返回系统初始页面函数
     */
    returnHelloWorld() {
      this.$router.push('/')
    },

    /**
     * 进入当前页面加载表格数据
     */
    loadTableData() {
      this.requestData(null, null, null, null, null, null, null, null, this.currentPage, this.pageSize, null);
    },

    /**
     * 每页数据量发生改变时的回调函数
     *
     * @param size 入参,每页显示的数据条数
     */
    handleSizeChange(size) {
      this.pageSize = size;
      this.requestData(null, null, null, null, null, null, null, null, null, size, null);
    },

    /**
     * 当前页面发生改变时回调函数
     *
     * @param currentPage 当前页
     */
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(null, null, null, null, null, null, null, null, currentPage, this.pageSize, null);
    },

    /**
     * 上一页按钮点击回调函数
     *
     * @param currentPage 当前页
     */
    handlePrevChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(null, null, null, null, null, null, null, null, this.currentPage, this.pageSize, null);
    },

    /**
     * 下一页按钮点击回调函数
     *
     * @param currentPage 当前页
     */
    handleNextChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(null, null, null, null, null, null, null, null, this.currentPage, this.pageSize, null);
    },

    /**
     * 后台数据请求,携带查询条件和分页条件
     *
     * @param id  查询条件-数据ID
     * @param name 查询条件-数据name
     * @param phone 查询条件-数据phone
     * @param email 查询条件-数据email
     * @param group 查询条件-数据group
     * @param position 查询条件-数据position
     * @param onTheJob 查询条件-数据onTheJob
     * @param address 查询条件-数据address
     * @param currentPage 分页条件-当前页
     * @param pageSize 分页条件-每页查询数据量
     * @param orders 排序条件-排序数组
     */
    requestData(id, name, phone, email, group, position, onTheJob, address, currentPage, pageSize, orders) {
      let param = {
        "company": {
          "id": id,
          "name": name,
          "phone": phone,
          "email": email,
          "group": group,
          "position": position,
          "onTheJob": onTheJob,
          "address": address
        },
        "pageNumber": currentPage,
        "pageSize": pageSize,
        "orders": orders
      }
      getCompanyAll(param).then((res) => {
        this.tableData = res.data.tableData;
        this.currentPage = res.data.currentPage;
        this.tableTotal = res.data.tableTotal;
        this.pageSize = res.data.pageSize;
      })
    },

    /**
     * 编辑人员信息函数
     *
     * @param index
     * @param row
     */
    handleEdit(index, row) {
      console.log(index)
      console.log(row)
    },

    /**
     * 更新人员状态函数
     *
     * @param index
     * @param row
     */
    handleDelete(index, row) {
      let member = {id: row.id, onTheJob: !row.onTheJob}
      updateCompanyStatus(member).then((res) => {
        const h = this.$createElement;
        let typ;
        let  opt;
        if (res.code !== 200) {
          typ = 'error'
          opt = '操作失败'
        } else {
          typ = 'success'
          opt = '操作成功'
        }
        this.$notify({
          type: typ,
          title: opt,
          message: h('i', {style: 'color: teal'}, res.message)
        });
        this.handleCurrentChange( this.currentPage);
      })
    }

  }
}
</script>

<style scoped>

</style>
