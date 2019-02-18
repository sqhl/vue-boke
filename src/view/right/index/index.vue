<template>
  <div>
    <div v-for="(item,index) in domainList" :key=index>
      <div class="content">
        <div class="content-img"></div>
        <div class="content-info">
          <h1>标题</h1><p>正文</p>
        </div>
        <hr style='background-color:white; height:1px; border:none; margin-bottom: 0px;'/>
        <div class="content-next">
          <i class="iconfont icon-riqi">十二月 16,2008</i>
          <i class="iconfont icon-xiaoxi_o">0条评论</i>
          <i class="iconfont icon-faxianliulan">45次阅读</i>
          <i class="iconfont icon-dianzan_kuai">1人点赞</i>
          <i class="iconfont icon-icon_zhanghao">海螺</i>
          <router-link to="/detail"><p>阅读全文<i class="iconfont icon-yunhang"></i></p></router-link>
        </div>
      </div>
    </div>
    <ul class="pagination" style="margin-top:50px; margin-left: 270px;">
      <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      domainList: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    goTest () {
      this.$router.push({path: '/detail'})
    }
  }
}
</script>

<style scoped>
  .content{
    width: 750px;
    height:  220px;
    margin: auto;
    margin-top: 20px;
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 5px 0px;
  }
  .content:hover{
    box-shadow: 0px 0px 5px 1px;
  }
  .content-img{
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    width: 240px;
    height: 145px;
    border: 1px solid green;
  }
  .content-info{
    margin-left: 280px;
    margin-top: 20px;
    width: 60%;
    height: 145px;
    border: 1px solid green;
  }
  .content-next{
    width: 100%;
    height: 100%;
    margin-top: 5px;
    margin-left: 10px;
  }
  .content-next i{
    margin-left: 10px;
    font-size: 13px;
  }
  .content-next i:hover{
    cursor: pointer;
    color: #00FFCC;
  }
  .content-next p{
    float: right;
    margin-right: 20px;
    font-size: 13px;
  }
  .content-next p:hover{
    cursor: pointer;
    color: #00FFCC;
  }
  .content-next p i{
    margin:0px;
    font-size: 15px;
  }
</style>
