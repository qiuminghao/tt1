<template>
  <!--卡片试图区域-->
  <div class="scene-container">
    <el-card class="card1">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="管理员账号">
          <el-input v-model="formInline.scenename" placeholder="管理员账号"></el-input>
        </el-form-item>
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="邀请人id">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
           <el-select v-model="formInline.des" placeholder="用户ID">
             <el-option label="115" value="1"></el-option>
             <el-option label="125" value="2"></el-option>
          </el-select>
          <el-select v-model="formInline.des" placeholder="用户昵称">
            <el-option label="小明" value="1"></el-option>
            <el-option label="莱格" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
<!--          <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">-->
<!--            搜索</el-button>-->
          <el-button icon="el-icon-refresh-left" @click="clearAll()">清空</el-button>
        </el-form-item>
      </el-form>
            <el-form :inline="true" :model="formInline2" class="demo-form-inline2" size="small">
              <el-form-item icon="el-icon-refresh-left">用户排序
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">默认</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">房卡</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">比赛卡</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">俱乐部房卡</el-button>
              </el-form-item>
              <el-form-item icon="el-icon-refresh-left">用户筛选
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">所有</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">在线</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">代理</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">玩家</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">机器人</el-button>
              </el-form-item>
            </el-form>
      <div class="table-section">
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="userId" label="用户ID" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="picture" label="头像" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="inviterId" label="邀请人id" width="180" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" width="180" align="center"></el-table-column>
          <el-table-column prop="roomCard" label="房卡" width="180" align="center"></el-table-column>
          <el-table-column prop="clubCard" label="俱乐部卡" width="180" align="center"></el-table-column>
          <el-table-column prop="playgameCard" label="比赛卡" width="180" align="center"></el-table-column>
          <el-table-column prop="roomNumber" label="房间号" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="playgroundId" label="比赛场ID" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="time" label="注册时间" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="logPlatform" label="登录平台" align="center"></el-table-column>
          <el-table-column prop="clientVersion" label="客户端版本" align="center"></el-table-column>
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
  data () {
    return {
      // 这个是页面加载时传过去的参数
      // 这个是返回给 上面渲染页面的数组对象
      queryInfo: {
        user_id: '',
        name: '',
        r_code: '',
        order_by: id,
        filter: '',
        page_no: 1,
        page_size: 10,
        auth_id: 'admin',
        auth_token: window.sessionStorage.getItem('token')
      },
      formInline: {
        scenename: '',
        des: ''
      },
      formInline2: {},
      tableData: [],
      multipleSelection: []
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res} = await this.$http.get('/admin/users', { params: this.queryInfo})
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
