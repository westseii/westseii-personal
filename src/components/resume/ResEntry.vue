<script setup>
  const props = defineProps({
    entryObject: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div>
    <div class="flex">
      <h3
        class="entry-l desat"
        v-if="entryObject.name"
      >
        {{ entryObject.name }}
      </h3>

      <div
        class="entry-mid"
        v-if="entryObject.desc"
      >
        {{ entryObject.desc }}
      </div>

      <div
        class="entry-r"
        v-if="entryObject.period"
      >
        {{ entryObject.period.from }} — {{ entryObject.period.to }}
      </div>
    </div>

    <ul>
      <li v-for="bullet in entryObject.bullets">
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

  .desat {
    filter: saturate(0);
  }

  .entry-l {
    width: 30%;
  }
  .entry-mid {
    text-align: center;
    width: 40%;
  }
  .entry-r {
    text-align: right;
    width: 30%;
  }
</style>
