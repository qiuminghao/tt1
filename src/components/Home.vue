<template>
  <div id="app">
    <!--home页面-->
    <el-container indev="/home">
      <el-header>
        <!--当前容器-->
        <div class="container">
          <!--header头部-->
          <el-row type="flex" justify="start" align="middle">
            <el-col :span="6">
              <router-link to="/">
              </router-link>
            </el-col>
            <el-col :span="6">
              <h2 :class="active == true ? 'title on' : 'title'">{{$route.meta.name}}</h2>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>
        </div>
      </el-header>
      <!--容器的asize部分-->
      <el-container>
        <el-aside width="230px">
          <el-menu router
                   default-active="/home"
                   class="el-menu-vertical-demo"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   style="height:100%;">
            <!--测试模块-->
            <el-menu-item index="/user">
              <i class="el-icon-house"></i>
              <span slot="title">测试</span>
            </el-menu-item>
            <!--首页的模块-->
            <el-menu-item index="/home">
              <i class="el-icon-house"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!--管理员模块-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>超级管理员权限</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/manager">
                <i class="el-icon-caret-right"></i>
                管理员
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/managerOperation">
                <i class="el-icon-caret-right"></i>
                管理员操作记录
              </el-menu-item>
            </el-submenu>
            <!--用户模块-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <!--子模块发起的路由路径-->
                <el-menu-item index="/userManager">
                  <i class="el-icon-caret-right"></i>
                  用户管理
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--订单模块-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-shopping-bag-1"></i>
                <span>订单管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/orderManagerment">
                <i class="el-icon-caret-right"></i>
                订单管理
              </el-menu-item>
            </el-submenu>
            <!--房间模块-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>房间管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/roomManagerment">
                <i class="el-icon-caret-right"></i>
                房间管理
              </el-menu-item>
            </el-submenu>
            <!--俱乐部模块-->
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-sunny"></i>
                <span>俱乐部管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/clubManagerment">
                <i class="el-icon-caret-right"></i>
                俱乐部管理
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/clubRoomManagerment">
                <i class="el-icon-caret-right"></i>
                俱乐部房间管理
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/clubNumberManagerment">
                <i class="el-icon-caret-right"></i>
                俱乐部成员管理
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/clubStatisticManagerment">
                <i class="el-icon-caret-right"></i>
                俱乐部统计
              </el-menu-item>
            </el-submenu>
            <!--比赛管理模块-->
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-sunny"></i>
                <span>比赛场管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/playground">
                <i class="el-icon-caret-right"></i>
                比赛场
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/registrationList">
                <i class="el-icon-caret-right"></i>
                报名列表
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/prizeWinner">
                <i class="el-icon-caret-right"></i>
                获奖者
              </el-menu-item>
            </el-submenu>
            <!--消息模块-->
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-chat-square"></i>
                <span>消息管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/message">
                <i class="el-icon-caret-right"></i>
                消息，公告
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/userFeedback">
                <i class="el-icon-caret-right"></i>
                消息反馈
              </el-menu-item>
            </el-submenu>
            <!--系统管理模块-->
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统管理</span>
              </template>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/systemStatistical" >
                <i class="el-icon-caret-right"></i>
                系统统计
              </el-menu-item>
              <!--子模块发起的路由路径-->
              <el-menu-item index="/systemSetting">
                <i class="el-icon-caret-right"></i>
                系统设置
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!--容器main部分-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    height: 100%;
    padding: 3px;
  }
  .el-header{
    background-color: #B3C0D1;
    text-align: center;
    height:100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    text-align: center;
    height:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    text-align: center;
    height:100%;
  }
  .el-container {
    height:100%;
  }

</style>
