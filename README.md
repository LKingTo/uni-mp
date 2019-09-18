# uni-mp

uni-app搭建微信小程序框架基础模板

## 安装依赖
```
yarn install
```

### 编译文件和监听变化
```
yarn run dev:mp-weixin
```

## 在微信开发者工具中预览
信开发者工具下载地址：[链接](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)

 项目 => 导入项目 => "目录"一栏中选择 "uni-mp/dist/dev/mp-weixin"

## 主要技术

主框架：[uni-app](https://uniapp.dcloud.io/)

状态管理: vuex

模板：Pug

样式：SCSS

Icon图标方案：iconfont + webfont-webpack-plugin，直接在uni-mp/src/styles/icons目录下添加svg格式文件，编译时自动生成font文件。
[webfont-webpack-plugin](https://github.com/itgalaxy/webfont-webpack-plugin#readme)

JavaScript： ES6

工具函数：[lodash-es](https://www.lodashjs.com/)

代码质量控制： [ESLint](https://cn.eslint.org/)

IDE（WebStorm）设置：

 - 打开ESint代码检查工具：WebStorm -> Preferences -> Languages & Frameworks -> JavaScript ->
 Code Quality Tool -> ESLint -> Enable)

 - 打开EditorConfig：WebStorm -> Preferences -> Editor -> Code Style ->
  Editor Config -> Enable EditorConfig Support (.editorconfig文件
  定义了换行符以及缩进符，此配置会覆盖IDE配置)

