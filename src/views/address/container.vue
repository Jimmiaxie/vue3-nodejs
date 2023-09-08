<template>
  <div class="container-box">
    <VInfo :text="state.text" :list="state.list"></VInfo>
    <VText :text="text" @onChangeText="updateText"></VText>
    <VList :list="state.list" @increase="increase" @decrease="decrease"></VList>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import VText from "./text.vue";
import VList from "./list.vue";
import VInfo from "./info.vue";

const text = ref("深圳市");

const state = reactive({
  text: "深圳市",
  list: [
    { name: "苹果", price: 20, count: 0 },
    { name: "西瓜", price: 5, count: 0 },
    { name: "李子", price: 13, count: 0 },
  ],
});

const updateText = (val) => {
  state.text = val;
};
const increase = (index) => {
  state.list[index].count++;
};
const decrease = (index) => {
  const count = state.list[index].count;
  state.list[index].count = Math.max(count - 1, 0);
};
</script>

<style scoped>
.container-box {
  width: 600px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
</style>
