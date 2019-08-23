<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <!-- display:flex; align-items:center为居中对齐 -->
    <el-col :span="6" class="left-header">
      <!-- 图片的设置 -->
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="layout-right" >
      <img src="../../assets/img/avatar.jpg" alt />
      <!-- 两个插槽   匿名插槽  具名插槽 -->
      <el-dropdown trigger="click">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          我是56123
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 dropdown-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-header {
  padding: 15px 0;
  .left-header {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      margin-right: 4px;
    }
  }
  .layout-right {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
