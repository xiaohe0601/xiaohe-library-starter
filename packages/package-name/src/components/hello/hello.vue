<template>
  <div class="xh-hello">
    <span class="xh-hello__text">你好，{{ props.name }}！</span>
  </div>
</template>

<script lang="ts" setup>
import type { HelloProps } from "./hello";

defineOptions({
  name: "XhHello"
});

const props = withDefaults(defineProps<HelloProps>(), {
  name: "小何同学"
});
</script>