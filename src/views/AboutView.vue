<script setup>
  // import { onMounted, ref } from "vue";

  import aboutContent from "../data/about.js";

  import ContentCard from "../components/ContentCard.vue";

  /*
  const aboutData = ref();
  const aboutDataPath = "/json/view.about.json";

  const fetchAboutData = async (dataPath) => {
    const res = await fetch(dataPath);
    const d = await res.json();
    return d.data;
  };

  onMounted(() => fetchAboutData(aboutDataPath).then((d) => (aboutData.value = d)));
  */
</script>

<template>
  <section class="container">
    <h2>About Me</h2>

    <div>
      <ContentCard
        :card-content="content"
        v-for="content in aboutContent"
      />
    </div>
  </section>
</template>

<style scoped>
  .container {
    width: 100%;
  }
</style>
