---
title: AccessItem
description: AccessItem组件文档
---

# AccessItem

组件主要用于驾驶舱数据展示

## 使用方法

<preview path="../demo/AccessItem/AccessItem.vue" shareLink="http://localhost:5174/"></preview>

## API

### 配置项

| 名称  | 说明                           | 类型     | 默认值 |
| ----- | ------------------------------ | -------- | ------ |
| id    | 用于匹配数据接口的字段         | `string` | ''     |
| key   | 数据的 key，用来优化组件的渲染 | `string` | ''     |
| wd    | 标题                           | `string` | ''     |
| num   | 展示的数据                     | `string` | ''     |
| class | 行的 className                 | `string` | ''     |

### 事件

| 事件名      | 说明                       | 类型                                       |
| ----------- | -------------------------- | ------------------------------------------ |
| accessClick | 当某行被点击时会触发该事件 | <abbr title="() => void">`Function`</abbr> |
