// 此文件用于管理vant组件库的组件引入
import Vue from 'vue'
// 引入组件
import {
  Button,
  Cell,
  CellGroup
} from 'vant'
// 全剧注册组件
Vue.use(Button)
  .use(Cell)
  .use(CellGroup)