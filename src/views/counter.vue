<template>
  <div class="demo">
    <div class="text">Count:{{ state.count }}</div>
    <button class="btn" @click="onClick">add</button>
    <input type="number" v-model="e.count" />
    <div>{{ number }}</div>
    <div>e: {{ e.count }}</div>
  </div>
</template>
<script setup>
import { reactive, ref, toRaw, watch } from "vue";
const state = reactive({ count: 0 });
const number = ref(0);
const onClick = () => {
  state.count++;
  number.value++;
  // e.value = state.count;
};

// watch(
//   () => state.count,
//   (val) => {
//     console.log("change!!!", val);
//     e.value = val;
//     console.log(e);
//   }
// );
const a = ref(1);
const b = ref({
  value: 1,
});
const c = ref([1, 2]);
const d = ref(false);
const e = toRaw(state);
const f = toRaw(state);
f.count = 666;
// state.count = 555;
console.log({ a, b, c, d, state, e, f });
</script>
<style>
.btn {
  min-width: 56px;
  padding: 6px 8px;
  cursor: pointer;
}
</style>
