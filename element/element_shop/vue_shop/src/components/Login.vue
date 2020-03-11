<template>
  <!-- 组件页面 -->
    <div class="login_container">
        <div class="login_box"></div>
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
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

</style>
