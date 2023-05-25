<script setup>
  import ResEntry from "./ResEntry.vue";

  const props = defineProps({
    resumeData: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <section>
    <h2>{{ resumeData.name }}</h2>

    <ResEntry
      :entry-data="entry"
      :key="entry.id"
      v-for="entry in resumeData.entries"
    />
  </section>
</template>

<style scoped></style>
