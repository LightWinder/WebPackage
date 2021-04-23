<template>
  <div>
    <div class="bg flex sm:items-center " ref="bg">
      <div class="box" :ref="item.ref" :key="item.ref" :style="'top:'+item.top" v-for="(item,index) in floaterTops">
        <div class="floater">
          <div class="box-side"></div>
          <div class="box-side"></div>
          <div class="box-side"></div>
          <div class="box-side"></div>
          <div class="box-side"></div>
          <div class="box-side"></div>
        </div>
      </div>
      <el-card class="mx-auto w-full sm:w-auto self-end sm:self-auto  el-card h-80 transition duration-500">
        <template #header>
          <div class="flex items-center">
            <el-avatar shape="circle" size="large"></el-avatar>
            <el-header class="align-middle leading-10">Light Wind</el-header>
          </div>
        </template>
        <el-input placeholder="please input username" class="mt-6"></el-input>
        <el-input placeholder="please input password" class="mt-6"></el-input>
        <div class="mt-6 flex justify-end">
          <el-button>Regists</el-button>
          <el-button type="primary" @click="login">Login</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
const createNode = function () {
  const box = document.createElement('div');
  box.classList.add('box');
  const floater = document.createElement('div');
  for (let i = 0; i < 6; i++) {
    let temp = document.createElement("div");
    temp.classList.add('box-side');
    floater.append(temp);
  }
  floater.classList.add('floater');
  box.appendChild(floater)
  return box;
}
export default {
  name: "register",
  data() {
    return {
      floaterTops: [
        { top:"30px",ref:"AADFSDF"},
        { top:"130px",ref:"AADFSDF"},
        { top:"430px",ref:"AADFSDF"}
      ]
    }
  },
  methods: {
    login() {
      this.$router.replace('/home')
    },
    getRandomString() {
      let temp = ""
      for (let i = 0; i < 10; i++) {
        temp += String.fromCharCode(Math.floor(Math.random() * 15 + 1));
      }
      return temp;
    },
    clearBox(){
      this.floaterTops = this.floaterTops.filter((item)=>{
        console.log(this.floaterTops.length)
        return this.floaterTops.indexOf(item)>= 10;
      })
    }
  },
  mounted() {
    const bg = this.$refs.bg;
    console.log(this.$data.floaterTops)
    let clearTimer;
    let timer = setInterval(() => {
      // this.floaterTops = this.floaterTops.filter((item) => {
      //   console.log(this.$refs[item.ref].offsetLeft,document.documentElement.clientWidth)
      //   console.log(this.$refs[item.ref].offsetLeft < document.documentElement.clientWidth);
      //   return this.$refs[item.ref].offsetLeft < document.documentElement.clientWidth;
      // })
      const tempObj = {}
      tempObj.top = Math.random() * bg.clientHeight + 'px';
      tempObj.ref = this.getRandomString();
      this.floaterTops.push(tempObj);
    }, 200)
    setTimeout(()=>{
      clearTimer = setInterval(this.clearBox,2000)
    },5000)
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.bg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(30deg, #55efc4, #81ecec, #74b9ff, #a29bfe, #dfe6e9);
  background-size: 1400%;
  animation: bgSwiper 30s infinite;
  perspective: 500px;
  overflow: hidden;
}

.box {
  position: absolute;
  left: 0px;
  top: 20px;
  animation: mover 5s linear;
  animation-fill-mode: forwards;
}

.floater {
  position: relative;
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;
  transform-origin: center center;
  animation: circle 5s infinite linear;
}

.box-side {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 3px solid white;
  width: 50px;
  height: 50px;
  opacity: .5;
}

.box-side:nth-of-type(1) {
  transform-origin: left center;
  transform: translateX(-50%) translateY(-50%) translateZ(25px) rotateY(90deg);
}

.box-side:nth-of-type(2) {
  transform-origin: right center;
  transform: translateX(-50%) translateY(-50%) translateZ(25px) rotateY(-90deg);
}

.box-side:nth-of-type(3) {
  transform-origin: center top;
  transform: translateX(-50%) translateY(-50%) translateZ(25px) rotateX(-90deg);
}

.box-side:nth-of-type(4) {
  transform-origin: center bottom;
  transform: translateX(-50%) translateY(-50%) translateZ(25px) rotateX(90deg);
}

.box-side:nth-of-type(5) {
  transform: translateX(-50%) translateY(-50%) translateZ(25px);
}

.box-side:nth-of-type(6) {
  transform: translateX(-50%) translateY(-50%) translateZ(25px);
}

@keyframes circle {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

@keyframes mover {
  0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(110vw);
  }
}

@keyframes bgSwiper {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>