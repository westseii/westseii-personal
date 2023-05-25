<script setup></script>

<template>
  <div class="card">
    <slot name="card-content"></slot>
  </div>
</template>

<style scoped>
  .card {
    background: var(--wei-color-card);
    border-radius: 6px;
    overflow: auto;
    padding: 0 12px 12px 12px;
  }
  .card:nth-child(n + 2) {
    margin-top: 12px;
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
