<template>
  <!-- 组件页面 -->
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png">
      </div>
      <!-- 登录表单区 -->
      <el-form  label-width="0px" class="login_form">
        <!-- 账号输入 -->
        <el-form-item>
          <el-input placeholder="请输入账号" v-model="account"></el-input>
        </el-form-item>
        <!-- 密码输入 -->
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="password"></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
           <el-button type="primary">确认</el-button>
           <el-button>重置</el-button>
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
      account: '',
      password: ''
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
