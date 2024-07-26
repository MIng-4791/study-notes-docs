<template>
  <div class="floatwindow-container">
    <SediiFloatWindow
      :btnTitle="'按钮测试'"
      @btnClick="titleClick1"
      :floatWindowTitle="'测试SediiFloatWindow'"
      :isClick="true"
      :className="'cs1111111'"
      @titleClick="titleClick2"
    >
      <template #floatWindowContent>
        <div>floatWindowContent内容展示</div>
      </template>
    </SediiFloatWindow>
  </div>
</template>

<script lang="ts" setup>
import { SediiFloatWindow } from "sedii-common";
const titleClick1 = () => {};
const titleClick2 = () => {};
</script>

<style>
.floatwindow-container {
  width: 400px;
  height: 500px;
  position: relative;
}
.floatwindow-container .cs1111111 {
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
}
.floatwindow-container .cs1111111 h3 {
  margin-top: 0;
}
</style>
