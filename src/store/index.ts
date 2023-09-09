import { defineStore } from "pinia";

export const useMyStore = defineStore("my-sotre", {
  state: () => {
    return {
      text: "深圳市",
      list: [
        { name: "苹果", price: 20, count: 0 },
        { name: "西瓜", price: 5, count: 0 },
        { name: "李子", price: 13, count: 0 },
      ],
    };
  },
  getters: {
    totalPerice(state) {
      return state.list.reduce((acc, ace) => {
        acc = acc + ace.price * ace.count;
        return acc;
      }, 0);
    },
  },

  actions: {
    updateText(text: string) {
      this.text = text;
    },
    increase(index: number) {
      this.list[index].count++;
    },
    decrease(index: number) {
      const count = this.list[index].count;
      this.list[index].count = Math.max(count - 1, 0);
    },
  },
});
