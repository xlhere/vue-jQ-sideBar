# vue 中使用jquery

> tree test

## 使用jquery过程

```bash
1. 安装jquery依赖   npm install jquery --save
2. 如果是 vue2.X，修改 webpack.base.conf 文件，
   2.1 引入 webpack const webpack = require('webpack')
   2.2 配置: plugins: [
              new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
              })
            ],
3. 在组件中使用 jquery  import $ from 'jquery'

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
