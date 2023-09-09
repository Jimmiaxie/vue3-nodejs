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

选择：

> 如果开发一些 Vue.js 组件库，可以基于 Props+Emits 来做组件库内部数据通信，这样可以方便管理组件库里组件的数据状态变化，减少数据污染；

> 如果要快速开发一些小型 Vue.js3 应用，可以直接“基于公共的响应式数据文件进行通信”，因为这种方式比较自由方便，不用写太多的数据定义和自定义事件的代码；

> 如果要开发大型 Vue.js3 项目，例如一些管理后台等复杂应用，建议你用 Pinia 来进行组件间的数据通信，方便数据的灵活使用和状态数据的流向管理；