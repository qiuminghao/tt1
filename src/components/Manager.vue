<template>
  <div class="scene-container">
    <el-card class="card1">
      <el-row :gutter="20">
        <el-col :span="8">
          <!--添加一个模糊查询的id-->
          <el-input placeholder="请输入内容"  v-model="queryInfo.name" clearable @click="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="onAdd"></el-button>
          </el-input>
        </el-col>
        <!--添加一个用户-->
        <el-col :span="4">
          <!--把对话框功能设为true-->
        <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
      </el-col>
        <!--对话框的功能-->
        <el-dialog
          title="添加用户"
          :visible.sync="addDialogVisible"
          width="30%"
          :before-close="handleClose">
          <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px">
            <!--被form绑定的表单 ，提交的时候直接提交form的绑定信息就行了model-->
            <el-form-item label="账号" prop="id">
              <el-input v-model="addForm.username"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input v-model="addForm.username"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
        </el-dialog>
      </el-row>
      <div class="table-section">
        <!--data指定数据源 userlist数组-->
        <el-table :data="userList"
                  :header-cell-style="tableHeaderColor"
                  ref="multipleTable"
                  style="width: 100%"
                  :row-class-name="tableRowClassName"
                  border
                  size="small"
                  @selection-change="handleSelectionChange">
          <!--指定渲染的对象-->
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column type="index" label="序号" width="30" align="center"></el-table-column>
          <el-table-column prop="id" label="账号" width="100" align="center"></el-table-column>
          <el-table-column prop="name" label="昵称" width="100" align="center"></el-table-column>
          <el-table-column prop="last_login_time" label="上次登陆时间" align="center"></el-table-column>
          <el-table-column prop="last_login_ip" label="上次登录IP" align="center"></el-table-column>
          <el-table-column prop="title" label="是否超管员" width="100" align="center"></el-table-column>
          <el-table-column prop="content" label="管理员房卡" width="100" align="center"></el-table-column>
          <el-table-column prop="date" label="创建时间" width="100" align="center"></el-table-column>
          <el-table-column label="删除" fixed="right" align="center" width="70">
            <template slot-scope="scope" width="100">
              <el-button size="mini" type="danger" icon="el-icon-delete"
                @click="removeUserById(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
          <!--修改按钮-->
          <el-table-column label="修改" fixed="right" align="center" width="70">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" icon="el-icon-view"
                @click="showDialogVisible(scope.row.id)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="queryInfo.page_no" :page-sizes="[3, 5, 10, 20]"
        :page-size="queryInfo.page_size" layout="total, sizes, prev, pager, next, jumper" :total="total_count">
      </el-pagination>
    </el-card>
    <!--修改对话框-->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible"
      width="30%">
      <span slot="footer" class="dialog-footer">
           <el-button @click="editDialogVisible = false">取 消</el-button>
           <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
       </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  id: null,
  data () {
    return {
      queryInfo: {
        order_by: 'id',
        page_no: 1,
        page_size: 10,
        auth_token: window.sessionStorage.getItem('token'),
        auth_id: 'admin',
        id: ''
      },
      userList: [],
      total: 0,
      // 控制对话框的显示与隐藏
      addDialogVisible: false,
      // 修改用户的对话框
      editDialogVisible: false,
      // 添加用户表单对象
      addForm: {
        name: '',
        id: ''
      },
      // 添加表单的验证规则对象
      addFormRules: {
        name: [
          {request: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名疮毒在3~10个字符之间', trigger: 'blur'}
        ],
        id: [
          {request: true, message: '请输入id', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名疮毒在3~10个字符之间', trigger: 'blur'}
        ]
      },
      addFormRef: {
      }
    }
  },
  created () {
    // 定义一些当前页面的方法
    this.getUserList()
  },
  methods: {
    async getUserList () {
      // 当页面加载时就会发起一次get的url请求
      // eslint-disable-next-line standard/object-curly-even-spacing,no-unused-vars
      const { data: res} = await this.$http.get('/admin/admins', { params: this.queryInfo})
      if (res.code !== 0) {
        return this.$message.error('获取用户列表失败')
      } else {
        // 这里成功的获取道理数据，并且保存道理data上
        console.log(res)
        this.userList = res.data.list
        this.total = res.data.total
        return this.$message.success('获取用户列表成功')
      }
    },
    // 根据id删除用户
    async removeUserById (id) {
      // 弹框提示用户
      const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        this.$message.info('已取消删除')
      } else {
        // 删除成功
        const {data: res} = await this.$http.delete('/url/' + id)
        if (res.data.code !== 0) {
          return this.$message.error('用户删除失败')
        }
        this.$message.success('用户删除成功')
      }
    },
    onSearch () {
    },
    clearAll () {
    },
    // 展示用户编辑的对话框
    async showDialogVisible (id) {
      // 发起get请求
      console.log(id)
      this.editDialogVisible = true
    },
    // 点击按钮添加新用户
    addUser () {
      this.$refs.addFormRef.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // 就可以发起网络请求了
        // eslint-disable-next-line no-unused-vars
        const {data: res} = await this.$http.post('url', this.addForm)
        if (res.data.code !== 0) {
          return this.$message.error('添加失败')
        } else {
          this.$message.success('添加成功')
          // 隐藏对话框
          this.addDialogVisible = false
          // 重新获取列表
          this.getUserList()
        }
      })
    },
    change () {
    },
    // 监听 pagesize 改变事件
    handleSizeChange (newSize) {
      //  console.log(newSize)
      this.queryInfo.page_size = newSize
      this.getUserList()
    },
    // 监听页码值的改变
    handleCurrentChange (newPage) {
      // console.log(newPage)
      this.queryInfo.page_no = newPage
      this.getUserList()
    }
  }
}
</script>

<style scoped>
  .scene-container {
    margin: 10px;
  }
  </style>
    <style>
    .scene-container .el-table .warning-row {
      background: oldlace;
    }
  .scene-container .el-table .success-row {
    background: #f0f9eb;
  }
</style>
