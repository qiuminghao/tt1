<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">获奖者</h1>
        <h4>查询总数：{{prizeWinner}} </h4>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="用户ID">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
          <el-select v-model="formInline.des" placeholder="比赛场ID">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
          <el-dropdown>
            <el-button type="primary">
              <span>筛选 ：</span>
              是否拿到奖励
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>是否拿到奖励</el-dropdown-item>
              <el-dropdown-item>否</el-dropdown-item>
              <el-dropdown-item>是</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary">
              所有类型
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有类型</el-dropdown-item>
              <el-dropdown-item>日赛</el-dropdown-item>
              <el-dropdown-item>周赛</el-dropdown-item>
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
          <el-table-column prop="roomNumber" label="房间号" width="180" align="center"></el-table-column>
          <el-table-column prop="prizeWinnerId" label="比赛场ID" width="180" align="center"></el-table-column>
          <el-table-column prop="playgroundType" label="比赛场类型" width="180" align="center"></el-table-column>
          <el-table-column prop="startTime" label="开赛时间" width="180" align="center"></el-table-column>
          <el-table-column prop="userId" label="用户ID" width="180" align="center"></el-table-column>
          <el-table-column prop="userName" label="用户名" width="180" align="center"></el-table-column>
          <el-table-column prop="isRobot" label="是否机器人" width="180" align="center"></el-table-column>
          <el-table-column prop="rank" label="排名" width="180" align="center"></el-table-column>
          <el-table-column prop="isWinner" label="是否获得奖励" width="180" align="center"></el-table-column>
          <el-table-column prop="note" label="备注" width="180" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180" sortable align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click="handleEdit(scope.$index, scope.row)">删除</el-button>
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
    data() {
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
      };
    },
    methods: {
      handleClick() {
        alert('button click');
      },
      onSearch() {
      },
      clearAll() {
        this.formInline.scenename = '',
          this.formInline.des = ''
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(250,250,250);'
        }
      },
      refreshAll(){
      },
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
