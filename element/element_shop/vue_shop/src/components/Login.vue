<template>
  <!-- 组件页面 -->
    <div class="login_container">
        <div class="login_box">
          <div class="avatar_box">
            <img src="../assets/logo.png">
          </div>

        </div>
    </div>
</template>

<script>
// 组件脚本
export default {
  data () {
    return {
      msg: '我是组件msg'
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
  transform: translate(-50%,-50%);
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

</style>
