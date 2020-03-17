<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- row之间的间距gutter="20" -->
      <el-row :gutter="20">
        <el-col :span="12">
          <!-- 搜索和添加区 -->
          <el-input placeholder="请输入筛选内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="getUserList">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 数据表格 -->
      <el-table :data="userList" style="width: 100%" border stripe >
        <el-table-column type="index"  label="序号"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="is_active" label="状态"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  created () {
    // 页面初始化
    this.getUserList()
  },
  data () {
    return {
      // 参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 4
      },
      total: 0,
      userList: []
    }
  },
  methods: {
    // 函数
    async getUserList () {
      const url = 'users'
      const { data: res } = await this.$http.get(url, {
        params: this.queryInfo
      })

      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.userList = res.data.users
      this.total = res.data.total
      console.log(this.userList)
    }
  }
}
</script>

<style>
</style>
