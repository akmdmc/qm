<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Home from './views/Home.vue';

// let sUserAgent = navigator.userAgent.toLowerCase(); // 用户设备检测

</script>

<template>
  <div class="content">
    <header>
      <NavBar class="navbar" />
    </header>
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* .content{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
} */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
}

.view {
  position: fixed;
  top: 40px;
  width: 100vw;
  left: 0;
}

@media screen and (max-width: 768px) {
  .view {
    top: 0;
  }
  
}
</style>
