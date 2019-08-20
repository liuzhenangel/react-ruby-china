# react-ruby-china

> A RubyChina clone frontend project using React and ruby-china's api

## Demo

项目 Demo 请访问: <http://ruby-china.liuzhen.me/>

## 程序员面试助手

项目链接: <http://showmebug.dao42.com/>

## 项目介绍

react-ruby-china 项目是一个利用 react, react-dom, react-redux, react-router, redux, es6, redux-thunk 和 ruby-china api 实现的 RubyChina 社区克隆项目, 主要目的是为了学习 reac.js, 很适合学习 reac.js 的朋友参考.

这是一个前后端分离项目, 前端主要是 react, react-dom, react-redux, react-router, redux, es6, redux-thunk, css 框架使用了 bootstrap. 后端利用 ruby-china 开放的 api. 支持响应式布局. 部分功能仍在持续完善中.

## 核心技术框架

* react
* react-dom
* react-router
* redux
* redux-thunk
* react-md-editor
* isomorphic-fetch
* react-paginate
* react-redux
* marked
* es6-promise
* classnames

## 系统依赖

* Node ( >= 6.5 )
* npm ( >= 3.10.6 )

## 开发环境准备

第一步, 安装项目依赖

```bash
$ npm install
```


第二步, 启动服务

```bash
$ npm start
```

第三步, 浏览器访问: <http://localhost:3000>
结束.

## 如何发布?

第一步, 配置nginx

先根据项目里的 `/src/config/nginx.conf.example` 文件, 修改其中的配置, 然后将文件复制到你的服务器上 nginx 所在目录的 `/etc/nginx/conf.d` 目录下, 命名为 xxx.conf 的文件. 然后重启 nginx.


第二步, 在 `package.json` 文件中添加 一条 deploy 命令放在 scripts 下.

参考: "deploy": "react-scripts build && scp -r build/ 服务器用户名@服务器域名:~/项目所在目录/"


第三步, 发布

```bash
$ npm run deploy
```

## 学习参考资料

>在学习 React 过程中, React 文档做的没有 Vue 好, 文档中的例子各种语法. 对着照做不一定对, 也不方便查询, 踩过很多坑后发现一下相对比较好的文档, 分享给大家.

React 中文文档(这个文档很好查询, 但是很多内容写的太简单了没讲清楚, 而且内容不全): <https://hulufei.gitbooks.io/react-tutorial/content/index.html>

React 官方英文文档: <https://facebook.github.io/react/docs/getting-started.html>

React 中文文档(这个文档比较差): <http://reactjs.cn/react/docs/getting-started-zh-CN.html>

极客学院提供的 React 中文文档: <http://wiki.jikexueyuan.com/project/react/>

另一个 Reac 中文文档(这个比较全面, 但是不便于搜索): <http://www.phperz.com/article/15/0712/140537.html>

React Router 中文文档: <https://react-guide.github.io/react-router-cn/>

RubyChina API: <https://ruby-china.org/api>

ReacChina 社区(这里面有很多资源): <http://react-china.org/>

ES6 文档: <http://es6.ruanyifeng.com/#docs/intro>

Redux 介绍: <http://www.alloyteam.com/2015/09/react-redux/>

## Google 数据分析

在 `https://analytics.google.com` 创建新账户, 获到到相应的 JS 代码, 替换 index.html 中的javascript 代码片段.

## 引荐 Vue.js 项目

项目 Demo 请访问: <http://v2ex.liuzhen.me/>

项目代码: <https://github.com/liuzhenangel/v2ex_frontend>

## 引荐个人博客项目

项目 Demo 请访问: <http://liuzhen.me/>

项目代码: <https://github.com/liuzhenangel/RBlog>

## 贡献者

* Rina

## Roadmap

- [ ] 登录与注册

- [ ] 支持 创建 及 更新 操作

## LICENSE

MIT
