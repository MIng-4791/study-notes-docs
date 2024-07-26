<template>
  <AccessItem :accessData="accessList" @accessClick="accessClick" />
</template>

<script lang="ts" setup>
import { AccessItem } from "sedii-common";
const accessList = [
  {
    id: "onlineRobotCount",
    key: "onlineRobotCount",
    wd: "机器人在线台数",
    num: "0123",
    class: "numo",
  },
];
const accessClick = (id: string, index: number) => {
  console.log(id, index);
};
</script>
<style></style>
