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
    font-family: "Major Mono Display", monospace;
    font-size: 5rem;
    letter-spacing: -6px;
    margin-top: 0;
    position: relative;
    text-shadow: 6px 6px 48px hsla(270, 67%, 67%, 0.33);
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

  @media screen and (max-width: 768px) {
    .wei-header-title {
      font-size: 2.5rem;
      letter-spacing: -3px;
      text-shadow: 3px 3px 24px hsla(270, 67%, 67%, 0.33);
    }
    .wei-header-title::before {
      top: -1px;
      left: -5px;
    }
    .wei-header-title::after {
      bottom: -1px;
      right: -5px;
    }
  }
</style>
