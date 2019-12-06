<template>
  <div class="app">
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar_box">
        <img src="../assets/logo.png">
      </div>
      <!--登入表单 的Form对象 可以直接拿到表单的所有实例对象-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginformRules" label-width="0px" class="login_form">
        <!--名字-->
        <el-form-item prop="id">
          <!--v-model对象绑定对象data数据里面的loginForm数据里面的id对象-->
          <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.id"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!--按钮-->r
        <el-form-item  class="btns">
          <el-button type="primary" @click="login">登入</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  data () {
    return {
      // 这是登入表单的数据表单
      loginForm: {
        id: '',
        password: ''
      },
      // 这是表单的验证规则
      loginformRules: {
        // 验证用户名是否合法
        id: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入活动密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录的方法
    login () {
      // 登录yu验证
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // eslint-disable-next-line no-unused-vars
        const {data: res} = await this.$http.post('/admin/login', this.loginForm).then((res) => {
          console.log(res.data)
          if (res.data.code !== 0) {
            return this.$message.error('登录失败')
          } else {
            this.$message.success('登录成功')
            // 保存token到当前的session会话中
            window.sessionStorage.setItem('token', res.data.data.token)
            // 登录成功后由路由跳转
            this.$router.push('/home')
          }
        })
        console.log(valid)
      })
    }
  }
}
</script>
<!--<style lang="less" scoped>-->
<!--  .login_container{-->
<!--    background-color: blueviolet;-->
<!--    height: 100%;-->
<!--  }-->
<!--  .login_box{-->
<!--    width: 450px;-->
<!--    height: 300px;-->
<!--    background-color: aliceblue;-->
<!--    border-bottom: 3px;-->
<!--    position: absolute;-->
<!--    left: 50%;-->
<!--    top: 50%;-->
<!--    transform: translate(-50%,-50%);-->
<!--    .avatar_box {-->
<!--      height:130px;-->
<!--      width: 130px;-->
<!--      border: 1px;-->
<!--      border-radius: 50px;-->
<!--      padding: 10px;-->
<!--      box-shadow: 0 0 10px #add;-->
<!--      position: absolute;-->
<!--      left: 50%;-->
<!--      transform: translate(-50%, -50%);-->
<!--      background-color: #fff;-->
<!--      img{-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        border-radius: 50%;-->
<!--        background-color: #eee;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  .login_form{-->
<!--    position: absolute;-->
<!--    bottom: 0;-->
<!--    width: 100%;-->
<!--    padding: 0 20px;-->
<!--    box-sizing: border-box;-->
<!--  }-->
<!--  .btns{-->
<!--    display: flex;-->
<!--    justify-content: flex-end;-->
<!--  }-->
<!--</style>-->
