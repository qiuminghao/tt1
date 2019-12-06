<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">消息，公告</h1>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button icon="el-icon-refresh-left" @click="refreshAll()">刷新</el-button>
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
          <el-table-column prop="messageType" label="类型" width="180" align="center"></el-table-column>
          <el-table-column prop="content" label="内容" width="180" align="center"></el-table-column>
          <el-table-column prop="createTime" label="发布时间" width="180" sortable align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
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
    handleClick: function () {
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
    },
    refreshAll () {
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
