<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <!-- display:flex; align-items:center为居中对齐 -->
    <el-col :span="6" class="left-header">
      <!-- 图片的设置 -->
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="layout-right" >
      <img :src="user.photo ? user.photo :  defaultImg" alt />
      <!-- 两个插槽   匿名插槽  具名插槽 -->
      <el-dropdown trigger="click">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          {{user.name}}
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
export default {
  data () {
    return {
      user: {

      },
      defaultImg: require('../../assets/img/avatar.jpg') // require 的图片就变成了base64
    }
  },
  methods: {
  //  获取用户信息
    getUserInfo () {
      // 获取用户存储信息 存储信息里有token
      let userInfo = window.localIStrage.getItem('user-info')
      let token = userInfo ? JSON.parse(userInfo).token : null // 获取token
      this.$axios({
        url: '/user/profile',
        //  将header中赋值  后端需要的token身份信息
        headers: { 'Authoriztion': `Bearer ${token}` }
      }).then(result => {
      //  获取用户的最新个人资料 赋值给data中的数据
        this.user = result.data.data
      })
    }
  },
  created () {
    // 获取用户信息
    this.getUserInfo()
  }

}
</script>

<style lang="less" scoped>
.layout-header {
  padding: 12px 0;
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
