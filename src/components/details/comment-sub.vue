<template>
  <div class="container">
    <h4>评论吐槽</h4>
    <hr/>
    <textarea class="comment-input" type="text" name="comment-input" maxlength="800"></textarea>
    <div class="comment-submit">
      <button><i class="iconfont icon-face"></i></button>
      <button><i class="iconfont icon-font-bold"></i></button>
      <button><i class="iconfont icon-font-italic"></i></button>
      <button><i class="iconfont icon-font-del"></i></button>
      <button><i class="iconfont icon-inlinecode"></i></button>
      <button><i class="iconfont icon-picture"></i></button>
      <button><i class="iconfont icon-link"></i></button>
      <button style="width: 90px;float:right;"><p>提交评论</p></button>
      <button style="width: 50px;float:right"><p>清除</p></button>
    </div>
    <hr/>
  </div>
</template>

<script>

</script>

<style scoped>
  .comment-input{
    width: 100%;
    height: 120px;
    border: 1px solid rgba(44,52,62,0.2);
    background: url('./comment.jpg') center center no-repeat;
    background-position: bottom right;
    background-size: 10% 60%;
  }
  .comment-submit{
    margin-top: 1px;
    width: 100%;
    height: 35px;
    font-size:0px;
    border: 1px solid rgba(44,52,62,0.2);
  }
  .comment-submit button{
    width: 50px;
    height: 100%;
    font-size: 20px;
    border: 1px solid rgba(44,52,62,0.2);
    background: white;
    cursor: pointer;
  }
  .comment-submit p{
    margin: auto;
    font-size: 13px;
  }
  .comment-submit button:hover{
    background: rgba(24,234,187,0.5);
  }
</style>
