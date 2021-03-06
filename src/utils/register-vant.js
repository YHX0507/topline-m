// 此文件用于管理vant组件库的组件引入
import Vue from 'vue'
// 引入组件
import {
  Button, Cell, CellGroup, NavBar, Field, Toast, CountDown, ImagePreview,
  Tabbar, TabbarItem, Image, Grid, GridItem, Dialog, Icon, DatetimePicker,
  List, Tab, Tabs, PullRefresh, Popup, Search, Loading, ActionSheet
} from 'vant'
// 全剧注册组件
Vue.use(Button).use(Cell).use(CellGroup).use(NavBar).use(Field)
  .use(Toast).use(CountDown).use(Tabbar).use(TabbarItem)
  .use(Image).use(Grid).use(GridItem).use(Dialog).use(Icon)
  .use(List).use(Tab).use(Tabs).use(PullRefresh).use(Popup)
  .use(Search).use(Loading).use(ActionSheet).use(DatetimePicker)
  .use(ImagePreview)
