# nginx、axios加flask跨域问题解决方案

## nginx配置


```html
   server {
		#SSL 访问端口号为 443
        listen 443 ssl;
        server_name  wxapp.yh2j.com;	
		ssl_certificate 1_wxapp.yh2j.com_bundle.crt;	
		ssl_certificate_key 2_wxapp.yh2j.com.key; 
		ssl_session_timeout 5m;
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
		ssl_prefer_server_ciphers on;
		location / {
			proxy_pass http://60.191.172.98:8142;
			#add_header Access-Control-Allow-Origin *;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

 
    }
	
}


```

在Nginx的配置文件中转发规则中有一条信息
`add_header Access-Control-Allow-Origin *;`
加入这条会和后面的flask服务器的`cors`冲突,所以要去掉。

## flask

+ pip install flask_cors
+ py文件中引入 flask_cors
 ```html
  from flask_cors import CORS
  
 ```
 
+ 添加一条跨域信息
 ```html
 app = Flask(__name__)
 cors = CORS(app, resources={"/api/*": {"origins": "*"}})
 
 ```
 
## axios

```html
    // 点击重置按钮，重置表单内容
    resetLoginForm () {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(valid => {
        console.log('login')
        if (valid) {
          var url = '/testapi'
          var data = {
            params: {
              account: '7yaq55',
              password: '1046'

            }
          }

          this.$http.get(url, data).then(res => {
            console.log(res.data)
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
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          console.log('loginPost')
          var url = '/testapi'
          this.$http.post(url, this.loginForm).then(res => {
            console.log(res.data)
            return this.$message.success('登录成功')
          }).catch(error => {
            console.log(error)
          })
        } else {
          return this.$message.error('登录失败')
        }
      })
    }
  }
}
```