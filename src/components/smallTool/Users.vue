<template>
  <div>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容"  v-model="queryInfo.name" clearable @click="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!--用户列表区域-->
      <el-table :data="userlist" border stripe>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="房卡" prop="gems"></el-table-column>
        <el-table-column label="注册时间" prop="created_at"></el-table-column>
        <el-table-column label="登入设备" prop="platform"></el-table-column>
        <el-table-column label="比赛卡" prop="match_gems">
          <!--<template slot-scope="scope">{{scope.row}}</template> 查询一个用户所有的数据  <el-switch v-model="scope.row.***"/>-->
        </el-table-column>
      </el-table>
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
  data () {
    return {
      queryInfo: {
        user_id: '',
        name: '',
        r_code: '',
        order_by: 'id',
        filter: '',
        // 当前的页数
        page_no: '1',
        // 当前每页多少数据
        page_size: '5',
        auth_token: '1575530694513admin9cinKaZ4VYjjcEcb',
        auth_id: 'admin'
      },
      userlist: [],
      total_count: 0
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('admin/users', { params: this.queryInfo })
      if (res.code !== 0) {
        return this.$message.error('获取用户数据失败')
      }
      this.userlist = res.data.list
      this.total_count = res.data.total_count
      console.log(res)
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

<style lang="scss" scoped>

</style>
