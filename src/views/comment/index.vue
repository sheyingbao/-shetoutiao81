<template>
   <el-card>
    <!-- el-card 具名插槽 header -->
    <bread-crumb slot='header'>
    <!-- 面包屑的插槽 具名插槽  title-->
      <template slot='title'>评论列表</template>
   </bread-crumb>
   <!-- 表格组件 -->
   <!-- <el-table :data="list">
      <el-table-column label="标识" prop="id"></el-table-column>
     <el-table-column label="姓名" prop="name"></el-table-column>
   </el-table> -->
   <el-table :data='list' stripe="true">
       <!-- prop属性是绑定的字段名称 -->
     <el-table-column prop='title' width='500' label='标题'></el-table-column>
     <el-table-column :formatter="formatter" prop='comment_status' label='评论状态'></el-table-column>
     <el-table-column  prop='total_comment_count' label='总评论数'></el-table-column>
     <el-table-column  prop='fans_comment_count' label='粉丝评论数'></el-table-column>
     <el-table-column  prop='' label='操作'>
       <el-button type="text">修改</el-button>
        <el-button type="text">关闭评论</el-button>
     </el-table-column>
   </el-table>
  </el-card>
</template>

<script>
export default {

  data () {
    return {
      list: []
    }
  },
  methods: {
    //  查询评论列表数据
    // query 参数 =>指的是get参数 => url链接上
    // post 参数=> 指的是body参数
    // axios 中 有一个对象存储的就是body参数
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment' // 查询评论相关的数据
        }
      }).then(result => {
        this.list = result.data.results // 取到列表数据 给 当前的数据对象
      })
    },
    // row 当前数据对象
    // column 当前列的属性
    // cellValue 当前单元格属性值
    // index 索引
    // formatter需要返回结果  需要根据当前值  进行返回
    // fa人matter 是elementUI提供的, 过滤器是vue自身特性
    formatter (row, colum, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  // 创建实例之后执行
  created () {
    this.getComments()
  }
}

</script>

<style>

</style>
