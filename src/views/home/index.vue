<template>
<!-- 最外层容器 -->
<el-container>
<!-- 侧边栏容器 -->
<el-aside style='width:200px;height:100vh;background-color:#323745'>
 <layout-aside></layout-aside>
</el-aside>
<!-- 嵌套大内容 -->
<el-container>
<!-- 头部内容 -->
<el-header>
  <layout-header></layout-header>
</el-header>
<!-- 中间区域 -->
<el-main>
  <!-- 二级路由容器 -->
  <router-view></router-view>
</el-main>
</el-container>
</el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
