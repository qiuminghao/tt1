<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">房间管理</h1>
        <h4>查询总数：{{allRoom}} </h4>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="房间ID">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
           <el-select v-model="formInline.des" placeholder="创建者ID">
             <el-option label="115" value="1"></el-option>
             <el-option label="125" value="2"></el-option>
          </el-select>
          <el-dropdown>
            <el-button type="primary">
              <span>筛选 ：</span>
              所有房间
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>等待中房间</el-dropdown-item>
              <el-dropdown-item>以结束房间</el-dropdown-item>
              <el-dropdown-item>游戏中房间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary">
              所有类型
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有类型</el-dropdown-item>
              <el-dropdown-item>好友房间</el-dropdown-item>
              <el-dropdown-item>俱乐部房间</el-dropdown-item>
              <el-dropdown-item>比赛场房间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary">
              所有游戏
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>所有游戏</el-dropdown-item>
              <el-dropdown-item>运城贴金</el-dropdown-item>
              <el-dropdown-item>推到胡</el-dropdown-item>
              <el-dropdown-item>心水麻将</el-dropdown-item>
              <el-dropdown-item>斗地主</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-refresh-left" @click="refreshAll()">刷新</el-button>
        </el-form-item>
      </el-form>
            <el-form :inline="true" :model="formInline2" class="demo-form-inline2" size="small">
              <el-form-item icon="el-icon-refresh-left">排序
                <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onSearch()">默认(用户ID)</el-button>
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
          <el-table-column prop="roomId" label="房间号" width="180" align="center"></el-table-column>
          <el-table-column prop="typePlay" label="游戏类型" width="180" align="center"></el-table-column>
          <el-table-column prop="statu" label="房间状态" width="180" align="center"></el-table-column>
          <el-table-column prop="select" label="创建选项" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="host" label="房主" width="180" align="center"></el-table-column>
          <el-table-column prop="player" label="玩家" width="180" align="center"></el-table-column>
          <el-table-column prop="finalScore" label="最终分数" width="180" align="center"></el-table-column>
          <el-table-column prop="needCard" label="所需房卡" width="180" align="center"></el-table-column>
          <el-table-column prop="rounds" label="第几回合" width="180" align="center"></el-table-column>
          <el-table-column prop="numberPlayers" label="玩家数" width="180" align="center"></el-table-column>
          <el-table-column prop="clubId" label="俱乐部ID" width="180" align="center"></el-table-column>
          <el-table-column prop="playgroundId" label="比赛场ID" width="180" align="center"></el-table-column>
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
