<template>
  <div class="scene-container">
    <el-card class="card1">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="管理员账号">
          <el-input v-model="formInline.scenename" placeholder="管理员账号"></el-input>
        </el-form-item>
<!--        <el-form-item label="描述">-->
<!--          <el-select v-model="formInline.des" placeholder="关键词">-->
<!--            <el-option label="杭州电子科技大学" value="1"></el-option>-->
<!--            <el-option label="云技术实验室" value="2"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" style="background:rgb(14,122,162)" @click="onAdd()">添加</el-button>
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
          <el-table-column prop="name" label="账号" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="name" label="昵称" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="time" label="上次登陆时间" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="address" label="上次登录IP" align="center"></el-table-column>
          <el-table-column prop="title" label="是否超管员" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="content" label="管理员房卡" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="date" label="创建时间" width="180" align="center"></el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      onAdd(){

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
