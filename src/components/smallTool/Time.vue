<template>
  <div>
    <el-date-picker
      v-model="filters.column.create_start_date"
      type="date"
      :picker-options="pickerBeginDateBefore"
      format="yyyy-MM-dd"
      placeholder="开始日期"
    >
    </el-date-picker>
    <el-date-picker
      v-model="filters.column.create_end_date"
      type="date" format="yyyy-MM-dd"
      :picker-options="pickerBeginDateAfter"
      placeholder="结束日期"
    >
    </el-date-picker>
    <input type="date">
  </div>
</template>

<script>
export default {
  name: 'data',
  data () {
    return {
      filters: {
        column: {
          create_start_date: '',
          create_end_date: ''
        }
      },
      pickerBeginDateBefore: {
        disabledDate: (time) => {
          if (this.filters.column.create_end_date === '') {
            return time.getTime() < Date.now() - 8.64e7
          } else {
            let beginDateVal = this.filters.column.create_end_date
            if (beginDateVal) {
              return time.getTime() > beginDateVal || time.getTime() < Date.now() - 8.64e7
            }
          }
        }
      },
      pickerBeginDateAfter: {
        disabledDate: (time) => {
          if (this.filters.column.create_start_date === '') {
            this.flag = true
            return time.getTime() < Date.now() - 8.64e7
          } else {
            let beginDateVal = this.filters.column.create_start_date
            if (beginDateVal) {
              return time.getTime() < beginDateVal || time.getTime() < Date.now() - 8.64e7
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
