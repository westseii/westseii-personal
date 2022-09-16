<script setup>
  // import { onMounted, ref } from "vue";

  import aboutData from "../data/about.js";

  import WeiRule from "../components/WeiRule.vue";

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
      <div
        :key="data.id"
        class="card"
        v-for="data in aboutData"
      >
        <div class="card-header">
          <FontAwesomeIcon
            :icon="data.icon"
            class="card-header__icon"
            size="2x"
            v-if="data.icon"
          />
          <h3>{{ data.titleText }}</h3>
        </div>
        <WeiRule />

        <div v-html="data.content" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container {
    width: 100%;
  }

  .card {
    background: var(--wei-color-card);
    border-radius: 6px;
    overflow: auto;
    padding: 0 36px 36px 12px;
  }
  .card:nth-child(n + 2) {
    margin-top: 12px;
  }

  .card-header {
    align-items: center;
    color: var(--wei-color-link);
    display: flex;
  }
  .card-header__icon {
    margin-right: 12px;
  }

  .card:deep(.indent) {
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
