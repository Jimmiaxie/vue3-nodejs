<template>
  <div class="v-info">
    <div>订单信息：</div>
    <div>收货信息：{{ props.text }}</div>
    <div>总金额：{{ totalPerice }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  text: String,
  list: Array,
});

const totalPerice = ref(0);
watch(props, () => {
  const total = props.list.reduce((acc, ace) => {
    acc = acc + ace.price * ace.count;
    return acc;
  }, 0);
  totalPerice.value = total;
});
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
