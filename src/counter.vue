<template>
  <div class="demo">
    <div class="text">Count:{{ state.count }}</div>
    <button class="btn" @click="onClick">add</button>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  count: 0,
});
const onClick = () => {
  state.count++;
};
</script>
<style>
.btn {
  min-width: 56px;
  padding: 6px 8px;
  cursor: pointer;
}
</style>
