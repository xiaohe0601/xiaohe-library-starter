<template>
  <div class="xh-world">
    <span class="xh-world__text">你好，{{ props.name }}！</span>
  </div>
</template>

<script lang="ts" setup>
import type { WorldProps } from "./world";

defineOptions({
  name: "XhWorld"
});

const props = withDefaults(defineProps<WorldProps>(), {
  name: "小何同学"
});
</script>