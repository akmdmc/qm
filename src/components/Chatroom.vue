<template>
  <button class="chatBtn" v-show="!isShow" @click="chat">和医生聊天</button>
  <div class="room" v-show="isShow">
    <div class="message" v-for="message in infos">
      <div :class="message.isOwner ? 'right' : 'left'">
        <img :src="message.imgUrl" alt="" />
        <div class="msg">
          {{ message.message }}
        </div>
      </div>
    </div>
    <div class="input">
      <div
        type="text"
        id="sendMsg"
        class="inputMessage"
        contenteditable="true"
      ></div>
      <button class="btn" @click="send">发送</button>
    </div>
    <button class="close" @click="close">×</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const isShow = ref(false);
const infos = reactive([
  {
    isOwner: false,
    user: "李医生",
    imgUrl: "/src/assets/bgc.jpg",
    message:
      "保就医、保畅通!接诊预约电话:02152186698（提前预约）医院简介:上海宏康医院是医保定点单位,是上海同济医院医疗集团理事单位_专注胃肠诊疗（胃炎（慢性胃炎/浅表性胃炎/反流性胃部炎症/糜烂性胃炎症/萎缩性胃炎症）胃部溃疡、巴雷特食管、肠上皮化生、胃粘膜脱垂症、口臭、便秘、十二指肠溃疡、肠易激综合征、肠炎等各种胃肠病以及微创缩胃减重手术）医院全年无休。【四大优势】：①品牌：专注胃肠研究与诊疗_20余年经验医生亲诊；②诊疗：特色专病·专研·专治,倡导胃肠病规范治疗_引进新一代日本富士胃肠镜和大圣胶囊胃镜; ③服务：网络预约，电话预约，微信预约；④交通：地铁11/14/15号线直达,医院地址:普陀区大渡河路1933号。 ",
  },
  {
    isOwner: true,
    user: "我",
    imgUrl: "/src//assets/阿尼亚1.webp",
    message: "我眼睛很疼",
  },
  {
    isOwner: false,
    user: "李医生",
    imgUrl: "/src/assets/bgc.jpg",
    message: "您好",
  },
  {
    isOwner: false,
    user: "李医生",
    imgUrl: "/src/assets/bgc.jpg",
    message: "症状多久了？",
  },
  {
    isOwner: false,
    user: "李医生",
    imgUrl: "/src/assets/bgc.jpg",
    message: "多大年龄？男士还是女士",
  },
]);
function send() {
  const msgDiv = document.querySelector("#sendMsg") as InnerHTML;
  let msg = document.querySelector("#sendMsg")?.textContent;
  infos.push({
    isOwner: true,
    user: "我",
    imgUrl: "/src/assets/阿尼亚1.webp",
    message: msg as string,
  });
  msgDiv.innerHTML = "";
}

function close() {
  isShow.value = false;
}

function chat() {
  isShow.value = true;
}
</script>

<style scoped>
.chatBtn {
  z-index: 98;
  position: fixed;
  left: 2%;
  top: 8%;
  outline: none;
  border: none;
  padding: 5px 15px;
  background-color: rgb(45, 45, 122);
  color: rgb(241, 231, 231);
}
.room {
  z-index: 99;
  position: fixed;
  left: 2.5%;
  top: 10%;
  width: 640px;
  height: 460px;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: auto;
}

.input {
  z-index: 99;
  position: fixed;
  left: 2.5%;
  top: calc(10% + 460px);
  width: 640px;
  height: 100px;
  background-color: rgb(255, 255, 255);
}

.close {
  z-index: 99;
  position: fixed;
  left: calc(2.5% + 640px + 5px);
  top: 10%;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  outline: none;
  border: none;
  transition: all linear 0.2s;
}

.close:hover {
  transform: scale(1.05);
}
.inputMessage {
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  width: 100%;
  /* border: none; */
  height: 64%;
  overflow: auto;
}

.input .btn {
  position: absolute;
  bottom: 5%;
  right: 2%;
  border: none;
  background-color: rgb(61, 136, 242);
  color: white;
  padding: 5px 24px;
  border-radius: 4px 4px 0 4px;
}

.input .btn:hover {
  background-color: rgb(102, 163, 255);
}

.room img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-top: 5px;
}

.left {
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.right {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}

.msg {
  max-width: 80%;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.left .msg {
  margin-left: 10px;
  background-color: rgb(243, 244, 247);
  color: black;
  border-radius: 0 8px 8px 8px;
}
.left img {
  margin-left: 10px;
}

.right .msg {
  margin-right: 10px;
  background-color: rgb(97, 144, 255);
  color: white;
  border-radius: 8px 0px 8px 8px;
}

.right img {
  margin-right: 10px;
}
</style>
