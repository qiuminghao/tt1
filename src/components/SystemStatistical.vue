<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">系统统计</h1>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
<!--           <el-select v-model="formInline.des" placeholder="订单号">-->
<!--             <el-option label="115" value="1"></el-option>-->
<!--             <el-option label="125" value="2"></el-option>-->
<!--          </el-select>-->
<!--          <el-select v-model="formInline.des" placeholder="充值玩家ID">-->
<!--            <el-option label="小明" value="1"></el-option>-->
<!--            <el-option label="莱格" value="2"></el-option>-->
<!--          </el-select>-->
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-refresh-left" @click="clearAll()">刷新</el-button>
        </el-form-item>
      </el-form>
            <el-form :inline="true" :model="formInline2" class="demo-form-inline2" size="small">
              <el-form-item icon="el-icon-refresh-left">统计分类
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">按年份</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">按月份</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">按日期</el-button>
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
          <el-table-column type="tpye" label="日期类型" width="50" align="center"></el-table-column>
          <el-table-column type="date" label="日期" width="50" align="center"></el-table-column>
          <el-table-column prop="totalUserCount" label="总用户数" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="iosUserCount" label="苹果用户数" width="180" align="center"></el-table-column>
          <el-table-column prop="androidUserCount" label="安卓用户数" width="180" align="center"></el-table-column>
          <el-table-column prop="registeredUserCount" label="新增用户" width="180" align="center"></el-table-column>
          <el-table-column prop="activeUserCount" label="活跃用户数" width="180" align="center"></el-table-column>
          <el-table-column prop="roomCount" label="房间数" width="180" align="center"></el-table-column>
          <el-table-column prop="privateRoomCount" label="好友房间数" width="180" align="center"></el-table-column>
          <el-table-column prop="clubRoomCount" label="俱乐部房间数" width="180" align="center"></el-table-column>
          <el-table-column prop="matchRoomCount" label="比赛房间数" width="180" align="center"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  data () {
    return {
      formInline: {
        scenename: '',
        des: ''
      },
      formInline2: {},
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '学校'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '学校'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleClick () {
      alert('button click')
    },
    onSearch () {
    },
    clearAll () {
      this.formInline.scenename = '',
      this.formInline.des = ''
    },
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
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    filterTag (value, row) {
      return row.tag === value
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
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
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
