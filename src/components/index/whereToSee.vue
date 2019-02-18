<template>
  <div style="background: rgba(255, 255, 255, 0.5);">
    <div class="set-left-img"></div>
    <div class="set-right-img"></div>
    <button class="btn" data-toggle="modal" data-target="#myModal" style="width: 0px;">
      <div class="set-middle-img">
      </div>
    </button>
    <div class="set-last-img">我信你个鬼~你个糟老头子坏得很！</div>
  </div>
</template>

<script>

</script>

<style scoped>
  .set-left-img{
    position: absolute;
    z-index: 10;
    margin-left: 0px;
    width: 181px;
    height: 120px;
    background: url('../../../static/img/rightImg/left.jpg') center center no-repeat;
    background-size: auto;
  }
  .set-right-img{
    position: absolute;
    margin-left: 181px;
    z-index: 10;
    width: 180px;
    height: 120px;
    background: url('../../../static/img/rightImg/right.jpg') center center no-repeat;
    background-size: auto;
  }
  .set-middle-img{
    position: absolute;
    z-index: 20;
    margin-left: 119px;
    margin-top: 66px;
    width: 90px;
    height: 90px;
    border: 5px solid #E8E8E8;
    border-radius: 50%;
    background: url('../../../static/img/rightImg/head.jpg') center center no-repeat;
    background-size: auto;
    cursor: pointer;
  }
  .set-last-img{
    position: absolute;
    z-index: 10;
    width: 362px;
    height: 40px;
    text-align: center;
    margin-top: 170px;
    font-size: 17px;
  }
</style>
