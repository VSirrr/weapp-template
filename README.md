# weapp-template

## 开发之前的准备工作

### 安装依赖

```shell
  npm i
```

### 导入项目

使用微信开发者工具导入项目根目录

### 目录结构介绍

```sh
.
├── api #接口文件
├── components #组件文件
├── config #配置（开发环境、版本信息、接口域名等）
├── images #图片
├── miniprogram_npm #第三方 npm 包
├── pages #主包页面
├── subpackages #分包
└── utils #工具文件
```

### 小程序使用依赖(miniprogram_npm)

- [@vant/weapp 组件库](https://vant-ui.github.io/vant-weapp/#/quickstart)

### Storage 中存放信息的名词解释

- wxUser: 使用微信登录后返回的用户信息，即微信账号信息

## 代码提交规范

- feat: 新增 xx 功能
- fix: 修复 xx 问题
- docs: 修改文档，例如：README、CHANGELOG 等
- style: 对代码进行格式化，不改变代码逻辑
- refactor: 代码重构，改变已有代码逻辑，不包含新增功能和修复问题
- chore: 修改工具配置文件，例如：\*.config.js、package.json
- perf: 优化相关，比如提升性能、体验
- revert: 代码回滚
