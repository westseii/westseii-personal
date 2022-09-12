<script setup>
  import { onMounted, ref } from "vue";

  const aboutData = ref();
  const aboutDataPath = "src/modules/view.about.json";

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

    <div
      :key="text.id"
      v-for="text in aboutData"
    >
      <h3 class="sub-title">{{ text.titleText }}</h3>
      <div class="card">
        <p v-for="p in text.paragraphs">{{ p }}</p>
      </div>
      <br />
    </div>
  </section>
</template>

<style scoped>
  .sub-title {
    margin-left: 12px;
  }

  .card {
    background: linear-gradient(0deg, hsl(210, 20%, 10%), transparent);
    border-radius: 6px;
    border-top: solid 2px var(--wei-color-divider);
    overflow: auto;
    padding: 0 24px 24px 12px;
  }

  @media screen and (max-width: 704px) {
    .sub-title {
      margin-left: unset;
    }

    .card {
      border-radius: unset;
      margin: 0 -12px;
    }
  }
</style>
