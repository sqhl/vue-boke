<template>
  <div>
    <div class="detail">
      <div class="theme"><h2>关于一个7位数之类的加法，用普通的rnn算法实现</h2></div>
      <div class="content-next">
            <i class="iconfont icon-riqi">十二月 16,2008</i>
            <i class="iconfont icon-xiaoxi_o">0条评论</i>
            <i class="iconfont icon-faxianliulan">45次阅读</i>
            <i class="iconfont icon-dianzan_kuai">1人点赞</i>
            <i class="iconfont icon-icon_zhanghao">海螺</i>
      </div>
      <div class="content">
        <div class="content-text">213213</div>
        <div class="enter-footer">
          <div class="i-reward"><i class="iconfont icon-renminbicaiwuzhifu">打赏</i></div>
          <div class="i-express"><i class="iconfont icon-dianzan_kuai">点赞</i></div>
          <div class="i-share"><i class="iconfont icon-fenxiangfangshi">分享</i></div>
        </div>
        <div class="enter-last-footer">
          <div class="container">
            <i class="iconfont icon-tags" style="font-size:20px;"></i>
            <button type="button" class="btn btn-sm btn-light">播放器</button>
            <button type="button" class="btn btn-sm btn-light">服务</button>
            <button type="button" class="btn btn-sm btn-light">Email</button>
          </div>
        </div>
      </div>
    </div>

    <div class="detail">
      <div class="comment-sub">
        <commentSubmit></commentSubmit>
      </div>
      <div class="comment-all">
        <div class="comments">
          <commentAll></commentAll>
        </div>
        <ul class="pagination" style="margin-top:50px; margin-left: 270px;">
          <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
import commentSubmit from '../../../components/details/comment-sub'
import commentAll from '../../../components/details/comment-all'
export default {
  components: {
    'commentSubmit': commentSubmit,
    'commentAll': commentAll
  }
}
</script>

<style scoped>
  @import "./detail.less";
  .comment-sub{
    margin: auto;
    margin-top: 20px;
    width: 95%;
    height: ;
  }
  .comment-all{
    margin: auto;
    margin-top: -1px;
    width: 95%;
    height: ;
  }
  .comments{
    width: 100%;
    height: ;
  }
</style>
