# Nginx 配置案例


## 静态网站配置
 
 配置一个参考官方默认配置的静态网站配置案例，用于普通的网站访问，启用80端口，本地输入127.0.0.1的访问指定的html首页。
 
 ```
 user nginx;
 worker_processes auto;
 error_log /var/log/nginx/error.log;
 pid /run/nginx.pid;
 
 # Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
 include /usr/share/nginx/modules/*.conf;
 
 events {
     worker_connections 1024;
 }
 
 http {
     log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                       '$status $body_bytes_sent "$http_referer" '
                       '"$http_user_agent" "$http_x_forwarded_for"';
 
     access_log  /var/log/nginx/access.log  main;
 
     sendfile            on;
     tcp_nopush          on;
     tcp_nodelay         on;
     keepalive_timeout   65;
     types_hash_max_size 2048;
 
     include             /etc/nginx/mime.types;
     default_type        application/octet-stream;
 
     # Load modular configuration files from the /etc/nginx/conf.d directory.
     # See http://nginx.org/en/docs/ngx_core_module.html#include
     # for more information.
     include /etc/nginx/conf.d/*.conf;
 
     server {
         listen       80 default_server;
         #listen       [::]:80 default_server;
         #server_name  _;
		 server_name 129.211.30.22;
         #root         /usr/share/nginx/html;
  
         # Load configuration files for the default server block.
         include /etc/nginx/default.d/*.conf;
 
         location / {
 	    root /opt/soft/nginx/web;
         }
 
         error_page 404 /404.html;
             location = /40x.html {
         }
 
         error_page 500 502 503 504 /50x.html;
             location = /50x.html {
         }
     }
 
 # Settings for a TLS enabled server.
 #
 #    server {
 #        listen       443 ssl http2 default_server;
 #        listen       [::]:443 ssl http2 default_server;
 #        server_name  _;
 #        root         /usr/share/nginx/html;
 #
 #        ssl_certificate "/etc/pki/nginx/server.crt";
 #        ssl_certificate_key "/etc/pki/nginx/private/server.key";
 #        ssl_session_cache shared:SSL:1m;
 #        ssl_session_timeout  10m;
 #        ssl_ciphers HIGH:!aNULL:!MD5;
 #        ssl_prefer_server_ciphers on;
 #
 #        # Load configuration files for the default server block.
 #        include /etc/nginx/default.d/*.conf;
 #
 #        location / {
 #        }
 #
 #        error_page 404 /404.html;
 #            location = /40x.html {
 #        }
 #
 #        error_page 500 502 503 504 /50x.html;
 #            location = /50x.html {
 #        }
 #    }
 
 }
```
 


```yh2j.com案例

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
		#SSL 访问端口号为 443
        listen 443 ssl;
		#填写绑定证书的域名
        server_name  www.yh2j.com;
		#启用 SSL 功能
		#ssl on;
		#证书文件名称
		ssl_certificate 1_www.yh2j.com_bundle.crt;
		#私钥文件名称
		ssl_certificate_key 2_www.yh2j.com.key; 
		ssl_session_timeout 5m;
		#请按照以下协议配置
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
		#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
		ssl_prefer_server_ciphers on;		

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
			#default
            root   html;		
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

 
    }

	
	# 80端口重定向
	server {
		listen 80;
		#填写绑定证书的域名
		server_name www.yh2j.com; 
		#把http的域名请求转成https
		rewrite ^(.*)$ https://$host$1 permanent; 
	}
	

	
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
			add_header Access-Control-Allow-Origin *;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

 
    }
	


}

```

```
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
		server_name 129.211.30.22;
        location =/yhey/ { #访问http://127.0.0.1/yhey 跳转
          proxy_pass http://60.191.172.98:8142/api/;
        }

        location =/ { #访问http://127.0.0.1 跳转
          proxy_pass https://www.baidu.com/;
        }


        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
      

    }


}
```



