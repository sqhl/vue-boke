<template>
  <div>
    <div class="detail">
      <div class="container">
        <h4>吐槽板</h4>
        <hr/>
        <i class="iconfont icon-shoucang">欢迎光临小破站,来了就吐槽几句吧！</i><br/>
        <i class="iconfont icon-shoucang">你同样可以加入小破站,成为小破站的管理喔！</i><br/>
        <i class="iconfont icon-shoucang">你有什么想告诉小破站的，都可以来这里说喔！</i><br/>
        <i class="iconfont icon-shoucang" style="font-weight:700;">但请不要在本站发布无意义广告评论，相信我！会被秒删哒！</i><br/>
        <hr/>
      </div>
    </div>

    <div class="detail">
      <div class="comment-sub">
        <commentSubmit></commentSubmit>
      </div>
      <div class="comment-all">
        <div class="comments">
          <wordsAll></wordsAll>
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
import wordsAll from '../../../components/words/words-all'
export default {
  components: {
    'commentSubmit': commentSubmit,
    'wordsAll': wordsAll
  }
}
</script>

<style scoped>
  .detail{
    margin: auto;
    margin-top: 20px;
    width: 99%;
    height: ;
    box-shadow: 0px 0px 5px 0px;
    background: rgba(255, 255, 255, 0.5);
  }
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
