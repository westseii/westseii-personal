<script setup>
  import WeiRule from "../WeiRule.vue";

  const props = defineProps({
    headingText: {
      type: String,
      default: "Heading",
    },
  });
</script>

<template>
  <section>
    <h2>{{ headingText }}</h2>
    <WeiRule />

    <slot name="res-entries"></slot>
  </section>
</template>

<style scoped></style>
