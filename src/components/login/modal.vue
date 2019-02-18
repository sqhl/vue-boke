<template>
  <!-- 模态框（Modal） -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" style="margin-top: 50%; width: 350px;">
        <div class="modal-header">
          <h6>使用社交账户登录</h6>
        </div>
        <div class="modal-body">
          <router-link to='/login_next'><i class="iconfont icon-QQ" @click="myModal_hide"></i></router-link>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
export default {
  methods: {
    myModal_hide () {
      $('#myModal').modal('hide')
    }
  }
}
</script>

<style scoped>
i{
  font-size: 55px;
  color: #dd6572;
  margin-left: 40%;
}
i:hover{
  cursor: pointer;
}
a{
  text-decoration: none;
}
</style>
