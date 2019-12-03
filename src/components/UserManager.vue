<template>
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
<!--          <el-table-column label="操作" fixed="right" align="center">-->
<!--            <template slot-scope="scope">-->
<!--                            <el-button-->
<!--                              size="mini"-->
<!--                              icon="el-icon-view"-->
<!--                              @click="handleEdit(scope.$index, scope.row)">查看</el-button>-->
<!--              <el-button-->
<!--                size="mini"-->
<!--                type="danger"-->
<!--                icon="el-icon-delete"-->
<!--                @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
<!--            </template>-->
<!--          </el-table-column>-->
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
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row);
      //     });
      //   } else {
      //     this.$refs.multipleTable.clearSelection();
      //   }
      // },
      // filterTag(value, row) {
      //   return row.tag === value;
      // },
      // handleEdit(index, row) {
      //   console.log(index, row);
      // },
      handleDelete(index, row) {
        console.log(index, row);
      },
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(250,250,250);'
        }
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
</style>
