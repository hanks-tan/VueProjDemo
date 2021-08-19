# webpack-test
这个项目用于打包优化及性能优化

# 基础代码
## 模块
已安装 element-ui、openlayers、axios、vue-route
# 过程记录
  1. 实现地图展示基本功能，和一个Map组件(未用到element-ui、axios)  
  打包体积 | 459K(大小值，非占用空间，下同)

  2. 加入Vue、Element-UI
  ```js
  import Vue from 'vue'
  import ElementUI from 'element-ui'

  Vue.use(ElementUI)
  ```  
  打包  
  打包体积 | 1.14M  
  体积翻了1倍多
  因为是Vue项目，Vue框架本身就已经引入，因此这部分体积主要来自ElementUI

  3. 在组件中引入axios,并未使用
  ```js
  import axios from 'axios'
  ```
  打包  
  打包体积 | 1.14M  
  **单是这样的引入，似乎并未增加打包体积**

  使用axios请求数据试试
  ```js
    const url = 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson'
    axios.get(url).then((res) => {
      console.log(res)
    })
  ```
  再次打包，1.14M, 体积也并未增加
  **看来似乎这样简单的使用，对打包体积影响不大**


  4. 引入css预处理器，sass
  ```
  npm i -D node-sass@4.14.1 sass-loader@7.2.0
  ```
  -D 标识安装的是开发依赖，对应package.json里的devDependencies  
  修改组件样式属性

  ```css
  <style lang="scss">
  ...
  </style>
  ```
  打包
  打包体积 | 1.14M
  **体积并未增加**

  在scss内使用变量语法，再打包，体积也并未增加。
  **由此可见，使用sass并未引起体积增加**
  **其实，sass属于开发依赖，也就是开发过程种需要的模块，不会打包到最终的项目中**
  不妨安装时试试把 -D去掉，再按上面的步骤来。



