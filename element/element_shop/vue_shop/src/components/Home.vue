<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/images/head.png" alt />
        <span>米创信息系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 页面侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- i是图标 -->
              <i :class="iconObj[item.id]"></i>
              <!-- span是文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subitem.id + ''" v-for="subitem in item.children" :key="subitem.id">
              <template slot="title">
                <!-- i是二级图标 -->
                <i class="el-icon-menu"></i>
                <!-- span是二级文本 -->
                <span>{{ subitem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主题 -->
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menulist: [],
      iconObj: {
        125: 'el-icon-user-solid',
        103: 'el-icon-s-ticket',
        102: 'el-icon-s-open',
        101: 'el-icon-camera-solid',
        145: 'el-icon-s-help'

      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      // 退出原理，销毁token
      window.sessionStorage.clear()
      // 跳转到登录页
      this.$router.push('/login')
    },
    async getMenuList () {
      // 获得用户左边菜单权限,采用async和await写法
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
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
    > img {
      height: 40px;
      width: 40px;
      border: solid 1px gray;
      border-radius: 8%;
      box-shadow: 0 0 2px #ddd;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>
