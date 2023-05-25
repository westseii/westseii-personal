<script setup>
  const props = defineProps({
    entryData: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div>
    <div class="flex">
      <div
        class="entry__l title"
        v-if="entryData.name"
      >
        {{ entryData.name }}
      </div>

      <div
        class="entry__mid"
        v-if="entryData.desc"
      >
        {{ entryData.desc }}
      </div>

      <div
        class="entry__r"
        v-if="entryData.period"
      >
        {{ entryData.period.from }} — {{ entryData.period.to }}
      </div>
    </div>

    <ul>
      <li v-for="bullet in entryData.bullets">
        {{ bullet }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .flex {
    align-items: center;
    display: flex;
  }

  .title {
    color: var(--wei-color-link);
  }

  .entry__l {
    width: 30%;
  }
  .entry__mid {
    text-align: center;
    width: 40%;
  }
  .entry__r {
    text-align: right;
    width: 30%;
  }
</style>
