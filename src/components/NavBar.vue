<template>
  <header>
    <nav>
      <ul class="left">
        <li>
          <RouterLink to="/"><span>登录</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/"><span>注册</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <img  src="https://app-center.cdn.bcebos.com/appcenter/file/upload/a7c39683dd48fe24bc9df0c4ba12d260e5e9df79-72d0-4bed-9f72-fcfff23226d7.png" alt="" srcset="">
            <span>微信登录</span></RouterLink>
        </li>
      </ul>
      <ul class="right">
        <li>
          <RouterLink to="/">
            <svg t="1679379623652" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4530" width="64" height="64"><path d="M508.763 245.961m-6.5 0a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0Z" fill="#FFFFFF" p-id="4531"></path><path d="M525.986 270.255m-6.5 0a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0Z" fill="#FFFFFF" p-id="4532"></path><path d="M762.261 955H273.24c-25.083 0-45.49-20.406-45.49-45.489V110.49c0-25.083 20.407-45.49 45.49-45.49h489.021c25.083 0 45.489 20.407 45.489 45.49v799.021c0 25.083-20.406 45.489-45.489 45.489zM273.24 95c-8.541 0-15.49 6.949-15.49 15.49v799.021c0 8.541 6.949 15.489 15.49 15.489h489.021c8.541 0 15.489-6.948 15.489-15.489V110.49c0-8.541-6.948-15.49-15.489-15.49H273.24z" fill="" p-id="4533"></path><path d="M734.957 794.205h-430v-640h430v640z m-400-30h370v-580h-370v580z" fill="" p-id="4534"></path><path d="M513 858.39m-41.894 0a41.894 41.894 0 1 0 83.788 0 41.894 41.894 0 1 0-83.788 0Z" fill="#02FFF0" p-id="4535"></path></svg>
            <span>二维码</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <svg t="1679379940648" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7623" width="64" height="64"><path d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z" fill="#000000" p-id="7624"></path></svg>
            <span>收藏本站</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/"><span>我的资料</span></RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">


</script>

<style scoped>
  header {
    box-sizing: border-box;
    background-color: #666161;
  }

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    height: 100%;
    display: flex;
    list-style: none;
  }

  ul span::after{
    content: "";
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 40%;
    border-right: 1px solid rgba(255,255,255,0.3);
  }

  ul li:last-child span::after{
    content: none;
  }

  .right {
    margin-right: 40px;
    justify-content: flex-end;
  }

  li {
    box-sizing: border-box;
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img,svg{
    box-sizing: border-box;
    width: 1rem;
    height: 1rem;
    align-items: center;
    margin-right: 5px;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover{
    background-color: transparent;
  }

  span:hover{
    color: rgb(120, 143, 143);
  }

  @media screen and (max-width: 768px) {
    header {
      display: none;
    }
  }
</style>
