<template>
  <div class="card-container">
    <el-card class="box-card" v-show="show == 'front'">
      <div class="clearfix" slot="header">
        <a :class="{active:isActive}" @click="showGeneral" class="general">General</a>
        <a :class="{active:!isActive}" @click="showCode" class="code">Code</a>
      </div>
      <div class="main">{{message}}</div>
      <div class="footer">
        <a @click="showBack" class="active">Flip Card</a>
        <a @click="gotIt" class="get">I Know It</a>
        <a @click="nextCard" class="active">Next Card</a>
      </div>
    </el-card>
    <el-card class="box-card" v-show="show == 'back'">
      <div class="clearfix" slot="header">
        <a :class="{active:isActive}" @click="showGeneral" class="general">General</a>
        <a :class="{active:!isActive}" @click="showCode" class="code">Code</a>
      </div>
      <div class="main">{{message}}</div>
      <div class="footer">
        <a @click="showFront" class="active">Flip Card</a>
        <a @click="gotIt" class="get">I Know It</a>
        <a @click="nextCard" class="active">Next Card</a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "front",
      isActive: true,
      message:'正面'
    }
  },
  methods: {
    showBack() {
      this.show = "back"
      this.message = '正面'
    },
    showFront() {
      this.show = "front"
      this.message = '反面'
    },
    showGeneral() {
      this.isActive = true
    },
    showCode() {
      this.isActive = false
    },
    gotIt() {},
    nextCard() {},
  }
}
</script>

<style lang="scss">
.card-container {
  margin-left: 30%;
  position:relative;
  .box-card {
    width: 67%;
    // height: 60%;
    height: 600px;
  }
  a {
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    height: 40px;
    width: 80px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ddd;
    color: #666;
    &.active {
      background-color: #2a7ae2;
      color: white;
      border: 1px solid #2a7ae2;
    }
    &.general {
      border-radius: 3px 0px 0px 3px;
      border-right: none;
    }
    &.code {
      border-radius: 0px 3px 3px 0px;
      margin-left: -4px;
      border-left: none;
    }
    &.get {
      background-color: rgb(73, 142, 40);
      color: white;
    }
  }
  .main{
    width: 450px;
    height: 380px;
    border: 1px solid #ddd;
    margin: 0 auto;
    overflow: scroll;
  }
  .footer {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 60%;
    a{
      border-radius: 5px;
      width: 120px;
      margin: 10px;
    }
  }
  .clearfix {
    text-align: center;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}
</style>
