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
Vue.component('wenzhang-category', {
  template: "<div class='container'>" +
    "<i class='iconfont icon-dakai icon-special' v-for='tab in tabs' :key='tab'>{{ tab }}<br/></i>" +
  '</div>',
  data: function () {
    return {
      tabs: ['python', 'vue', '游戏']
    }
  }
})
Vue.component('vedio-category', {
  template: "<div class='container'>" +
    "<i class='iconfont icon-dakai icon-special' v-for='tab in tabs' :key='tab'>{{ tab }}<br/></i>" +
  '</div>',
  data: function () {
    return {
      tabs: ['动漫', '电视剧', '游戏', '影片']
    }
  }
})
export default {
  data: function () {
    return {
      currentTab: 'wenzhang-category',
      tabs: [{'wenzhang-category': '文章分类'}, {'vedio-category': '视频分类'}]
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  }
}
</script>

<style>
.tab-button {
  width: 181px;
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
  width: 362px;
  border: 1px solid #ccc;
  padding: 10px;
}
.icon-special:hover{
  color: #00FFCC;
  cursor: pointer;
}
.modal-backdrop{
  z-index: 10;
}
</style>
