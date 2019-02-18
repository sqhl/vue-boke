<template>
  <div class="words">
    <div class="word" v-for="(item,index) in domainList" :key=index>
      <div class="head-img">
        <div class="set-head-img"></div>
      </div>
      <div class="word-content">
        <div class="word-id">
            <span class="id-div">咕咕</span>
            <span class="id-name">长寿村的神奇海螺</span>
        </div>
        <div class="comment-text">
            啦啦啦啦<br>
            改革春分吹满地<br>
            中国人民真解气<br>
            rua!!!<br>
        </div>
        <div class="word-info">
            <span>#1&nbsp;&nbsp;&nbsp;&nbsp;2019-01-07 00:22</span>
            <i class="iconfont icon-dianzan_kuai">45</i>
        </div>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      domainList: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style scoped>
  .words{
    width: 100%;
    height: ;
  }
  .word{
    width: 100%;
    height: ;
  }
  .head-img{
    display: inline-block;
    vertical-align: top;
    width: 15%;
    height: 85px;
  }
  .word-content{
    display: inline-block;
    vertical-align: top;
    width: 80%;
    height: ;
  }
  .set-head-img{
    margin: 0px;
    margin-left: 20px;
    width: 80px;
    height: 80px;
    border: 5px solid #E8E8E8;
    border-radius: 50%;
    background: url('../../../static/img/rightImg/head.jpg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .word-id{
  width: 100%;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  }
  .id-div{
    color: #BF9CD6;
    border-radius: 4px;
    border: 2px solid #BF9CD6;
  }
  .id-name{
    color: #BF9CD6;
  }
  .comment-text{
    width: 100%;
    height: ;
    font-size: 15px;
  }
  .word-info{
   width: 100%;
   height: 30px;
   font-size: 14px;
   line-height: 30px;
   color: #B8B8B8;
   cursor: default;
  }
  .word-info i{
    margin-left: 20px;
  }
  .word-info i:hover{
    color: #33FFCC;
    cursor: pointer;
  }
</style>
