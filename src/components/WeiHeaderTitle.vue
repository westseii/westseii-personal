<script setup>
  import { computed } from "vue";

  const props = defineProps({
    headerTitle: {
      type: String,
      default: "headerTitle",
    },
  });

  const cssProps = computed(() => {
    return {
      "--header-title": '"' + props.headerTitle + '"',
    };
  });
</script>

<template>
  <h1
    :style="cssProps"
    class="wei-header-title"
  >
    {{ headerTitle }}
  </h1>
</template>

<style scoped>
  .wei-header-title {
    color: var(--wei-color-title);
    font-family: "Major Mono Display", monospace;
    font-size: 5rem;
    height: 0;
    letter-spacing: -6px;
    line-height: 0;
    margin: 0;
    position: relative;
  }
  .wei-header-title::before {
    color: hsla(0, 100%, 50%, 0.23);
    content: var(--header-title);
    position: absolute;

    top: -2px;
    left: -10px;
  }
  .wei-header-title::after {
    color: hsla(180, 100%, 50%, 0.23);
    content: var(--header-title);
    position: absolute;

    bottom: -2px;
    right: -10px;
  }
</style>
