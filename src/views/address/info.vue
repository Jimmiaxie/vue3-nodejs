<template>
  <div class="v-info">
    <div>订单信息：</div>
    <div>收货信息：{{ myStore.text }}</div>
    <div>总金额：{{ myStore.totalPerice }}</div>
  </div>
</template>

<script setup>
import { useMyStore } from "../../store";

const myStore = useMyStore();
</script>

<style scoped>
.v-info {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 0px 16px 0px #00000038;
  border: 1px solid #d6d5d5;
  font-size: 20px;
  color: #222222;
  background: #ffffff;
  font-size: 18px;
  text-align: left;
  line-height: 22px;
}
</style>
