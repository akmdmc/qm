<template>
  <div class="container">
    <HomeNavBar class="navbar" />
    <div class="imgContent">
      <img class="frontCover" src="../assets/bgc.jpg" alt="">
      <span class="text1">清眸</span>
      <span class="text2">让明天更加光明</span>
      <span class="text3">清新明丽眼，光明降人间</span>
    </div>
    <HomeBottomBar class="bottomBar" />
  </div>
</template>

<script setup lang="ts">
import HomeNavBar from '@/components/HomeNavBar.vue';
import HomeBottomBar from '@/components/HomeBottomBar.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.navbar {
  width: 100%;
  height: 60px;
}

.imgContent{
  width: 100%;
  height: 500px;
  user-select: none;
}

.text1{
  font-family: STXingkai;
  font-weight: 600;
  position: absolute;
  top: 27%;
  left: 25%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  color: #fff;
}

.text2{
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
  position: absolute;
  top: 55%;
  left: 25%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fff;
}

.text3{
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
  position: absolute;
  top: 80%;
  left: 25%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #fff;
  background-color: rgb(27, 81, 170);
  padding: 5px 30px;
  border-radius: 16px;
}

.imgContent img{
  width: 120%;
  height: 135%;
}

.frontCover {
  width: 100%;
  height: 500px;
}

.bottomBar {
  width: 100%;
}
</style>