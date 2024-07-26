<template>
  <AlarmNumber :AlarmList="alarmList" />
</template>

<script lang="ts" setup>
import { AlarmNumber } from "sedii-common";
const alarmList = [
  {
    id: "onlineRobotCount",
    label: "报警数",
    num: "23",
  },
];
</script>
<style></style>
