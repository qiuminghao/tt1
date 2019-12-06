<template>
  <div class="scene-container">
    <el-card class="card1">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="管理员账号">
          <el-input v-model="formInline.scenename" placeholder="管理员账号"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-select v-model="formInline.des" placeholder="关键词">
            <el-option label="杭州电子科技大学" value="1"></el-option>
            <el-option label="云技术实验室" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">搜索</el-button>
          <!--<el-button icon="el-icon-refresh-left" @click="clearAll()">清空</el-button>-->
        </el-form-item>
      </el-form>
      <div class="table-section">
        <el-table :data="tableData"
                  :header-cell-style="tableHeaderColor"
                  ref="multipleTable"
                  style="width: 100%"
                  :row-class-name="tableRowClassName"
                  border
                  size="small"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="date" label="日期" width="100" align="center"></el-table-column>
          <el-table-column prop="name" label="管理员ID" width="100" sortable align="center"></el-table-column>
          <el-table-column prop="name" label="类型" width="100" sortable align="center"></el-table-column>
          <el-table-column prop="title" label="标题" width="100" sortable align="center"></el-table-column>
          <el-table-column prop="content" label="内容" width="100" sortable align="center"></el-table-column>
          <el-table-column prop="address" label="IP" align="center"></el-table-column>
          <el-table-column prop="time" label="操作时间" width="100" sortable align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center" width="70">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" align="center" width="70">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-view"
                @click="handleEdit(scope.row.id)">查看</el-button>
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
  </div>
</template>
<script>
export default {
  name: 'topbar',
  data () {
    return {
      // 这个是搜索功能里面定义的两个搜索对象 等待被渲染的对象
      formInline: {
        scenename: '',
        des: ''
      },
      // 这个是页面加载时传过去的参数
      queryInfo: {
        admin_id: '',
        title: '',
        page_no: 1,
        page_size: 10,
        auth_id: 'admin',
        auth_token: '1575599223578adminAzxzdbTU2on5dMgI'
      },
      // 这个是返回给 上面渲染页面的数组对象
      tableData: [],
      // multipleSelection 当前这个对象在temlelate里面没有定义
      multipleSelection: []
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      // 当页面加载时就会发起一次get的url请求
      // eslint-disable-next-line standard/object-curly-even-spacing,no-unused-vars
      const { data: res} = await this.$http.get('/admin/admin_logs', { params: this.queryInfo})
      if (res.code !== 0) {
        return this.$message.error('获取用户列表失败')
      } else {
        // 这里成功的获取道理数据，并且保存道理data上
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total
        return this.$message.success('获取用户列表成功')
      }
    },
    // 搜索的函数方法
    onSearch () {
    },
    // 清空的函数方法
    clearAll () {
    },
    // 查看的函数方法
    handleEdit (index, row) {
      console.log(index, row)
    },
    // 删除的函数方法
    handleDelete (index, row) {
      console.log(index, row)
    },
    // 这是监听分页的两个方法
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
    },
    // teplate 模板里面的 3 个方法
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color:rgb(250,250,250);'
      }
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
