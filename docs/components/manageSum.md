---
title: ManageSum
description: ManageSum组件文档
---

# ManageSum

组件主要用于驾驶舱数据展示

## 使用方法

<preview path="../demo/ManageSum/ManageSum.vue" shareLink="http://localhost:5173/"></preview>

## API

### 配置项

| 名称       | 说明                           | 类型                                              | 默认值 |
| ---------- | ------------------------------ | ------------------------------------------------- | ------ |
| activename | 数据 div 的 className          | `string` / <abbr title="string[]">`object`</abbr> | ''     |
| key        | 数据的 key，用来优化组件的渲染 | `string`                                          | ''     |
| wd         | 标题                           | `string`                                          | ''     |
| num        | 展示的数据                     | `string`                                          | ''     |
| class      | 行的 className                 | `string`                                          | ''     |

### 事件

| 事件名      | 说明                       | 类型                                       |
| ----------- | -------------------------- | ------------------------------------------ |
| accessClick | 当某行被点击时会触发该事件 | <abbr title="() => void">`Function`</abbr> |
