# Web Monorepo

- 包管理器 pnpm，monorepo 架构
- Web 框架 vue3
- UI 框架 element-ui

采用 monorepo 架构，组织 API、UI、工程之间的互相引用。

# 模块介绍

## @web/core

工程工程的核心模块，为一些通用的代码，如：

- useElementPLus 有选择的引用`element-plus`的组件
- useElementPlusIcon 有选择的引用`element-plus/icon`的组件
- useEnv 读取`import`环境变量
- useLogger 日志模块
- useStorage 持久化存储
- useTabMessage 页面 Tab 间通信
- useToken jwt 的引用

## @web/api

API 模块，通过配置文件，枚举需要使用的 API。最后，通过转换，将 API 转化为可调用的 API。

## @web/ui

通过的 Web 组件，包含基础组件、业务组件等，API 组件也放置在这里。

## @web/demo

Web 工程。所有的 Web 工程，基本都是通过`@web/core`、`@web/api`、`@web/ui`组装而成。

# 测试

使用`[vitest](https://vitest.dev/api/)`执行单元测试

同时引入`@vue/test-utils` `jsdom`对`.vue`文件，执行单元测试

# 文档

采用`apidoc`，通过注释，自动生成 API 文档.
