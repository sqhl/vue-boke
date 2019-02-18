<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('tab-home', {
  template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
  template: '<div>Posts component</div>'
})
Vue.component('tab-archive', {
  template: '<div>Archive component</div>'
})
export default {
  data: function () {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.tab-button {
  width: 70px;
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
  width: 210px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
