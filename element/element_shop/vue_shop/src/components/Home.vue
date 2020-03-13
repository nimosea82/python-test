<template>

    <el-container class="home-container">
        <!-- 头部区域 -->
    <el-header>
        <div>
            <img src="../assets/images/head.png" alt="">
            <span>米创信息系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
        <!-- 页面侧边栏 -->
        <el-aside width="200px"></el-aside>
        <!-- 内容主题 -->
        <el-main></el-main>
    </el-container>
    </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}

.el-header {
    background-color:#373D41 ;
    display: flex;
    justify-content: space-between;
    padding-left: 10;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
        >img {
            height: 40px;
            width: 40px;
            border: solid 1px gray;
            border-radius:  8%;
            box-shadow: 0 0 2px #ddd;
        }
    }

}

.el-aside {
    background-color:#333744 ;
}

.el-main {
    background-color:#EAEDF1 ;
}
</style>
