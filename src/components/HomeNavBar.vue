<template>
  <header>
    <ul>
      <li>
        <span class="title">清眸平台</span>
      </li>
      <li>
        <RouterLink to="/"><span>首页</span></RouterLink>
      </li>
      <li>
        <RouterLink to="/"><span>档案分析</span></RouterLink>
      </li>
      <li>
        <RouterLink to="/"><span>论坛广场</span></RouterLink>
      </li>
      <li>
        <RouterLink to="/"><span>商城中心</span></RouterLink>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  height: 80px;
  width: 100%;
  /* box-sizing: border-box; */
  background-color: #666161;
  background-color: rgb(236, 236, 236);
}

nav {
  height: 100%;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
}
.right {
  margin-right: 40px;
  justify-content: flex-end;
}

li {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 36px;
  font-weight: 900;
  user-select: none;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 100%;
  padding: 0 30px 0 30px;
  text-decoration: none;
}

a:hover {
  background-color: rgb(38, 82, 169);
  color: white;
}
</style>