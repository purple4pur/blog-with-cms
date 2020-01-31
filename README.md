# Purple4pur's Blog

> Author: Purple4pur<br />
> Date: 2020 / 01 / 31<br />
> License: MIT

开源的个人博客，线上地址 [www.purple4pur.com](https://purple4pur.com)。

搭建这个博客得到了舍友 [ketchuppp](https://github.com/ketchuppp) 的启发（ballball大佬带带我），看他在 [他的博客](https://ketchuppp.xyz/) 上记录和分享内容我觉得很赞。于是寒假期间学习了一下整个流程，纯手撸了一个博客，当然现在还在逐步搭建中，希望上学前能有一个比较完整的面貌。

本 repo 是从一个私人仓库复制过来的，所以有一些初始进度，以后代码会直接提交到这里。

## 技术栈

- 前端
  - 框架
    - [React](https://reactjs.org/)：应该是最流行的前端库了吧
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
- 后端
  - 服务器
    - [php](https://www.php.net/)：需要的功能不复杂，再说了别的我也不会……
  - 数据库
    - [mariaDB](https://mariadb.org/)：mySQL 的一个变体

当然由于博客还在搭建中，可能用的技术还会更改，我会及时更新的。

## 进度及 todos

由于我是边学边查边写，所以进度不快也不稳定，还会经常犯错，李姐万岁。

初始进度：完成前端的 header 和 footer，数据库完成设计，服务器页面能正确显示数据。

- [ ] 各个分类显示文章列表
- [ ] 增加标签栏
- [ ] ...

## 本地搭建

1. clone 或 fork
   ```
   git clone git@github.com:purple4pur/blog-with-cms.git
   cd blog-with-cms
   ```
2. 安装依赖库
   ```
   npm i -S react react-dom react-scripts react-router-dom
   npm i -S redux redux-thunk react-redux
   npm i -S axios react-markdown
   ```

### 可用脚本

- `npm run start`：启用本地预览或 debug，默认地址 [http://localhost:3000/](http://localhost:3000/)。
- `npm run build`：生产环境打包，打包结果位于 `/build` 目录下。

### 注意

1. 后端的事自己用本地服务器解决。
2. 将 `/public/php` 目录下的 `dbConst.example.php` 重命名为 `dbConst.php`，并修改为你自己的数据库信息。
3. 后端页面请根据自己数据库的结构进行修改。

## 关于 [CHANGELOG](https://github.com/purple4pur/blog-with-cms/blob/master/CHANGELOG.md)

这里只记录网页上「看得见」的变化，代码变化请查看 [commit message](https://github.com/purple4pur/blog-with-cms/commits/master)。

## 交流

关于本 repo 的任何问题，可以移步 [Issues](https://github.com/purple4pur/blog-with-cms/issues)，也欢迎从以下方式直接联系我（**务必备注清楚**），一起交流学习。

- Wechat: erCtain
- E-mail: [pruple4pur@gmail.com](mailto:purple4pur@gmail.com)

## 注意

本 repo 暂时不接受 pull request。
