# 创意婚礼请柬

点这里预览下:[这里](http://lamolilaguanfang.com:1314)

`本系统仅测试了在主流手机微信平台上的兼容性,PC没有做兼容`

## 技术栈

- React
- Webpack
- Redux
- ES6
- Css3

## 开发配置

1. `npm install`
2. `npm start`
3. 浏览器打开[http://localhost:8081](http://localhost:8081)

## 祝福语存储之后端配置

> 本程序采用前后端完全分离配置，程序需要一个存储祝福语和读取祝福语的接口

我有采用的Node Express提供API接口的例子，你可以自行实现，也可以直接采用我的后端工程。
后端工程地址：

1. 实现后端API接口
2. 新建数据库，执行`php/wedding.sql`，修改`getBless.php`与`commitBless.php`中数据库相关配置。
3. 修改`server.js`,修改端口为相应的后端端口。
   ```
   app.use(proxy('/wedding', {
       target: 'http://localhost:80',
       changeOrigin: true
   }));
   ```

## 生产坏境打包

### 方式一

1. `npm run bundle`
2. 拷贝`dist`文件夹至服务器即可。

### 方式二

1. 服务器安装Node环境以及pm2（用于管理Node进程）
2. 拷贝工程根目录到服务器
3. 进入服务器上的工程跟目录
4. 执行`npm install`
4. 执行`pm2 start server.js`

## 其他说明

1. 所有可配置的照片放在`src/asset/images/photos`
2. 所有可配置的音频放在`src/asset/audio`。
