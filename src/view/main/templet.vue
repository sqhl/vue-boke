<template>
  <div style="width: 100%; height: 100%; padding: 0px; margin:0px;">
    <div class="e-CircleOutside">
      <div class="f-CircleOutside">
        <div class="title-bar" v-bind:style="{width: initial+'px'}">
          <div class="title-main" v-bind:style="{width: screenWidth+'px'}">
            <ul class="ul-title">
              <router-link to="/index">
                <li><i class="iconfont icon-shouye"></i>首页</li>
              </router-link>
              <router-link to="/video">
                <li><i class="iconfont icon-dianying"></i>视频</li>
              </router-link>
              <router-link to="/pic">
                <li><i class="iconfont icon-charutupian"></i>图包</li>
              </router-link>
              <router-link to="/live">
                <li><i class="iconfont icon-atm"></i>直播</li>
              </router-link>
              <router-link to="/chat">
                <li><i class="iconfont icon-interactive_fill"></i>聊天室</li>
              </router-link>
              <router-link to="/words">
                <li><i class="iconfont icon-icon_fabu"></i>留言板</li>
              </router-link>
              <router-link to="/about">
                <li><i class="iconfont icon-xukezheng"></i>关于</li>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="set-img">
          <div class="set-img-main">
            <h3>长寿村的神奇海螺</h3>
            <h4>——谨记</h4>
          </div>
        </div>
        <div class="set-content" v-bind:style="{width: screenWidth+'px'}">
          <div class="set-left-content">
            <router-view></router-view>
          </div>
          <div class="set-right-content" v-show="displayRight">
            <left></left>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="last-title"><font>本破小站已经在搭建啦<br>备案号：11111</font></div>
      </div>
      <settings></settings>
    </div>
    <modal></modal>
  </div>
</template>

<script>
import left from '../left'
import modal from '../../components/login/modal'
import settings from './components/settings'

export default {
  components: {
    left,
    modal,
    settings
  },
  data: function () {
    let Initialization = document.body.clientWidth
    let rightDivDisplay = false
    if (Initialization >= 1170) {
      Initialization = 1170
      rightDivDisplay = true
    } else if (Initialization < 1170 && Initialization >= 780) {
      Initialization = 780
    } else {
      Initialization = document.body.clientWidth
    }
    return {
      screenWidth: Initialization,
      initial: document.body.clientWidth - 10,
      timer: true,
      displayRight: rightDivDisplay,
      domainList: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted () {
    const that = this
    window.onresize = function windowResize () {
      if (that.timer) {
        let Initialization = document.body.clientWidth
        let rightDivDisplay = false
        if (Initialization >= 1170) {
          Initialization = 1170
          rightDivDisplay = true
        } else if (Initialization < 1170 && Initialization >= 780) {
          Initialization = 780
        }
        that.displayRight = rightDivDisplay
        that.screenWidth = Initialization
        that.initial = document.body.clientWidth - 10
        that.timer = false
        setTimeout(function () {
          that.timer = true
        }, 200)
      }
    }
    $($('.f-CircleOutside')).scroll(function () {
      if ($('.f-CircleOutside').scrollTop() >= 50) {
        $('#btn_top').fadeIn()
      } else {
        $('#btn_top').fadeOut()
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "./templet.less";
</style>
