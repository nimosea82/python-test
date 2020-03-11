<template>
  <!-- 组件页面 -->
    <div>
        <p class="vue1">{{ msg }}</p>
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

.vue1 {
  background-color: palegoldenrod;
  color: green;
  font-size: 30px;
}
</style>
