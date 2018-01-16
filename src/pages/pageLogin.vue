<template>
  <div class="dialog" >
    <div class="pageLogin">
        <el-form :label-position="labelPosition" label-width="80px" :model="formName">
            <el-form-item label="用户名">
                <el-input type="text" id="user" placeholder="请输入用户名" v-model="formName.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" id="password" placeholder="请输入密码" v-model="formName.password"></el-input>
            </el-form-item>
            <div class="note">
                <a href="" class="ng-binding" >忘记密码？</a>
            </div>
            <div class="select">
                <el-button type="primary" class=" btn btn-check">确认</el-button>
                <el-button  class="btn btn-register">注册</el-button>
            </div>
            
        </el-form>
    </div>
  </div>
</template>

<script>
   export default {
     data() {
       return {
         labelPosition: 'top',
         formName: {
           name: '',
           password: '',
         },
       };
     },
};
</script>

<style scoped>
    html,body{
        margin: 0;
        padding: 0;
        position: relative;
    }
    .dialog{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
    }
    .pageLogin{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -180px;
        width: 450px;
        min-height: 350px;
        padding: 50px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
        border-bottom-style: solid;
        border-bottom-color: rgba(0, 0, 0, 0.1);
        background:rgba(248,248,248,.9);
    }
    .note{
        margin-top: 6px;
        padding: 0 1px;
        font-size: 11px;
        line-height: 15px;
        color: #999;  
    }
    .ng-binding{
        text-decoration: none;
    }
    .select{
        margin-top: 20px;
        float: right;

    }
    .btn{
        cursor: pointer;
    }

</style>
