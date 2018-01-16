<template>
    <el-row type="flex" justify="center">
        <el-col :span="12" class="ef-logo">
            <i class="el-icon-menu"></i> 
            <span class="ef-title">全球科技人才追踪系统</span>
        </el-col>

        <el-col :span="12">
            <el-row type="flex" justify="end">
                <el-button size="medium" type="primary" class="btn-login" v-on:click="btnClickEvent">登录</el-button>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
export default {
  methods: {
    btnClickEvent() {
      this.$router.push({ path: '/login' });
    },
  },
};
</script>
<style>
.ef-logo{
    font-size: 20px;
    color: #3273ec
}
.ef-title{

}

</style>


