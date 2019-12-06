<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">房间管理</h1>
        <h1>  </h1>
        <h4>查询总数：{{clubRoom}} </h4>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="俱乐部ID">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
           <el-select v-model="formInline.des" placeholder="创始人ID">
             <el-option label="115" value="1"></el-option>
             <el-option label="125" value="2"></el-option>
          </el-select>
        </el-form-item>
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
          <el-table-column type="clubId" label="俱乐部ID" width="50" align="center"></el-table-column>
          <el-table-column prop="clubName" label="俱乐部名称" width="180" align="center"></el-table-column>
          <el-table-column prop="startId" label="创始人ID" width="180" align="center"></el-table-column>
          <el-table-column prop="startNumber" label="创建人账号" width="180" align="center"></el-table-column>
          <el-table-column prop="clubDescribe" label="俱乐部描述" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="contactWay" label="联系方式" width="180" align="center"></el-table-column>
          <el-table-column prop="startTime" label="创建时间" width="180" align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
                      <template slot-scope="scope">
                                      <el-button
                                        size="mini"
                                        type="success"
                                        @click="handleEdit(scope.$index, scope.row)">赠送房卡</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)">扣除房卡</el-button>
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
  tableData () {
    let newVar = {
      formInline: {
        scenename: '',
        des: ''
      },
      formInline2: {},
      tableData: [],
      multipleSelection: []
    }
    return newVar
  },
  methods: {
    tableData () {
      this.$axios.get('http://new.xingsj.cn:3001/api/v1/admin/user/list', {
        params: {
          id: '45'
        }
      })
        .then((res) => {
          console.log('传过来的数据')
          console.log(res.data)
        })
        .catch((res) => {
          console.log('捉到错了')
        })
    },
    handleClick () {
      alert('button click')
    },
    onSearch () {
    },
    clearAll () {
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
