<template>
 <div class="login">
    <el-card class="box-card">
        <div class="title">
      <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      </div>
      <!-- 表单结构 el-form el-form-item -->
      <el-form v-bind:model="formData"  :rules="rules" ref="loginForm">
        <!-- el-form-item 的prop的属性设置为需要效验的字段 -->
      <el-form-item prop='mobile'>
          <!-- 手机号绑定 input-->
        <el-form-item >
          <el-input  v-model="formData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <!-- 验证码绑定input -->
          <el-input  placeholder='请输入验证码' style='width:240px'></el-input>
          <el-button  v-model="formData.code" style='float:right'>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- checkbox绑定check -->
          <el-checkbox :checked="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 定义一个自定义函数
    var func = function (rule, value, callback) {
      //  rule 是当前的效验规则  没什么用
      // value 就是当前表单的字段的值
      if (value) {
        // 满足效验
        callback() // 同意继续往下走
      } else {
        // 否则不满足效验
        callback(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      // 定义表单数据对象
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [
          { required: true, message: '登录手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码为6位字符' }
        ],
        check: [{
          //  message: '您必须无条件同意被坑',
          validator: func // 自定义函数
        }]
      }
    }
  },
  methods: {
    login () {
      // validate  手动效验表单数据
      // isOK是 当前表单是否通过了校验
      // result 是当前的校验结果
      this.$refs.loginForms.validate(isOK => {
        if (isOK) {
          //  通过了效验
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.formData // post参数是在data中写入的
          }).then(result => {
            window.localStorage.setItem('user-info', JSON.stringify(result.data.data))
            //  编程式导航
            this.$router.push('/home')
          })
        }
      })
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
