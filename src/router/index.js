import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ManagerOperation from '../components/ManagerOperation'
import Manager from '../components/Manager'
import UserManager from '../components/UserManager'
import OrderManagerment from '../components/OrderManagerment'
import RoomManagerment from '../components/RoomManagerment'
import ClubManagerment from '../components/ClubManagerment'
import ClubRoomManagerment from '../components/ClubRoomManagerment'
import ClubNumberManagerment from '../components/ClubNumberManagerment'
import ClubStatisticManagerment from '../components/ClubStatisticManagerment'
import Playground from '../components/Playground'
import RegistrationList from '../components/RegistrationList'
import PrizeWinner from '../components/PrizeWinner'
import Message from '../components/Message'
import UserFeedback from '../components/UserFeedback'
import SystemStatistical from '../components/SystemStatistical'
import SystemSetting from '../components/SystemSetting'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/managerOperation', name: 'ManagerOperation', component: ManagerOperation},
    {path: '/manager', name: 'Manager', component: Manager},
    {path: '/userManager', name: 'UserManager', component: UserManager},
    {path: '/orderManagerment', name: 'OrderManagerment', component: OrderManagerment},
    {path: '/roomManagerment', name: 'RoomManagerment', component: RoomManagerment},
    {path: '/clubManagerment', name: 'ClubManagerment', component: ClubManagerment},
    {path: '/clubRoomManagerment', name: 'ClubRoomManagerment', component: ClubRoomManagerment},
    {path: '/clubNumberManagerment', name: 'ClubNumberManagerment', component: ClubNumberManagerment},
    {path: '/clubStatisticManagerment', name: 'ClubStatisticManagerment', component: ClubStatisticManagerment},
    {path: '/playground', name: 'Playground', component: Playground},
    {path: '/registrationList', name: 'RegistrationList', component: RegistrationList},
    {path: '/prizeWinner', name: 'PrizeWinner', component: PrizeWinner},
    {path: '/message', name: 'Message', component: Message},
    {path: '/userFeedback', name: 'UserFeedback', component: UserFeedback},
    {path: '/systemStatistical', name: 'SystemStatistical', component: SystemStatistical},
    {path: '/systemSetting', name: 'SystemSetting', component: SystemSetting}
  ]
})
