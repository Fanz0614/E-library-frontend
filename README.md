1. 使用styled-components进行css引用，创建createglobalstyle组件并全局引用css样式并在app.js中作为组件引用(必须放到app.js中以组件方式调用)
yarn add styled-components
2. 把style.js导出到index.js文件
3. 在app.js中使用style-components的组件
4. 子组件->app.js->index.js
5. 动画实现需要使用react-transition-group   yarn add react-transition-group
6. 使用react-redux管理数据
yarn add redux    yarn add react-redux
7. github->redux-devloptool-extension-Advanced store set up
8. 使用redux-thunk实现异步，axios调用数据
9. 当在class内部创建函数时，引用该函数需要用this来引用{this.getArea()}
10. 动态分页功能要先设定在reducer里页数和总页数，再去action里定义页数，最后返回reducer执行操作
11. yarn add react-router-dom 导入路由模块
12. 每一模块都有index.js和styled.js
13. z-index实现CSS堆叠