<script setup>
  import { onMounted, ref } from "vue";

  import WeiRule from "../components/WeiRule.vue";

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

        <div>
          <p
            class="indent"
            v-for="p in text.paragraphs"
          >
            {{ p }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card {
    background: var(--wei-color-card);
    border-radius: 6px;
    overflow: auto;
    padding: 0 36px 36px 12px;
  }
  .card:nth-child(n + 2) {
    margin-top: 12px;
  }

  .indent {
    text-indent: 2rem;
  }

  @media screen and (max-width: 704px) {
    .card {
      border-radius: unset;
      margin: 0 -12px;
    }
    .card:first-child {
      background: linear-gradient(180deg, transparent, var(--wei-color-card) 50px);
    }
    .card:nth-child(n + 2) {
      margin-top: unset;
    }
    .card:last-child {
      background: linear-gradient(180deg, var(--wei-color-card) calc(100% - 50px), transparent);
    }
  }
</style>
