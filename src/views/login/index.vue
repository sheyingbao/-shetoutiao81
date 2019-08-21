<template>
 <div class="login">
    <el-card class="box-card">
        <div class="title">
      <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      </div>
      <!-- 表单结构 el-form el-form-item -->
      <el-form>
      <el-form-item>
          <!-- 手机号绑定 -->
        <el-form-item >
          <el-input  v-model="formData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input  placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :checked="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 定义表单数据对象
      formData: {
        mobile: '',
        cold: '',
        check: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
    width:100%;
    height:100vh;
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover;
     display: flex;
  justify-content: center;
  align-items: center;
    .box-card {
    width: 400px;
    height: 360px;
    .title{
      margin-bottom: 30px;
 img {
      width: 200px;
      height:45px;
    }
    }

  }
}
</style>
