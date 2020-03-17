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
      <el-table :data="userList" style="width: 100%" border stripe>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="is_active" label="状态">
          <!-- 作用域插槽 -->
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#EAEDF1"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <!-- 操作按钮数据渲染 -->
          <template>
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" circle size="small "></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip effect="dark" content="分配用户角色" placement="top-start" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" circle size="small"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
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
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
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
    },
    // 监听页码值的改变
    handleCurrentChange (newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    // 监听pagesize一页显示多少行的改变
    handleSizeChange (newSize) {
      console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    }
  }
}
</script>

<style>
</style>
