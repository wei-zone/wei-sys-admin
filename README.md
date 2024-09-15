# vue3-element-admin

## 项目启动

```bash

# 设置镜像源(可忽略)
pnpm config set registry https://registry.npmmirror.com

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```

## 本地 Mock

项目同时支持在线和本地 Mock 接口，默认使用线上接口，如需替换为 Mock 接口，修改文件 `.env.development` 的
`VITE_MOCK_DEV_SERVER` 为 `true` **即可**。

## 项目文档

-   [基于 Vue3 + Vite + TypeScript + Element-Plus 从 0 到 1 搭建后台管理系统](https://blog.csdn.net/u013737132/article/details/130191394)
-   [ESLint+Prettier+Stylelint+EditorConfig 约束和统一前端代码规范](https://blog.csdn.net/u013737132/article/details/130190788)
-   [Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范](https://blog.csdn.net/u013737132/article/details/130191363)
