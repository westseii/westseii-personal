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
    font-size: 4rem;
    font-weight: bold;
    height: 0;
    line-height: 0;
    margin: 0;
    position: relative;

    animation: 5s ease-in-out infinite alternate anim_text;
  }
  .wei-header-title::before {
    color: hsla(0, 100%, 50%, 0.38);
    content: var(--header-title);
    filter: blur(1.5px);
    font-weight: inherit;
    position: absolute;

    top: -2px;
    left: -8px;
  }
  .wei-header-title::after {
    color: hsla(180, 100%, 50%, 0.38);
    content: var(--header-title);
    filter: blur(1.5px);
    font-weight: inherit;
    position: absolute;

    bottom: -2px;
    right: -8px;
  }

  @keyframes anim_text {
    from {
      filter: blur(0px) hue-rotate(-360deg);
    }
    to {
      filter: blur(1.5px) hue-rotate(360deg);
    }
  }
</style>
