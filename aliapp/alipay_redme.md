# 阿里支付教程
本项目是阿里支付教程

## 沙箱测试

### 商家账号
+ kvpmnn8245@sandbox.com
+ 商户UID 2088102179775724
+ 登录密码111111

### 买家账号
+ 买家账号 dfrvln9798@sandbox.com
+ 登录密码 111111
+ 支付密码 111111
+ 用户名称 沙箱环境
+ 证件类型 身份证(IDENTITY_CARD)
+ 证件号码 303913193704059819


### 应用信息配置

+ APPID 2016101600696925
+ 支付宝网关 https://openapi.alipaydev.com/gateway.do
+ RSA2(SHA256)密钥(推荐) 

### 在线调试

	https://openhome.alipay.com/platform/demoManage.htm#/alipay.trade.pay

## API

## 条码支付接口

### 基本描述
+ alipay.trade.pay
+ 通过调用该接口创建支付宝交易订单
+ 商户订单号、支付场景、订单总金额、订单标题、付款码、外部门店号、商品信息
+ 收银系统和支付宝已经打通。
+ 收银员使用扫码设备读取用户支付宝钱包“付款码”后，将二维码或条码信息和订单信息通过本接口上送至支付宝发起支付。

### 说明

