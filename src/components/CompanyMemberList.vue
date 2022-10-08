<template>
  <div>
    <el-page-header @back="returnHelloWorld" content="公司人员信息列表">
    </el-page-header>
    <table style="height: 20%;width: 100%">
      <tr>
        <td><i class="el-icon-key">数据ID</i></td>
        <td>
          <el-input maxlength="20px" v-model="id" placeholder="请输入ID"></el-input>
        </td>
        <td><i class="el-icon-user-solid">姓名</i></td>
        <td>
          <el-input maxlength="20px" v-model="name" placeholder="请输入姓名"></el-input>
        </td>
        <td><i class="el-icon-phone">电话</i></td>
        <td>
          <el-input maxlength="20px" v-model="phone" placeholder="请输入电话"></el-input>
        </td>
      </tr>
      <tr>
        <td><i class="el-icon-message">邮箱</i></td>
        <td>
          <el-input maxlength="20px" v-model="email" placeholder="请输入邮箱"></el-input>
        </td>
        <td><i class="el-icon-house">组别</i></td>
        <td>
          <el-select v-model="group" placeholder="请选择" style="width: 100%">
            <el-option
              v-for="item in groups"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td><i class="el-icon-thumb">职位</i></td>
        <td>
          <el-select v-model="position" placeholder="请选择" style="width: 100%">
            <el-option
              v-for="item in positions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td><i class="el-icon-service">在职状态</i></td>
        <td>
          <el-select v-model="onTheJob" placeholder="请选择" style="width: 100%">
            <el-option
              v-for="item in onTheJobs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td><i class="el-icon-location">住址</i></td>
        <td>
          <el-input maxlength="20px" v-model="address" placeholder="请输入住址"></el-input>
        </td>
        <td colspan="2">
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
          <el-button native-type="reset" icon="el-icon-refresh-left" @click="reset">重置条件</el-button>
        </td>
      </tr>
    </table>
    <!--    数据表格-->
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
    <!--    分页组件-->
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

    <el-dialog title="更新人员信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ID" :label-width="formLabelWidth" prop="id" required>
          <el-input :disabled="true" v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属组别" :label-width="formLabelWidth">
          <el-select v-model="form.group" placeholder="请选择">
            <el-option
              v-for="item in groups"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="岗位" :label-width="formLabelWidth">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
          </el-checkbox>
          <el-checkbox-group v-model="form.position" @change="handleCheckedPositionsChange">
            <el-checkbox v-for="position in positions" :label="position.value" :key="position.value">
              {{ position.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="在职状态" :label-width="formLabelWidth">
          <el-select v-model="form.onTheJob" placeholder="请选择">
            <el-option
              v-for="item in onTheJobs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="住址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="commit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {getCompanyAll, updateCompanyInfo, updateCompanyStatus} from "@/api"

export default {
  name: "CompanyMemberList",
  components: {},
  data() {
    return {
      // 表格数据
      tableData: [],
      // 数据总量
      tableTotal: 0,
      // 当前页
      currentPage: 1,
      // 每页显示的数据量
      pageSize: 10,
      // 查询条件id
      id: '',
      // 查询条件name
      name: '',
      // 查询条件phone
      phone: '',
      // 查询条件email
      email: '',
      // 查询条件group
      group: '',
      // 查询条件position
      position: null,
      // 查询条件 onTheJob
      onTheJob: true,
      // 查询条件address
      address: '',
      // 组别下拉选值
      groups: [
        {
          value: 1,
          label: '一组'
        }, {
          value: 2,
          label: '二组'
        }, {
          value: 3,
          label: '三组'
        }, {
          value: 4,
          label: '四组'
        }, {
          value: 5,
          label: '五组'
        }, {
          value: 6,
          label: '六组'
        }
        ],
      // 岗位下拉选值
      positions: [
        {value: 0, label: '项目经理'},
        {value: 1, label: '员工'},
        {value: 2, label: '驻场经理'},
        {value: 3, label: '经理助手'},
        {value: 4, label: '技术总监'},
        {value: 5, label: '小组组长'}],
      // 在职状态下拉选值
      onTheJobs: [
        {value: true, label: '在职'},
        {value: false, label: '离职'}
      ],
      dialogFormVisible: false,
      // 每行数据和更新表单的数据
      form: {
        id: null,
        name: '',
        phone: '',
        email: '',
        group: null,
        position: [],
        onTheJob: true,
        address: ''
      },
      // 表格每项的label宽度
      formLabelWidth: '50px',
      // 全选选项是否选中
      checkAll: false,
      //
      isIndeterminate: false,
      // 定义验证规则
      rule: {
        id: [
          { required: true, message: '请输ID', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],

      }
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
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, this.currentPage, this.pageSize, null);
    },

    /**
     * 每页数据量发生改变时的回调函数
     *
     * @param size 入参,每页显示的数据条数
     */
    handleSizeChange(size) {
      this.pageSize = size;
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, 1, size, null);
    },

    /**
     * 当前页面发生改变时回调函数
     *
     * @param currentPage 当前页
     */
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, currentPage, this.pageSize, null);
    },

    /**
     * 上一页按钮点击回调函数
     *
     * @param currentPage 当前页
     */
    handlePrevChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, this.currentPage, this.pageSize, null);
    },

    /**
     * 下一页按钮点击回调函数
     *
     * @param currentPage 当前页
     */
    handleNextChange(currentPage) {
      this.currentPage = currentPage;
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, this.currentPage, this.pageSize, null);
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
      let array = [];
      this.dialogFormVisible = true;
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.phone = row.phone;
      this.form.email = row.email;
      this.form.group = row.group;
      this.form.onTheJob = row.onTheJob;
      row.position.split(",").forEach(item => {
        array.push(parseInt(item))
      })
      this.form.position = array;
      this.form.address = row.address;
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
        let opt;
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
        this.handleCurrentChange(this.currentPage);
      })
    },

    /**
     * 搜索按钮点击函数
     */
    search() {
      this.requestData(this.id, this.name, this.phone, this.email, this.group, this.position, this.onTheJob, this.address, 1, this.pageSize, null);
    },

    /**
     * 重置查询条件
     */
    reset() {
      this.id = '';
      this.name = '';
      this.phone = '';
      this.email = '';
      this.group = '';
      this.position = null;
      this.onTheJob = true;
      this.address = '';
    },

    /**
     * 全选按钮
     *
     * @param val 全选
     */
    handleCheckAllChange(val) {
      let array = [];
      this.positions.forEach(item => {
        array.push(item.value)
      })
      this.form.position = val ? array : [];
      this.isIndeterminate = false;
    },

    /**
     * 单个选中
     *
     * @param value 单个对象
     */
    handleCheckedPositionsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.positions.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.positions.length;
    },

    /**
     * 编辑界面,取消按钮点击事件
     */
    cancel() {
      this.dialogFormVisible = false
    },

    /**
     * 编辑界面,确定按钮
     */
    commit() {
      console.log(this.form)
      let param = {
        id: this.form.id,
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        group: this.form.group,
        position: '',
        onTheJob: this.form.onTheJob,
        address: this.form.address
      }
      let position = '';
      this.form.position.forEach(item => {
        position += item + ','
      })
      param.position = position.substring(0, position.lastIndexOf(','))
      updateCompanyInfo(param).then((res) => {
        if (res.code === 200) {
          this.$notify({
            title: '成功',
            message: '更新成功',
            type: 'success'
          });
        } else {
          this.$notify.error({
            title: '错误',
            message: '更新失败,失败原因: ' + res.message
          });
        }
        this.dialogFormVisible = false
        this.handleCurrentChange(this.currentPage);
      })
    }
  }
}
</script>

<style scoped>

</style>
