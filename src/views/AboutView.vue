<script setup>
  import { onMounted, ref } from "vue";

  const aboutData = ref();
  const aboutDataPath = "/json/view.about.json";

  const fetchAboutData = async (dataPath) => {
    const res = await fetch(dataPath);
    const d = await res.json();
    return d.data;
  };

  onMounted(() => fetchAboutData(aboutDataPath).then((d) => (aboutData.value = d)));
</script>

<template>
  <section>
    <h2>About Me</h2>

    <div>
      <div
        :key="text.id"
        class="card"
        v-for="text in aboutData"
      >
        <h3>{{ text.titleText }}</h3>
        <WeiRule />

        <p v-for="p in text.paragraphs">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card {
    background: linear-gradient(180deg, var(--wei-color-card) calc(100% - 24px), transparent);
    border-radius: 2px;
    border-top: solid 2px var(--wei-color-divider);
    overflow: auto;
    padding: 0 12px 24px 12px;
  }
  .card:nth-child(n + 2) {
    margin-top: 12px;
  }

  @media screen and (max-width: 704px) {
    .card {
      background: var(--wei-color-card);
      border-radius: unset;
      margin: 0 -12px;
    }
    .card:nth-child(n + 2) {
      margin-top: unset;
    }
    .card:last-child {
      background: linear-gradient(180deg, var(--wei-color-card) calc(100% - 24px), transparent);
    }
  }
</style>
