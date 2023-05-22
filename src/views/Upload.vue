<template>
  <Chatroom></Chatroom>
  <div class="content">
    <svg
      @click="resultListChange()"
      t="1680681348049"
      class="listIcon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3199"
      width="64"
      height="64"
    >
      <path
        d="M725.333333 682.666667v-85.333334h42.666667v85.333334h85.333333v42.666666h-85.333333v85.333334h-42.666667v-85.333334h-85.333333v-42.666666h85.333333zM170.666667 256h682.666666v42.666667H170.666667V256z m0 426.666667h426.666666v42.666666H170.666667v-42.666666z m0-213.333334h682.666666v42.666667H170.666667v-42.666667z"
        fill="#FF950C"
        p-id="3200"
      ></path>
    </svg>
    <div :style="resultStyle" class="resultList">
      <div v-for="item in results" class="result">
        <img style="width: 50px" :src="item.imgSrc" alt="" />
        <div class="resultText">{{ item.result }}</div>
      </div>
      <h4 style="margin-top: 10px; margin-bottom: 5px">预测结果列表</h4>
    </div>
    <div class="imgContent">
      <span v-if="spanDisplay">点击下方按钮上传照片</span>
      <img v-if="imgDisplay" class="img" :src="imgSrc" alt="" />
    </div>
    <div class="file">
      <label class="filelabel" for="input">上传照片</label>
      <input id="input" type="file" @change="upload()" />
      <button class="btn" @click="predict()">预测</button>
    </div>
    <div :style="messageStyle" class="messageBox">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive } from "vue";
import Chatroom from "@/components/Chatroom.vue";

interface result {
  imgSrc: string;
  result: string;
}

const imgSrc = ref("");
const imgDisplay = ref(false);
const spanDisplay = ref(true);
const formData = reactive(new FormData());
const results = reactive([] as result[]);
const resultIsshow = ref(true);
const resultStyle = reactive({
  display: "flex",
  transform: "scale(1)",
  width: "20vw",
  height: "80vh",
});
const message = ref("");
const messageStyle = reactive({
  opacity: 0,
  left: "50%",
  top: "8%",
  padding: "10px 20px",
  fontSize: "1.2rem",
});

async function upload(this: any) {
  const input = document.querySelector("#input") as HTMLInputElement;
  if (!input.files) return;
  imgSrc.value = URL.createObjectURL(input.files[0]);
  imgDisplay.value = true;
  spanDisplay.value = false;
  let file = input.files[0];
  if (formData.has("file")) formData.delete("file");
  formData.append("file", file);
}

async function predict() {
  await axios({
    url: "http://121.41.16.248/predict",
    method: "post",
    data: formData,
  })
    .then((res) => {
      showMessage(
        `预测结果 : ${res.data.class_name}`,
        false,
        "50%",
        "8%",
        "20px 40px"
      );
      if (results.length > 9) results.shift();
      results.push({
        imgSrc: imgSrc.value,
        result: res.data.class_name,
      });
      console.log(results);
    })
    .catch((err) => {
      showMessage("上传失败");
      // console.log(err);
    });
}

function resultListChange() {
  if (resultIsshow.value) {
    resultIsshow.value = false;
    resultStyle.width = "0";
    resultStyle.height = "0";
    resultStyle.transform = "scale(0)";
  } else {
    resultIsshow.value = true;
    resultStyle.width = "20vw";
    resultStyle.height = "80vh";
    resultStyle.transform = "scale(1)";
  }
}

function showMessage(
  msg: string,
  isAotuHide: boolean = true,
  left: string = messageStyle.left,
  top: string = messageStyle.top,
  padding: string = messageStyle.padding
) {
  messageStyle.left = left;
  messageStyle.top = top;
  messageStyle.padding = padding;
  messageStyle.opacity = 1;
  message.value = msg;
  if (isAotuHide) {
    setTimeout(() => {
      messageStyle.opacity = 0;
    }, 2000);
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  /* background-color: rgb(175,178,184); */
  background: url(../assets/uploadBgc.webp) no-repeat center center fixed;
  background-size: cover;
}

.imgContent {
  width: 40vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.2);
}

.imgContent span {
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  color: rgb(255, 255, 255, 0.6);
}

.imgContent::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 5px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#input {
  display: none;
}

.btn {
  margin-top: 20px;
  margin-left: 10px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: rgb(87, 145, 254);
  color: rgb(255, 255, 255, 0.9);
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  box-shadow: 0 0 0 2px rgb(175, 178, 184), 0 0 0 3px rgb(87, 145, 254);
  cursor: pointer;
}

.filelabel {
  background-color: rgb(87, 145, 254);
  border-radius: 5px;
  padding: 10px 20px;
  color: rgb(255, 255, 255, 0.9);
  transition: all 0.2s ease-in-out;
}

.filelabel:hover {
  box-shadow: 0 0 0 2px rgb(175, 178, 184), 0 0 0 3px rgb(87, 145, 254);
  cursor: pointer;
}

.file {
  margin-top: 20px;
}

.messageBox {
  position: fixed;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 62, 30, 0.9);
  color: rgb(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.1s linear;
}

.listIcon {
  position: fixed;
  top: 9.5%;
  right: 5%;
  width: 30px;
  height: 30px;
  margin: 10px;
  padding: 2px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  z-index: 2;
}

.resultList {
  position: fixed;
  top: 10%;
  right: 5%;
  background-color: rgba(44, 73, 116, 1);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: start;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 0 8px 1px rgb(175, 178, 184);
  transform: scale(1);
  transition: all 0.2s ease-in-out;
}

.result {
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  .resultList {
    display: none;
    min-width: 200px;
    z-index: 1;
  }
}

@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .imgContent {
    margin-top: 100px;
    width: 80vw;
  }
}
</style>
