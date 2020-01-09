// 此文件用于管理vant组件库的组件引入
import Vue from 'vue'
// 引入组件
import {
  Button,
  Cell,
  CellGroup,
  NavBar,
  Field,
  Toast,
  CountDown,
  Tabbar,
  TabbarItem
} from 'vant'
// 全剧注册组件
Vue.use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Field)
  .use(Toast)
  .use(CountDown)
  .use(Tabbar)
  .use(TabbarItem)
