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
          <!-- 搜索和添加区 change按下回车或失去焦点触发事件-->
          <el-input
            placeholder="请输入筛选内容"
            v-model="queryInfo.query"
            clearable
            @clear="getUserList"
            :maxlength="20"
            @change="getUserList"
          >
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
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
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#EAEDF1"
              @change="userStateChanged(scope.row)"
            ></el-switch>
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
    <!-- 添加用户对话框 -->
    <el-dialog @close="addDialogClosed" :close-on-click-modal="false" title="添加用户" :visible.sync="addDialogVisible" width="50%">
      <!-- 内容主体区 -->
      <el-form ref="addUserFormRef" status-icon :model="addUserForm" label-width="80px" :rules="addUserFormRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addUserForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input type="password" v-model="addUserForm.password"></el-input>
        </el-form-item>
         <el-form-item label="确认密码" prop="checkPass" >
          <el-input type="password" v-model="addUserForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" >
          <el-input v-model="addUserForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile" >
          <el-input v-model="addUserForm.mobile"></el-input>
        </el-form-item>

      </el-form>
      <!-- 底部按钮区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created () {
    // 页面初始化
    this.getUserList()
  },
  data () {
    // 验证密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.addUserForm.checkPass !== '') {
          this.$refs.addUserFormRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.addUserForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    // 自定义邮箱规则
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^\w+@\w+(\.\w+)+$/
      if (regEmail.test(value)) {
        // 合法邮箱
        return callback()
      }
      callback(new Error('请输入合法邮箱'))
    }
    // 自定义手机号规则
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/
      if (regMobile.test(value)) {
        return callback()
      }
      // 返回一个错误提示
      callback(new Error('请输入合法的手机号码'))
    }

    return {
      // 参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5
      },
      total: 0,
      userList: [],
      // 控制添加用户对话空的显示
      addDialogVisible: false,
      addUserForm: {
        username: '',
        password: '',
        checkPass: '',
        email: '',
        mobile: ''
      },
      addUserFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '用户名长度在3到15个字符自检', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validateCheckPass, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 3, max: 15, message: '邮箱长度在3到15个字符自检', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机', trigger: 'blur' },
          { min: 3, max: 15, message: '手机长度在3到15个字符自检', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      }

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
    },
    // 监听switch开关状态
    async userStateChanged (userinfo) {
      const { data: res } = await this.$http.put(
        `users/${userinfo.id}/state/${userinfo.mg_state}`
      )
      if (res.meta.status !== 200) {
        this.$message.error('更新用户信息失败')
        userinfo.mg_state = !userinfo.mg_state
      }
      this.$message.success('更新用户信息成功')
    },
    // 监听对话框关闭
    addDialogClosed () {
      // refs引用
      this.$refs.addUserFormRef.resetFields()
    },
    // 添加用户
    addUser () {
      // 提交请求前，表单预验证
      this.$refs.addUserFormRef.validate(async valid => {
        // console.log(valid)
        // 表单预校验失败
        if (!valid) return
        const { data: res } = await this.$http.post('users', this.addUserForm)
        if (res.meta.status !== 201) {
          this.$message.error('添加用户失败！')
        }
        this.$message.success('添加用户成功！')
        // 隐藏添加用户对话框
        this.addDialogVisible = false
        this.getUserList()
      })
    }
  }
}
</script>

<style>
</style>
