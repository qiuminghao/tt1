<template>
  <div class="scene-container">
    <el-card class="card1">
      <span>
          <h1 style="background:rgb(14,122,162)">订单管理</h1>
        <h3>余额：{{money}} </h3>
      </span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="搜索">
          <el-select v-model="formInline.des" placeholder="充值时间">
            <el-option label="9587" value="1"></el-option>
            <el-option label="9527" value="2"></el-option>
          </el-select>
           <el-select v-model="formInline.des" placeholder="订单号">
             <el-option label="115" value="1"></el-option>
             <el-option label="125" value="2"></el-option>
          </el-select>
          <el-select v-model="formInline.des" placeholder="充值玩家ID">
            <el-option label="小明" value="1"></el-option>
            <el-option label="莱格" value="2"></el-option>
          </el-select>
          <el-dropdown>
            <el-button type="primary">
              支付方式<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>微信</el-dropdown-item>
              <el-dropdown-item>支付宝</el-dropdown-item>
              <el-dropdown-item>银联</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-refresh-left" @click="clearAll()">清空</el-button>
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
          <el-table-column prop="orderId" label="订单号" width="180" sortable align="center"></el-table-column>
          <el-table-column prop="userId" label="用户ID" width="180" align="center"></el-table-column>
          <el-table-column prop="goods" label="商品id" width="180" align="center"></el-table-column>
          <el-table-column prop="money" label="价位" width="180" align="center"></el-table-column>
          <el-table-column prop="pay" label="支付方式" width="180" align="center"></el-table-column>
          <el-table-column prop="time" label="下单时间" width="180" sortable align="center"></el-table-column>
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
