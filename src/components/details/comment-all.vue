<template>
  <div class="comments-next">
    <div class="comment">
      <div class="head-img">
        <div class="set-head-img"></div>
      </div>
      <div class="comment-content">
        <div class="comment-id">
          <span class="id-div">咕咕</span>
          <span class="id-name">长寿村的神奇海螺</span>
        </div>
        <div class="comment-text">
          啦啦啦啦<br>
          改革春分吹满地<br>
          中国人民真解气<br>
          rua!!!<br>
        </div>
        <div class="comment-info">
          <span>#1&nbsp;&nbsp;&nbsp;&nbsp;2019-01-07 00:22</span>
          <i class="iconfont icon-dianzan_kuai">45</i>
          <button>回复</button>
        </div>

        <div class="comments-second">
          <div class="comment-second" v-for="(item,index) in domainList" :key=index>
            <div class="set-second-img"></div>
            <div class="set-second-content">
              <div class="comment-second-content">
                <span class="id-name">咕咕鸡</span>
                !!!<br>你怎么穿着品如的衣服<br>
                还用别人的东西
              </div>
              <div class="comment-info">
                <span>2019-01-07 00:22</span>
                <i class="iconfont icon-dianzan_kuai">2</i>
                <button>回复</button>
              </div>
            </div>
          </div>
          <font>共有260条回复,<button>点击展开...</button></font>
        </div>

      </div>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      domainList: [1, 2, 3]
    }
  }
}
</script>

<style scoped>
  @import "./comment-all.less";
  .comments-next{
    width: 100%;
    height: ;
  }
  .comment{
    width: 100%;
    height: ;
  }
  .head-img{
    display: inline-block;
    vertical-align: top;
    width: 18%;
    height: ;
  }
  .comment-content{
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
  .set-second-img{
    float: left;
    margin: 0px;
    width: 40px;
    height: 40px;
    border: 1px solid #E8E8E8;
    border-radius: 50%;
    background: url('./comment-second.jpg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
</style>
