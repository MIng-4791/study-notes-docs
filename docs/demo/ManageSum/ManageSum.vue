<template>
  <ManageSum
    :activename="['1111', '2222']"
    :CmList="CmList"
    @titleClick="titleClick"
  />
</template>

<script lang="ts" setup>
import { ManageSum } from "sedii-common";
const CmList = [
  {
    val: 1,
    name: "重大风险",
    type: "red",
  },
  {
    val: 1,
    name: "较大风险",
    type: "orange",
  },
  {
    val: 1,
    name: "一般风险",
    type: "yellow",
  },
  {
    val: 1,
    name: "低风险",
    type: "blue",
  },
];
const titleClick = (item: any) => {
  console.log(item);
};
</script>
<style></style>
