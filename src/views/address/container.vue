<template>
  <div class="container-box">
    <VInfo></VInfo>
    <VText></VText>
    <VList></VList>
  </div>
</template>

<script setup>
import VText from "./text.vue";
import VList from "./list.vue";
import VInfo from "./info.vue";
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
