<script setup>
  const props = defineProps({
    cardContent: Object,
  });
</script>

<template>
  <div class="card">
    <div class="card-header">
      <FontAwesomeIcon
        :icon="cardContent.icon"
        class="card-header__icon"
        size="2x"
        v-if="cardContent.icon"
      />
      <h3>{{ cardContent.titleText }}</h3>
    </div>

    <div v-html="cardContent.content" />

    <slot name="btm-content"></slot>
  </div>
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
