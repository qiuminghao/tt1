import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Column,
  HandleOpen,
  HandleClose,
  Dialog,
  MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Column)
Vue.use(HandleOpen)
Vue.use(HandleClose)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
