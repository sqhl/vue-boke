<template>
  <div class="back-img">
    <div class="back-content">

      <div class="container mt-3">
        <h3>邮箱登记</h3>
        <hr/>
        <p>邮箱登记之后,也不用担心暴露个人信息暴露喔~</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">邮箱</span>
          </div>
          <input type="text" class="form-control" placeholder="Email" id="usr" name="username">
        </div>
        <button type="submit" class="btn btn-primary" style="margin-left: 70%;">邮件发送</button>
      </div>

      <hr/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.back-img{
  margin: 0px;
  padding: 0px;
  position:relative;
  width: 100%;
  height: 100%;
  background: url('../../../static/img/login/index.jpg') center center no-repeat;
  background-size: auto;
}
.back-content{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 250px;
  box-shadow: 0px 0px 5px 0px;
  background: rgba(255, 255, 255, 0.5);
}
h5{
  text-align: center;
  margin-top: 15px;
}
</style>
