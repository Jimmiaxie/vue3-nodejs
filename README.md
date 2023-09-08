# Vue3

## 1. 响应式

### 设置响应式数据

reactive 和 ref

 	1. 为什么会有两个响应式api
 	2. 各自优点
 	3. 如何选择

### 解除响应式数据

 解除响应式 toRow

返回一个原始数据

```typescript
const state = reactive({ count: 0 });
const f = toRaw(state);
f.count = 666;
// f.count => 666 
// state.count => 666

 <input type="number" v-model="state.count" />
// f.count => newValue 
// state.count => newValue
     
 <input type="number" v-model="f.count" />
// f.count => 666
// state.count => 666
```



### 监听响应式数据	

watch

### 注意点

1. 慎用浅层响应式作用api (shallowReactive、shallowReadonly)
2. 慎用副作用api



## 2. 组件

### 组件通信

​	props emit

​	pinia - 基于proxy实现的vue.js公共状态数据管理js库