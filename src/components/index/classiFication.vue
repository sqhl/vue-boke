<template>
  <div style="background: rgba(255, 255, 255, 0.5);">
    <span v-for="(tab,index) in tabs" :key="index">
      <button
      v-for="(value,key) in tab"
      v-bind:key="key"
      v-bind:class="['tab-button', { active: currentTab === key }]"
      v-on:click="currentTab = key"
      >{{ value }}</button>
    </span>

    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('category', {
  template: "<div class='container'>" +
    "<i class='iconfont icon-bianji1 icon-special' v-for='tab in tabs' :key='tab' style='cursor: pointer;'>{{ tab }}<br/></i>" +
  '</div>',
  data: function () {
    return {
      tabs: ['python', 'vue', '游戏', 'c++', 'cocos']
    }
  }
})
Vue.component('pic', {
  template: "<div class='container'>" +
    "<i class='iconfont icon-bianji1 icon-special' v-for='tab in tabs' :key='tab'>{{ tab }}<br/></i>" +
  '</div>',
  data: function () {
    return {
      tabs: ['hop', 'cg', '游戏', '库巴姬', '啦啦啦']
    }
  }
})
Vue.component('vedio', {
  template: "<div class='container'>" +
    "<i class='iconfont icon-bianji1 icon-special' v-for='tab in tabs' :key='tab'>{{ tab }}<br/></i>" +
  '</div>',
  data: function () {
    return {
      tabs: ['动漫', '电视剧', '游戏', '影片', '广告']
    }
  }
})
export default {
  data: function () {
    return {
      currentTab: 'category',
      tabs: [{'category': '最新文章'}, {'pic': '最新图包'}, {'vedio': '最新视频'}]
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.tab-button {
  width: 120.5px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  width: 360px;
  padding: 10px;
}
</style>
