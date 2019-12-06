<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">俱乐部成员管理</h1>
        <h4>查询总数：{{clubNumberRoom}} </h4>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="俱乐部ID">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
           <el-select v-model="formInline.des" placeholder="成员ID">
             <el-option label="115" value="1"></el-option>
             <el-option label="125" value="2"></el-option>
          </el-select>
          <el-dropdown>
            <el-button type="primary">
              <span>筛选 ：</span>
              所有状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有状态</el-dropdown-item>
              <el-dropdown-item>待审核</el-dropdown-item>
              <el-dropdown-item>已审核</el-dropdown-item>
              <el-dropdown-item>被拒绝</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary">
              所有职位
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有职位</el-dropdown-item>
              <el-dropdown-item>创始人</el-dropdown-item>
              <el-dropdown-item>管理员</el-dropdown-item>
              <el-dropdown-item>成员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-refresh-left" @click="refreshAll()">刷新</el-button>
        </el-form-item>
      </el-form>
            <el-form :inline="true" :model="formInline2" class="demo-form-inline2" size="small">
              <el-form-item icon="el-icon-refresh-left">排序
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">默认</el-button>
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">创建时间</el-button>
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
          <el-table-column prop="clubId" label="俱乐部ID" width="180" align="center"></el-table-column>
          <el-table-column prop="clubIddd" label="俱乐部ID" width="180" align="center"></el-table-column>
          <el-table-column prop="numberId" label="成员ID" width="180" align="center"></el-table-column>
          <el-table-column prop="job" label="职位" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="statu" label="审核状态" width="180" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click="handleEdit(scope.$index, scope.row)">踢出俱乐部</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">设为管理员</el-button>
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
