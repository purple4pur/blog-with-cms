# Purple4pur's Blog

> Author: Purple4pur<br />
> Date: 2020 / 01 / 31<br />
> License: MIT

开源的个人博客，线上地址 [www.purple4pur.com](https://purple4pur.com)。

搭建这个博客得到了舍友 [ketchuppp](https://github.com/ketchuppp) 的启发（ballball大佬带带我），看他在 [他的博客](https://ketchuppp.xyz/) 上记录和分享内容我觉得很赞。于是寒假期间瞎学习了一波，打算纯手撸一个博客，当然现在还在逐步搭建中，希望上学前能有一个比较完整的面貌。

本 repo 是从一个私人仓库复制过来的，所以有一些初始进度，以后代码会直接提交到这里。

**2020 / 02 / 15 更新**：从 1 月 25 号到今天，博客终于「能用」了。大声宣布目标完成！

## 技术栈

### 前端

- 框架
  - [React](https://reactjs.org/)：流行的前端框架
- 路由
  - [react-router-dom](https://reacttraining.com/react-router/web)：react 搭配的路由 dom 组件
- 数据管理
  - [redux](https://redux.js.org/)：统一管理前端的所有数据
  - [react-redux](https://react-redux.js.org/)：利用 react 的 content 特性优化 redux 在 react 框架中的体验
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)：redux 官方的 middleware，功能同 redux-saga
- 网络请求
  - [axios](https://github.com/axios/axios)：常用 http 请求库
- md 内容渲染
  - [react-markdown](https://github.com/rexxars/react-markdown)：markdown 源文本渲染为组件

### 后端

- 服务器
  - [php](https://www.php.net/)：需要的功能不复杂，再说了别的我也不会……
- 数据库
  - [MariaDB](https://mariadb.org/)：MySQL 的一个变体

当然由于博客还在搭建中，可能用的技术还会更改，我会及时更新的。

## 进度及 todos

由于我是边学边查边写，所以进度不快也不稳定，还会经常犯错，李姐万岁。

初始进度：完成前端的 header 和 footer，数据库完成设计，后端页面能正确显示数据。

待完成：

- [ ] 关于
- [ ] 首页
- [ ] 管理、草稿和非公开文章可编辑和修改状态
- [ ] 优化页面布局
- [ ] ...

已完成：

- [x] 各个分类显示文章列表
- [x] 全部改用 inner join 查询数据库
- [x] 增加标签栏
- [x] 显示标签栏内容
- [x] 404 页面
- [x] 按标签显示文章
- [x] CMS 登陆及检查（login 页面）
- [x] 记住登陆
- [x] 错误提示
- [x] CMS 导航栏和大致框架
- [x] 文章管理显示文章列表
- [x] CMS 提交新文章
- [x] markdown 渲染出 html
- [x] 单独的文章页面
- [x] CMS 草稿箱
- [x] 文章详情页样式
- [x] 数据库的操作改用 prepare 和 bind
- [x] 栏目页和标签页的样式
- [x] 提交文章时选择标签
- [x] 用 react-helmet 库控制标题
- [x] 文章内图片样式

## 本地搭建

1. clone
   ```
   git clone git@github.com:purple4pur/blog-with-cms.git
   cd blog-with-cms
   ```
2. 安装依赖库
   ```
   npm install
   ```
3. 启动调试
   ```
   npm start
   ```

### 可用脚本

- `npm start`：启用本地预览或 debug，默认地址 [http://localhost:3000/](http://localhost:3000/)。
- `npm run build`：生产环境打包，打包结果位于 `/build` 目录下。

### 注意

1. 将 `/src/services/index.js` 内的 `baseUrl` 更改为自己的后端响应页面。
2. 将 `/public/apis/consts` 目录下的 `dbConst.example.php` 重命名为 `dbConst.php`，并修改为自己的数据库信息。
3. 将 `/public/apis/consts` 目录下的 `privateKey.example.php` 重命名为 `privateKey.php`，并修改为自己用于加密的随机字符串。
4. 所有 `sql` 语句请根据数据库的结构进行修改。

## 关于 [CHANGELOG](https://github.com/purple4pur/blog-with-cms/blob/master/CHANGELOG.md)

此文档只记录网页上「看得见」的变化，详细代码变化请查看 [commit message](https://github.com/purple4pur/blog-with-cms/commits/master)。

## 关于 [ISSUELOG](https://github.com/purple4pur/blog-with-cms/blob/master/ISSUELOG.md)

此文档记录开发过程中「已解决」的问题，未解决的问题可参看 [Issues](https://github.com/purple4pur/blog-with-cms/issues)。

## 交流

关于本 repo 的任何问题，可以移步 [Issues](https://github.com/purple4pur/blog-with-cms/issues)，我也会在 [Issues](https://github.com/purple4pur/blog-with-cms/issues) 里记录开发中的一些问题。也欢迎从以下方式直接联系我（**务必备注清楚**），一起交流学习。

- Wechat: erCtain
- E-mail: [pruple4pur@gmail.com](mailto:purple4pur@gmail.com)

## 注意

本 repo 暂时不接受 pull request。
