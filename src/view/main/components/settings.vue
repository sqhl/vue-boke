<template>
  <div class="setting">
    <div id="btn_top" @click="btn_top" v-show="false"><i class="iconfont icon-jiantoushang"></i></div>
    <div id="btn_sousuo">
      <div id="btn_sousuo_icon" @click="btn_sousuo">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <input type="text" ref="input" placeholder="search..." v-show="isInput" @blur.prevent="changeCount()" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isInput: false
    }
  },
  methods: {
    btn_top () {
      $('.f-CircleOutside').animate({ scrollTop: 0 }, 500)
      return false
    },
    btn_sousuo () {
      $('#btn_sousuo_icon').animate({
        marginLeft: '0px',
        width: '250px'
      }, 300)
      const that = this
      setTimeout(
        function () {
          that.isInput = true
        }, 300)
      setTimeout(
        function () {
          that.$refs.input.focus()
        }, 300)
    },
    changeCount () {
      this.isInput = false
      $('#btn_sousuo_icon').animate({
        marginLeft: '208px',
        width: '42px'
      }, 300)
    }
  }
}
</script>

<style scoped>
  .setting{
    z-index: 999;
    width: 42px;
    height: ;
    position: absolute;
    right: 30px;
    bottom: 60px;
  }
  #btn_top{
    padding-top: 6px;
    padding-left: 10px;
    margin-top: 10px;
    height: 42px;
    background: #ADADAD;
    cursor: pointer;
  }
  .setting i{
    margin: auto;
    font-size: 20px;
    color: white;
  }
  #btn_sousuo{
    margin-top: 10px;
    margin-left: -208px;
    height: 42px;
    background: rgba(255,255,255,0);
  }
  #btn_sousuo div{
    position:absolute;
    padding-top: 6px;
    padding-left: 10px;
    margin-left: 208px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    background: #ADADAD;
  }
  #btn_sousuo input{
    position:absolute;
    padding: 0px;
    border: 0px;
    margin-left: 42px;
    width: 208px;
    height: 42px;
    background: rgba(255,255,255,0);
  }
</style>
