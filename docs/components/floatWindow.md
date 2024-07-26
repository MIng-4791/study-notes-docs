---
title: FloatWindow
description: FloatWindow组件文档
---

# FloatWindow

组件主要用于驾驶舱数据展示的面板

## 使用方法

<preview path="../demo/FloatWindow/FloatWindow.vue" shareLink="http://localhost:5174/" ></preview>

## API

### 配置项

| 名称             | 说明             | 类型                  | 默认值 |
| ---------------- | ---------------- | --------------------- | ------ |
| floatWindowTitle | 面板标题         | `string`              | ' '    |
| className        | 面板样式类名     | `string` / `string[]` |        |
| isClick          | 是否存在点击事件 | `boolean`             | true   |
| btnTitle         | 面板标题行的按钮 | `string`              |        |
| maxwidth         | 面板的最大宽度   | `string` / `string[]` |        |

### 事件

| 事件名   | 说明                                 | 类型                                       |
| -------- | ------------------------------------ | ------------------------------------------ |
| btnClick | 面板标题行的按钮被点击时会触发该事件 | <abbr title="() => void">`Function`</abbr> |
