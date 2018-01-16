<template>
<el-container>
  <el-header>
    <el-row type="flex" justify="center">
    <el-col :span="12" class="ef-logo">
            <el-row type="flex" justify="space-around" align="middle">
                <el-col :span="18">
                    <el-input v-model="searchKey" placeholder="搜索"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">查询</el-button>
                </el-col>
                <el-col :span="2" >
                    <!-- <i class="el-icon-search"></i> -->
                    <el-button type="primary">高级</el-button>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
  </el-header>


  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="12"><div class="grid-content bg-purple">2016最具影响力的学者</div></el-col>
      
    </el-row>

  </el-main>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      searchKey: '',
    };
  },
};
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: left
  }

</style>

