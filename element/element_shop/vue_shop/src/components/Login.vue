<template>
  <!-- 组件页面 -->
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png">
      </div>
      <!-- 登录表单区 -->
      <el-form  ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 账号输入 -->
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-icon-test16" placeholder="请输入账号" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码输入 -->
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-icon-test15" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
           <!-- <el-button type="primary" @click="loginGet">确认Get</el-button> -->
           <el-button type="primary" @click="loginPost">确认Post</el-button>
           <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
// 组件脚本
export default {
  data () {
    return {
      // 这个登录数据表单绑定的对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户账户是否合法
        username: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 15, message: '账号长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 10, message: '账号长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    // 点击重置按钮，重置表单内容
    resetLoginForm () {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields()
    },
    loginGet () {
      this.$refs.loginFormRef.validate(valid => {
        console.log('login')
        if (valid) {
          var url = '/login'

          this.$http.get(url, this.loginForm).then(res => {
            console.log(res)
            return this.$message.success('登录成功')
          }).catch(error => {
            console.log(error)
          })
        } else {
          return this.$message.error('登录失败')
        }
      })
    },
    loginPost () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // { data: res } 等同于 res = (返回对象).data
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status === 200) {
          console.log(res)
          // 1.保存服务器的token到 sessionStorage中
          window.sessionStorage.setItem('token', res.data.token)
          // 2. 编程式导航跳转到主页/home
          this.$router.push('/home')
          return this.$message.success('登录成功')
        } else {
          return this.$message.error(res.meta.msg)
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 100px;
    width: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box ;
}
.btns {
  display: flex;
  justify-content: flex-end;
}

</style>
